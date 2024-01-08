import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className="w-full h-auto bg-[#5228f5] font-['Inter'] flex flex-col gap-10 text-center justify-evenly my-10">

        <div className=''>
            <h1 className= "text-white text-6xl sm:text-7xl leading-normal font-medium">
                This is an Practice Project
                <br />
                Using The Tech Stack Below
            </h1>
        </div>

        <p className='text-white m-0 text-xl flex flex-col md:flex-row justify-center gap-10'>
          <span className='animate-bounce'>Tailwind</span>    
          <span className='animate-bounce'>React</span>   
          <span className='animate-bounce'>React Router Dom</span>    
          <span className='animate-bounce'>Redux Toolkit</span>
          <NavLink to='https://opentdb.com/' className='animate-bounce'>
            <span>OpenTrivia API</span>
          </NavLink>
        </p>

        <p className='text-white m-0 p-2 text-4xl flex flex-row justify-center gap-10'>Do Follow Me On My Socials Below</p>
        <div className='text-white mx-auto flex text-center'>
          <NavLink to='/'>
            <button className="m-1 p-4 rounded-full bg-[#291477] text-white font-medium font-['Inter'] hover:scale-105">
                            Checkout The Website
                </button>
          </NavLink>
                

        </div>
    </div>
  )
}

export default About