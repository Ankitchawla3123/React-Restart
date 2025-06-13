import React, { useId } from 'react'

function Input({label,
    type= "text",
    className= "",
    ...props
}, ref) {
  return (
    <div className='w-full'>
        {label && <label className='block mb-1 '>{label}
            </label>}

        <input type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border w-full ${className}`} 
        ref={ref}
        {...props}
        />
    </div>
  )
}

export default Input