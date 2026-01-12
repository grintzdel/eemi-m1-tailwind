import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
}): React.JSX.Element => {
  const baseStyles = 'px-4 py-3 rounded-lg font-bold transition-colors text-[17px]'
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-white text-slate-800 border-2 border-slate-200 hover:bg-slate-50',
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  )
}
