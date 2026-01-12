import { Button } from '@/ui/button'
import { Image } from 'next/dist/client/image-component'
import React from 'react'

type HeroSectionProps = Record<string, never>

export const HeroSection: React.FC<HeroSectionProps> = (): React.JSX.Element => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-[150px]">
        <div className="flex flex-col items-center gap-[22px] text-center">
          <div className="w-full max-w-md">
            <Image
              src="/airpod-image.png"
              alt="AirPods"
              className="mb-[57px] h-auto w-full object-contain"
              width={1920}
              height={1080}
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[13px] font-semibold tracking-[1.63px] text-rose-600 uppercase">
              Non-stop music for long time
            </p>
            <h1 className="mb-[7px] text-4xl font-bold tracking-[-2px] text-[dark-color] md:text-5xl lg:text-6xl">
              Sound, that sounds better!
            </h1>
            <p className="mx-auto mb-[13px] text-[19px] text-[dark-color] opacity-70">
              With lots of unique blocks, you can easily build a page without coding. <br />
              Build your next consultancy website within few minutes.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[26px]">
            <Button variant="primary">Buy now - Starting at $99</Button>
            <button className="text-[13px] font-bold tracking-wide text-slate-800 uppercase transition-colors hover:text-slate-600">
              Watch in action
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
