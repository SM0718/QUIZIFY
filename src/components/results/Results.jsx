import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {NavLink, useNavigate} from 'react-router-dom'
import appwriteService from '../../appwrite/config'
import Img from '../passFail/Img'
import authService from '../../appwrite/auth'

function Results() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  const [data, setData] = useState([])
  var currentDate = new Date();
  const authStatus = useSelector((state) => state.status)

  // useEffect(() => {
  //   if(!authStatus){
  //     navigate("/login")
  //   }
  // }, [authStatus])

  useEffect(() => {
    getScores()
  },)

  const getScores = async() => {
    setError("")
    try {
      const user = await authService.getCurrentUser()
      if(user) {
        console.log(user.status, currentDate)
        const userData = await appwriteService.getUserData(user.email)
        if(userData) {
          console.log(userData)
          setData(userData.documents)
        } else {
          navigate("/login")
        }
      }
      
    } catch (error) {
      setError(error.message)
    }
  }

  const deleteData = async(postId) => {
    setError("")
    try {
      await appwriteService.deleteUserInfo(postId)
    } catch (error) {
      setError(error.message)
    }
  }
  
  return (
    <>
    <p className='text-center text-red-500 text-xl font-semibold'>{error && error.message}</p>
    <div className='w-full h-auto flex flex-wrap justify-center p-8 gap-8'>
      
      {
      (data.length !== 0)? 
       (data.map((playerInfo) => (
        <div className='w-80 h-auto flex flex-col justify-between rounded-xl p-2 bg-white text-black' key={playerInfo.$id}>
          <Img score={playerInfo.playerScore}/>
          <ul>
            <li className='flex gap-2'><span className='text-2xl font-["Inter"]'>Name:</span><p className='text-2xl'>{playerInfo.playerName}</p></li>
            <li className='flex gap-2'><span className='text-2xl font-["Inter"]'>Score:</span><p className='text-2xl'>{playerInfo.playerScore} out of 10</p></li>
            <li className='flex gap-4'><button onClick={() => deleteData(playerInfo.$id)} className='w-1/2 my-6 p-3 rounded-full bg-[#D30000] text-white font-medium
                     font-["Inter"] hover:scale-105'>Delete</button>
              <button className='w-1/2 my-6 p-3 rounded-full bg-[#291477] text-white font-medium
                     font-["Inter"] hover:scale-105' onClick={() => navigate('/quiz')}>{
                      playerInfo.playerScore < 5? "Try Again" : "Play Again"
                     }</button>
              </li>
          </ul>
        </div>
      ))):
      (<div className='w-full flex flex-col justify-center content-center gap-10 my-10'>
      <div className='w-16 h-16 mx-auto rounded-full border-2 border-t-black animate-spin'/>
      <div>
         <p className='text-center text-white text-xl'>Haven't Played Any Games Yet?? <NavLink to={"/quiz"} className="text-blue-400">Play Now</NavLink></p>
      </div>
    </div>)
      
      }
      </div>
    </>
    
  )
}

export default Results