import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import Img from './passFail/Img'

function Leaderboard() {

  const [scores, setGetScores] = useState([])

  const highScores = async() => {
    try {
      const data = await appwriteService.getHighScores()
      if(data) {
        setGetScores(data.documents)
        scores.map((items) => (
          console.log(items.playerName)
        ))
      }
      
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    highScores()
  }, [])

  return (

    <>
    <h2 className='text-center text-white text-2xl my-8 mx-4'>Here are the top scorers from around the world</h2>
    <div className='w-full h-auto flex flex-col justify-center gap-4 my-4'>
        <div className='w-5/6 sm:w-2/3 h-10 mx-auto bg-white rounded-xl px-8 flex justify-between'>
          <p className='w-1/3 my-auto text-center'>Result</p>
          <p className='w-1/3 my-auto text-center'>Name</p>
          <p className='w-1/3 my-auto text-center'>Scores</p>
        </div>
      
      {
        (scores.length !== 0)? (
          scores.map((items) => 
           <div className='w-5/6 sm:w-2/3 h-20 mx-auto bg-white rounded-xl px-8'>
              <div className='w-full h-full flex justify-evenly'>
                <div className='w-1/3 my-auto flex justify-center'>
                  <Img className={"w-10 h-10 my-auto"} score={items.playerScore}/>
                  </div>
                
                <h1 className='w-1/3 my-auto text-center'>{items.playerName}</h1>
                <p className='w-1/3 my-auto text-center'>{items.playerScore}</p>
              </div>
            </div>
          )
        ):
        <div className='w-full flex flex-col justify-center content-center gap-10 my-10'>
          <div className='w-16 h-16 mx-auto rounded-full border-2 border-t-black animate-spin'/>
        </div>
        
      }
    </div>
    </>
    
  )
}

export default Leaderboard