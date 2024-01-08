import React from 'react';

const Difficulty = ({ handleClick }) => {
  const handleButtonClick = (e) => {
    handleClick(e);
  };

  return (
    <div className='flex flex-col gap-6 p-8 bg-[#5228f5]'>
      <h1 className='text-white text-center text-4xl p-6'>Choose Your Desired Difficulty</h1>
      <button onClick={() => handleButtonClick('easy')} className="w-2/3 mx-auto p-4 rounded-full bg-[#291477] text-white font-bold font-['Inter'] hover:scale-105">Easy</button>
      <button onClick={() => handleButtonClick('medium')} className="w-2/3 mx-auto p-4 rounded-full bg-[#291477] text-white font-bold font-['Inter'] hover:scale-105">Medium</button>
      <button onClick={() => handleButtonClick('hard')} className="w-2/3 mx-auto p-4 rounded-full bg-[#291477] text-white font-bold font-['Inter'] hover:scale-105">Hard</button>
    </div>
  );
};

export default Difficulty;