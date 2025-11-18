import React from 'react'

const Button = ({ icon, onClick, text, type = 'button', width,  variant }) => {
  return (
    <button
      type={type}
      className={`h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors
        ${(width || text ) ? 'w-20' : ''}
        ${variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}
        ${variant === 'delete' ? ' hover:bg-red-100 ' : ''}
         ${variant === 'edit' ? ' hover:bg-orange-100 ' : ''}
        `}
      onClick={onClick}
    >
      {icon ?? text}
    </button>
  )
}

export default Button