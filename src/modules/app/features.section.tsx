import React from 'react'
import Image from 'next/image'
import { FeatureItem } from '@/ui/feature-item'

type FeaturesSectionProps = Record<string, never>

export const FeaturesSection: React.FC<FeaturesSectionProps> = (): React.JSX.Element => {
  return (
    <section className="w-full bg-indigo-50">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        <div className="w-full">
          <Image
            src="/Running Image.png"
            alt="Person running with AirPods"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-8 px-6 py-12 sm:px-12 sm:py-16 lg:gap-[110px] lg:px-[100px] lg:py-[164px]">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[32px] font-bold tracking-[-1.8px] text-[dark-color] md:text-[40px] lg:text-[48px]">
              Listen music <br className="hidden lg:inline" />
              anytime, anywhere.
            </h2>
            <p className="text-[16px] font-normal text-[dark-color] opacity-70 md:text-[17px] lg:text-[19px]">
              We share common trends and strategies <br className="hidden lg:inline" />
              for improving your rental income.
            </p>
          </div>

          <div className="flex flex-col gap-[33px] lg:flex-row">
            <FeatureItem
              iconSrc="/icon-1.svg"
              title="Comfortable Buds"
              description="With lots of unique blocks, you can easily build a page without coding."
            />
            <FeatureItem
              iconSrc="/icon-2.svg"
              title="Powerful Bass"
              description="With lots of unique blocks, you can easily build a page without coding."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
