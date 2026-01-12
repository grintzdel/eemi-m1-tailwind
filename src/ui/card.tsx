import React from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '' }): React.JSX.Element => {
  return <div className={`rounded-lg bg-white shadow-sm ${className}`}>{children}</div>
}

type ProductCardProps = {
  title: string
  subtitle: string
  description: string
  price: string
  image: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  description,
  price,
  image,
}): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div>
        <img src={image} alt={title} className="h-64 w-64 object-contain" />
      </div>

      <div className="flex flex-col items-center gap-[15px]">
        <h3 className="text-[21px] font-bold tracking-[-0.5px] text-[dark-color]">{title}</h3>
        <p className="text-center text-[17px] text-[dark-color] opacity-70">{description}</p>
      </div>

      <div className="mt-[11px]">
        <button className="w-full rounded-md bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700">
          Buy now - {price}
        </button>
      </div>
    </div>
  )
}
