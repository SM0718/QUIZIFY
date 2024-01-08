import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    var currentDate = new Date();

  return (
    <div className='w-full h-full flex flex-col items-center text-center bg-black'>

        <div className='p-8'>
            <h1 className="pb-6 font-['Lato'] font-medium text-4xl text-white cursor-pointer" onClick={() => navigate("/")}>QUIZIFY</h1>
            <div>
                <ul className='flex flex-col sm:flex-row gap-10 sm:gap-14 text-white'>

                <li>
                    <NavLink to='/' className={({isActive}) => `${isActive ? "text-blue-700 font-bold" : "text-white"}  font-['Inter'] hover:text-blue-700`}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/quiz' className={({isActive}) => `${isActive ? "text-blue-700 font-bold" : "text-white"} font-['Inter'] hover:text-blue-700`}>
                        Quiz
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/about' className={({isActive}) => `${isActive ? "text-blue-700 font-bold" : "text-white"} font-['Inter'] hover:text-blue-700`}>
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/results' className={({isActive}) => `${isActive ? "text-blue-700 font-bold" : "text-white"} font-['Inter'] hover:text-blue-700`}>
                        Score
                    </NavLink>
                </li>
                </ul>
            </div>
        </div>

        <div className='w-5/6 h-[1px] bg-white'></div>

        <div className='w-5/6 py-8 text-white flex flex-row justify-between'>

            <p>&copy;{currentDate.getFullYear()}, QUIZIFY PVT LTD</p>

            <ul className='w-[150px] flex justify-evenly'>

                <li>
                   <Link to='https://www.instagram.com/sagnix__/'>
                    <img className='w-[22px] h-[22px]' src='./src/assets/instagram.png'/>
                </Link> 
                </li>
                

                <Link to='https://www.linkedin.com/in/sagnik-majumder-bbbb96200/'>
                    <img className='w-[22px] h-[22px]' src='./src/assets/linkedin.png'/>
                </Link>

                <Link to='https://github.com/SM0718'>
                    <img className='w-[22px] h-[22px]' src='./src/assets/social.png'/>
                </Link>
            </ul>
            
        </div>

    </div>
  )
}

export default Footer