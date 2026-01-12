import React from 'react'
import Image from 'next/image'

type FeatureItemProps = {
  iconSrc: string
  title: string
  description: string
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, title, description }): React.JSX.Element => {
  return (
    <div className="flex flex-row gap-[15px]">
      <div className="flex items-start justify-start">
        <Image src={iconSrc} alt={title} width={250} height={245} className="h-auto w-[80px] object-contain md:w-[100px]" />
      </div>
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-[21px] font-bold tracking-[-0.5px] text-[dark-color]">{title}</h3>
        <p className="text-[17px] font-normal text-[dark-color] opacity-70">{description}</p>
      </div>
    </div>
  )
}
