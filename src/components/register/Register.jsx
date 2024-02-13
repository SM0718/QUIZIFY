import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import InputField from '../inputField/InputField'
import {useForm} from 'react-hook-form'
import Button from '../Button'

function Register() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const createPlayer = async(data) => {
        setError("")
        try {
            const create = await authService.createAccount({email: data.email, password: data.password, name: data.name})
            if(create) {
                console.log(create)
                navigate("/login")
                if(verification) {
                    console.log(verification)
                }
            } 
        } catch (error) {
            if(error.message === "A user with the same id, email, or phone already exists in this project.") {
                setError("User with same email already exists, please try again with a different email")
            } else {
                setError(error.message)
            }
            
        }
    }

  return (
    <div className="w-full my-4 h-auto bg-[#5228f5]">
        <div className="w-5/6 sm:w-1/3 h-auto mx-auto py-10 flex flex-col">
            <form onSubmit={handleSubmit(createPlayer)} className="my-auto flex flex-col justify-center gap-4">
                
               
                <span className='border-b-2 border-black leading-loose'>
                    <InputField
                    label="Name:"
                    className='w-full text-white bg-transparent focus:outline-none'  
                    id='name' 
                    type='text'
                    {...register("name", {
                        required: true,
                    })}
                    />
                </span>

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
                    // onChange={(e) => setPlayerName(e.target.value)} 
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
                     font-["Inter"] hover:scale-105'>Register</Button>
                </span>
                
            </form>
            <p className='text-center'>Already have an account? <NavLink to={"/login"} className="text-blue-300">Login</NavLink></p>
            {error && <p className='text-red-500 text-center'>{error}</p>}
        </div>
    </div>
  )
}

export default Register