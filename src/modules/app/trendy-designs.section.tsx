import React from 'react'
import Image from 'next/image'

type TrendyDesignsSectionProps = Record<string, never>

export const TrendyDesignsSection: React.FC<TrendyDesignsSectionProps> = (): React.JSX.Element => {
  return (
    <section className="w-full" style={{ backgroundColor: 'var(--dark-color)' }}>
      <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 sm:px-12 sm:py-16 lg:gap-[110px] lg:px-[100px] lg:py-[164px]">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[32px] font-bold tracking-[-1.8px] text-white md:text-[40px] lg:text-[48px]">
            Trendy designs with <br />
            better sound quality.
          </h2>
          <p className="text-center text-[16px] font-normal text-white opacity-70 md:text-[17px] lg:text-[19px]">
            We share common trends and strategies <br />
            for improving your rental income.
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <Image
            src="/Air pods.png"
            alt="AirPods Pro"
            width={1920}
            height={1080}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
