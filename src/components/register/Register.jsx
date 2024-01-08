import React, {useState} from 'react'
import { addPlayerInfo } from '../../app/forum/playerSlicer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [playerName, setPlayerName] = useState("")
    const [playerNumber, setPlayerNumber] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handelClick = () => {
        if(playerName && playerNumber){
            if(isNaN(playerNumber) || playerNumber.length !== 10){
               alert("Enter a Valid Number")
            } else{
                dispatch(addPlayerInfo({playerName, playerNumber}))
                setPlayerName("")
                setPlayerNumber("")
                navigate('/quiz');
            }
            
        } else {
            alert("Enter username and password to proceed")
        }
        
    }

  return (
    <div className="w-full my-4 h-auto bg-[#5228f5]">
        <div className="w-5/6 sm:w-1/3 h-auto mx-auto py-10 flex flex-col">
            <form className="my-auto flex flex-col justify-center gap-4">
                
                <label className='font-["Inter"]' htmlFor='name'>Name:</label>
                <span className='border-b-2 border-black leading-tight'>
                    <input required onChange={(e) => setPlayerName(e.target.value)} className='w-full text-white bg-transparent focus:outline-none'  id='name' type='text'/>
                </span>

                <label className='font-["Inter"]' htmlFor='number'>Number:</label>
                <span className='border-b-2 border-black'>
                    <input onChange={(e) => setPlayerNumber(e.target.value)} className='w-full text-white bg-transparent focus:outline-none'  id='number' type='text'/>
                </span>
                
                <span className="flex justify-center">
                    <button onClick={(e) => {e.preventDefault()
                        handelClick()}} className='w-[200px] my-6 p-4 rounded-full bg-[#291477] text-white font-medium
                     font-["Inter"] hover:scale-105'>Play</button>
                </span>
                
            </form>
        </div>
    </div>
  )
}

export default Register