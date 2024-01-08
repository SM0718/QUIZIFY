import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Button from '../button/Button'

function Navbar() {
    const navigate = useNavigate()
    const navbarItems = [
        {
            name: "Home",
            slug: "/"
        },
        {
            name: "Quiz",
            slug: "/register"
        },
        {
            name: "About",
            slug: "/about"
        },
        {
            name: "Results",
            slug: "/results"
        }
    ]


  return (

    <div className='h-[120px] bg-[#5228f5] p-6 m-0 '>
        <div className='w-4/5 flex justify-between px-8 py-2 mx-auto my-auto bg-white rounded-full'>

        <div className='my-auto'>
            <h1 className="font-['Lato'] font-medium text-4xl cursor-pointer" onClick={() => navigate("/")}>QUIZIFY</h1>
        </div>

        <div className='my-auto hidden md:flex'>
            <ul className='hidden sm:flex sm:justify-between sm:gap-14 sm:pl-4'>
                
                {
                    navbarItems.map((items) => {
                        return (
                    <li key={items.name}>
                    <NavLink to={items.slug} className={({isActive}) => `${isActive ? "text-blue-700 font-bold" : "text-black"} 
                    font-['Inter'] hover:text-blue-700`}>
                        {items.name}
                    </NavLink>
                </li>
                    )})
                }

            </ul>
        </div>

        <div className='w-full mx-4 flex justify-end md:hidden bg-none'>
            <select className='p-2 text-center block hover:border-[#5228f5] rounded-xl appearance-none border w-full leading-tight focus:outline-none
             focus:border-[#5228f5] focus:shadow-outline-blue' onChange={(e) => navigate(e.target.value)}
              value={window.location.pathname}>
            {
                    navbarItems.map((items) => {
                        return (
                    <option className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2' key={items.slug} value={items.slug}>
                        {items.name}
                </option>
                    )})
                }
                <option className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2' key='/register' value='/register'>
                        Register
                </option>
            </select>
        </div>

        <div className='my-auto'>
                    <NavLink to='/register'>
                         <Button className="w-[110px] m-1 p-2 lg:flex justify-center hidden rounded-full bg-[#291477] text-white hover:bg-white
                         hover:text-black hover:outline hover:outline-2 hover:outline-black font-bold font-['Inter']">Register
                            
                         </Button>
                    </NavLink>
        </div>


    </div>
    </div>
    
  )
}

export default Navbar