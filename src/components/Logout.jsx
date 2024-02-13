import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../app/forum/playerSlicer'

function LogoutBtn({className}) {
    const dispatch = useDispatch()
    // const logoutHandler = async() => {
    //     try {
    //         const deleteUser = await authService.logout()
    //         if(deleteUser){
    //             console.log(deleteUser)
    //             dispatch(logout())
    //         }
    //     } catch (error) {
            
    //     }
    // }
    const logoutHandler = () => {
        authService.logout().then(() => {
          dispatch(logout())    
        })
    }
  return (
    <button
    className={className}
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn