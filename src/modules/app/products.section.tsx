import React from 'react'
import { ProductCard } from '@/ui/card'

type ProductsSectionProps = Record<string, never>

export const ProductsSection: React.FC<ProductsSectionProps> = (): React.JSX.Element => {
  return (
    <section className="w-full bg-slate-50">
      <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 sm:px-12 sm:py-16 lg:gap-[110px] lg:px-[100px] lg:py-[164px]">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-center text-[32px] font-bold tracking-[-1.8px] text-[dark-color] md:text-[40px] lg:text-[48px]">Get your airpod now.</h2>
          <p className="text-center text-[16px] font-normal text-[dark-color] opacity-70 md:text-[17px] lg:text-[19px]">
            We share common trends and strategies <br className="hidden lg:inline" />
            for improving your rental income.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            title="Midnight Green"
            subtitle="Airpods Max green"
            description="AirPods (2nd gen) iPhone Colors with Wireless Charging Case."
            price="$99"
            image="/Airpods Green.png"
          />
          <ProductCard
            title="Silver"
            subtitle="Airpods Max silver"
            description="AirPods (2nd gen) iPhone Colors with Wireless Charging Case."
            price="$99"
            image="/Airpods White.png"
          />
          <ProductCard
            title="Gold"
            subtitle="Airpods Max gold"
            description="AirPods (2nd gen) iPhone Colors with Wireless Charging Case."
            price="$99"
            image="/Airpods Pink.png"
          />
        </div>
      </div>
    </section>
  )
}
