import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Home() {

   

  return (
    <>

    {/* Blue Part */}

    <div className="w-full h-auto bg-[#5228f5] font-['Inter'] flex flex-col gap-10 text-center justify-evenly my-10">

        <div className=''>
            <h1 className= "text-white text-7xl leading-normal font-medium">
                Take Part In Our
                <br />
                Excellent Quiz Challenge
            </h1>
        </div>

        <p className='text-white m-0 text-xl'>Engage in challenging trivia games on our quiz platform</p>

        <div className='text-white mx-auto flex text-center'>
            <NavLink to="/register">
                <button className="m-1 p-4 rounded-full bg-[#291477] text-white font-medium font-['Inter'] hover:scale-105">
                            Getting Started
                </button>
            </NavLink>
            <NavLink to="/about">
                <button className="m-1 p-4 font-['Inter'] font-bold hover:scale-105">
                            Learn More &rarr;
                </button>
            </NavLink>

        </div>
    </div>

    {/* Grey Part */}
    <div className='w-full h-auto flex flex-wrap justify-center bg-[#eff0f2]'>

        <div className='w-auto h-full py-20 my-auto font-["Inter"] text-center'>

           <div className='pb-4'>
                <p className='pb-8 text-[#5228f5] font-semibold'>FEATURES</p>
                <h2 className='pb-8 font-bold text-5xl'>Exciting Quiz Games</h2>
                <p className='pb-8 text-[#595959]'>Experience The Fun Of Engaging Quizzes</p>
            </div> 

            <div className='w-2/3 mx-auto'>

                <ul className='mx-auto flex flex-wrap justify-center gap-6'>

                    <li className='mx-auto hover:scale-105 transition-all'>
                        <NavLink to="#">
                            <div className='w-[485px] flex bg-white p-3.5 rounded-lg'>

                                <img className='h-[22px] w-[22px] my-2' src='./src/assets/icons8-unity-50.png'/>

                                <div className='flex flex-col mx-5 text-left leading-loose font-["Inter"]'>
                                    <h3 className='inline-block font-medium text-3xl'>Multiple Choice Questions</h3>
                                    <p className='text-[#8b8b8b]'>Participate in Multiple Choice Questions</p>
                                </div>
                                
                            </div>
                        </NavLink>
                    </li>

                    <li className='mx-auto hover:scale-105 transition-all'>
                        <NavLink to="#">
                            <div className='w-[485px] flex bg-white p-3.5 rounded-lg'>

                                <img className='h-[22px] w-[22px] my-2' src='./src/assets/icons8-unity-50.png'/>

                                <div className='flex flex-col mx-5 text-left leading-loose font-["Inter"]'>
                                    <h3 className='inline-block font-medium text-3xl'>Choose Difficulty Levels</h3>
                                    <p className='text-[#8b8b8b]'>Select from a variety of difficulty levels</p>
                                </div>
                                
                            </div>
                        </NavLink>
                    </li>

                    <li className='mx-auto hover:scale-105 transition-all'>
                        <NavLink to="#">
                            <div className='w-[485px] flex bg-white p-3.5 rounded-lg'>

                                <img className='h-[22px] w-[22px] my-2' src='./src/assets/icons8-unity-50.png'/>

                                <div className='flex flex-col mx-5 text-left leading-loose font-["Inter"]'>
                                    <h3 className='inline-block font-medium text-3xl'>Select Topics</h3>
                                    <p className='text-[#8b8b8b]'>Choose from a variety of topics</p>
                                </div>
                                
                            </div>
                        </NavLink>
                    </li>

                    <li className='mx-auto hover:scale-105 transition-all'>
                        <NavLink to="#">
                            <div className='w-[485px] flex bg-white p-3.5 rounded-lg overflow-hidden'>

                                <img className='h-[22px] w-[22px] my-2' src='./src/assets/icons8-unity-50.png'/>

                                <div className='flex flex-col mx-5 text-left leading-loose font-["Inter"]'>
                                    <h3 className='inline-block font-medium text-3xl'>Compete With Your Friends</h3>
                                    <p className='text-[#8b8b8b]'>Beat your friends with your knoeledge</p>
                                </div>
                                
                            </div>
                        </NavLink>
                    </li>

                </ul>

            </div>

        </div>
    </div>

    <div className='w-auto h-auto bg-[#5228f5] text-white flex flex-col gap-4 items-center justify-evenly p-8'>

        <h1 className='pb-8 mx-auto text-center font-bold text-5xl'>Choose Difficulty and Topics</h1>
        <p className='text-center'>Customize your quizzes with various difficulty levels and a wide range of topics</p>
        <NavLink to="/register">
                <button className="m-1 p-4 rounded-full bg-[#291477] text-white font-medium font-['Inter'] hover:scale-105">
                            Explore Options
                </button>
            </NavLink>

    </div>

</>
    
  )
}

export default Home