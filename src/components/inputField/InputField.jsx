import React from 'react'

function InputField({children, type, label, className, ...props}) {
  return (
    <div>
        <label htmlFor={label}>{children}</label>
        <input type={type} id={label} {...props}/>
    </div>
  )
}

export default InputField