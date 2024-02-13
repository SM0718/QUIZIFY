import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Footer() {
    const navigate = useNavigate()
    let currentDate = new Date();
    const status = useSelector((state) => state.status)

    const footerItems = [
        {
            name: "Home",
            slug: "/"
        },
        {
            name: "Quiz",
            slug: status? "/quiz" : "/register"
        },
        {
            name: "About",
            slug: "/about"
        },
        {
            name: "Leaderboard",
            slug: "/leaderboard"
        },
    ]

  return (
    <div className='w-full h-full flex flex-col items-center text-center bg-black'>

        <div className='p-8'>
            <h1 className="pb-6 font-['Lato'] font-medium text-4xl text-white cursor-pointer" onClick={() => navigate("/")}>QUIZIFY</h1>
            <div>
                <ul className='flex flex-col sm:flex-row gap-10 sm:gap-14 text-white'>

                {
                    footerItems.map((items) => {
                        return (
                    <li key={items.name}>
                    <NavLink to={items.slug} className={({isActive}) => `${isActive ? "text-blue-700 font-bold" : "text-white"} 
                    font-['Inter'] hover:text-blue-700`}>
                        {items.name}
                    </NavLink>
                </li>
                    )})
                }
                </ul>
            </div>
        </div>

        <div className='w-5/6 h-[1px] bg-white'></div>

        <div className='w-5/6 py-8 text-white flex flex-row justify-between'>

            <p>&copy;{currentDate.getFullYear()}, SAGNIK MAJUMDER</p>

            <ul className='w-[150px] flex justify-evenly'>

                <li>
                   <Link to='https://www.instagram.com/sagnix__/'>
                    <img className='w-[22px] h-[22px]' src='/instagram.png' alt='Instagram'/>
                </Link> 
                </li>
                

                <Link to='https://www.linkedin.com/in/sagnik-majumder-bbbb96200/'>
                    <img className='w-[22px] h-[22px]' src='/linkedin.png' alt='Linkdin'/>
                </Link>

                <Link to='https://github.com/SM0718'>
                    <img className='w-[22px] h-[22px]' src='/social.png' alt='Github'/>
                </Link>
            </ul>
            
        </div>

    </div>
  )
}

export default Footer
