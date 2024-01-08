import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function Quiz() {

    const data = useLoaderData()


  return (
    <>
    
        <div className="w-full h-auto my-4 sm:my-2 py-4 bg-[#5228f5] font-['Inter'] flex flex-col text-center justify-evenly">

            <h1 className='text-white m-0 pb-8 text-4xl'>Choose A Topic</h1>

            <ul className='w-full h-auto flex flex-col lg:flex-row flex-wrap justify-evenly gap-4'>

            {

            data.trivia_categories.map((element) => (

            <li className='ml-2 px-2 basis-1/4' key={element.id}>
              <Link to={`/questions/${element.id}`}>
                <button className="w-full p-4 rounded-full bg-[#291477] text-white font-medium font-['Inter'] hover:scale-105">
                  {element.name}
                </button>
              </Link>
            </li>

          ))
          }

            </ul>

        </div>

    </>
  )
}

export default Quiz

export const catagoryLoader = async () => {
    const catagories = await fetch("https://opentdb.com/api_category.php")
    return catagories.json()
}

// export const catagory = async () => {
//     const catagoryLoaderById = await fetch(`https://opentdb.com/api.php?amount=50&category=${catagoryId}&difficulty=medium&type=multiple`)
// }