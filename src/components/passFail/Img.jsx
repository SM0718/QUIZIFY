import React from 'react'

function Img({score}) {
  if(score <= 5){
    return(
        <img className='w-full animate-[zoomIn_1s_ease-in-out]' src='./src/assets/fail.jpg'/>
    )
  } else {
    return(
        <img className='w-full animate-[zoomIn_1s_ease-in-out]' src='./src/assets/passed.jpg'/>
    )
  }
}

export default Img