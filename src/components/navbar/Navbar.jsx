import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../app/forum/playerSlicer'
import authService from '../../appwrite/auth'

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const status = useSelector((state) => state.status)
    const[authStatus, setAuthStatus] = useState(status)
    
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    const handelClick = (item) => {
        if(item.name !== "Logout") {
            navigate(item.slug)
        } else {
            logoutHandler()
        }
    }
    
    useEffect(() => {
        setAuthStatus(status);
    }, [status]);

    const navbarItems = [
        {
            name: "Home",
            slug: "/"
        },
        {
            name: "Quiz",
            slug: authStatus? "/quiz" : "/register"
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
     
    const buttons = [
        {
            name: "Register",
            slug: "/register",
            active: !authStatus
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Logout",
            slug: "",
            active: authStatus
        },
    ]
        
    


  return (

    <div className='h-[120px] bg-[#5228f5] p-6 m-0 '>
        <div className='w-4/5 flex flex-col sm:flex-row sm:justify-between justify-center px-8 py-2 mx-auto my-auto bg-white sm:rounded-full rounded-lg'>

        <div className='my-auto text-center pb-4 sm:pb-0'>
            <h1 className="font-['Lato'] font-medium text-3xl sm:text-4xl cursor-pointer" onClick={() => navigate("/")}>QUIZIFY</h1>
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

        <div className='my-auto flex gap-2'>
            {
                buttons.map((item) => (
                    
                    item.active? <Button
                    key={item.name} 
                    onClick={() => handelClick(item)}
                    className={"bg-[#5228f5] mx-auto p-2 rounded-2xl text-white"}>
                        {item.name}
                    </Button> : null
                    
                ))
            }     
        </div>


    </div>
    </div>
    
  )
}

export default Navbar