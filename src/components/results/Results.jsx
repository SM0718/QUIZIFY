import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { removePlayerInfo } from '../../app/forum/playerSlicer'
import Img from '../passFail/Img'

function Results() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let player = useSelector(state => state.playerInfos)

  
  return (
    <div className='w-full h-auto flex flex-wrap justify-center p-8 gap-8'>{
      (player.length !== 0)? 
       (player.map((playerInfo) => (
        <div className='w-80 h-auto flex flex-col justify-between rounded-xl p-4 bg-white text-black' key={playerInfo.playerId}>
          <Img score={playerInfo.playerScore}/>
          <ul>
            <li className='flex gap-2'><span className='text-2xl font-["Inter"]'>Name:</span><p className='text-2xl'>{playerInfo.playerName}</p></li>
            <li className='flex gap-2'><span className='text-2xl font-["Inter"]'>Number:</span><p className='text-2xl'>{playerInfo.playerNumber}</p></li>
            <li className='flex gap-2'><span className='text-2xl font-["Inter"]'>Score:</span><p className='text-2xl'>{playerInfo.playerScore} out of 10</p></li>
            <li className='flex gap-4'><button onClick={() => {dispatch(removePlayerInfo(playerInfo.playerId))}} className='w-1/2 my-6 p-3 rounded-full bg-[#D30000] text-white font-medium
                     font-["Inter"] hover:scale-105'>Delete</button>
              <button className='w-1/2 my-6 p-3 rounded-full bg-[#291477] text-white font-medium
                     font-["Inter"] hover:scale-105' onClick={() => navigate('/register')}>{
                      playerInfo.playerScore < 5? "Try Again" : "Play Again"
                     }</button>
              </li>
          </ul>
        </div>
      ))):
      (<div className='w-full h-auto flex justify-center bg-[#5228f5]'>
        <div className='w-[500px] h-auto flex flex-col justify-between text-center rounded-xl p-8 bg-white text-black'>
          <img className='w-auto h-1/2 mx-auto' src='/playNow.png' alt='Play Now Image'/>
          <span className='p-6'>
            <h1 className='text-2xl font-["Inter"] p-4'>No Scores To Display</h1>
            <h1 className='text-2xl font-["Inter"] p-4'>Play some games now</h1>
          </span>
            <button className='w-1/2 my-6 mx-auto p-3 rounded-full bg-[#291477] text-white font-medium
                     font-["Inter"] hover:scale-105 animate-pulse' onClick={() => navigate('/register')}>Play Now</button>
        </div>
      </div>)
      
      }</div>
  )
}

export default Results