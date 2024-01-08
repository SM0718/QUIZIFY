import React from 'react';

function Button({ children, className, onClick }) {
  return (
    <button
      className={!className
          ? `w-[200px] ml-auto p-4 rounded-full bg-[#291477] text-white font-medium font-["Inter"] hover:scale-105`
          : className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
