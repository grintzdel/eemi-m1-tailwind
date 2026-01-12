import React from 'react'
import Image from 'next/image'

type TestimonialSectionProps = Record<string, never>

export const TestimonialSection: React.FC<TestimonialSectionProps> = (): React.JSX.Element => {
  return (
    <section className="w-full bg-indigo-600">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 sm:px-12 sm:py-16 lg:gap-[110px] lg:px-[100px] lg:py-[164px]">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[32px] font-bold tracking-[-1.8px] text-white md:text-[40px] lg:text-[48px]">
              Comfortable buds <br className="hidden lg:inline" />
              with better sound.
            </h2>
            <p className="text-[16px] font-normal text-indigo-100 opacity-65 md:text-[17px] lg:text-[19px]">
              We share common trends and strategies <br className="hidden lg:inline" />
              for improving your rental income.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[20px] lg:flex-row lg:items-start lg:justify-start lg:gap-[22px]">
            <img src="/ProfilReview.png" alt="Esther Bell" className="h-12 w-12 rounded-full object-cover" />
            <div className="flex flex-col items-center gap-[15px] lg:items-start lg:gap-[23px]">
              <p className="text-center text-[17px] text-white md:text-[19px] lg:text-left lg:text-[21px]" style={{ fontFamily: 'var(--font-rubik)' }}>
                "You made it so simple. My new site <br className="hidden lg:inline" />
                is so much faster and easier to work <br className="hidden lg:inline" />
                with than my old site."
              </p>
              <p className="text-[15px] font-bold text-white opacity-65">Esther Bell</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Image
            src="/Enjoying Image.png"
            alt="Person enjoying music"
            width={1920}
            height={1080}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
