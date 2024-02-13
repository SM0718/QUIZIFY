import React from 'react'

function Img({score, className}) {
  if(score <= 5){
    return(
        <img className={`w-full animate-[zoomIn_1s_ease-in-out] ${className}`} src='/fail.jpg' alt='Fail Image'/>
    )
  } else {
    return(
        <img className={`w-full animate-[zoomIn_1s_ease-in-out] ${className}`} src='/passed.jpg' alt='Pass Image'/>
    )
  }
}

export default Img