import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../app/forum/playerSlicer'
import InputField from './inputField/InputField'
import Button from './Button'

function Login() {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const createSession = async(data) => {
        setError("")
        try {
            const session = await authService.login({email: data.email, password: data.password})
            if(session){
                dispatch(login())
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='w-full my-4 h-auto bg-[#5228f5]'>
        <div className="w-5/6 sm:w-1/3 h-auto mx-auto py-10 flex flex-col">
        <form onSubmit={handleSubmit(createSession)} className="my-auto flex flex-col justify-center gap-4">
        <span className='border-b-2 border-black leading-loose'>
                <InputField
                    label="Email:"
                    className='w-full text-white bg-transparent focus:outline-none'
                    id='email' 
                    type='email'
                    {...register("email", {
                        required: true,
                    })}
                    /> 
            </span>
            <span className='border-b-2 border-black leading-loose'>

                <InputField
                    label="Password:"
                    className='w-full text-white bg-transparent focus:outline-none'
                    id='password' 
                    type='text'
                    {...register("password", {
                        required: true,
                    })}
                    /> 
             </span>   
                <span className="flex justify-center">
                    <Button type='submit'  className='w-[200px] my-6 p-4 rounded-full bg-[#291477] text-white font-medium
                     font-["Inter"] hover:scale-105'>Login</Button>
                </span>
                {error && <p className='text-red-500 text-center pb-2'>{error}</p>}
        </form>
        <p className='text-center'>Don't an account? <NavLink to={"/register"} className="text-blue-300">Click to Register</NavLink></p>
            
        </div>
        

    </div>
  )
}

export default Login