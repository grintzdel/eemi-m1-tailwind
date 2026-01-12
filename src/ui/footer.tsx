import React from 'react'

type FooterProps = Record<string, never>

export const Footer: React.FC<FooterProps> = (): React.JSX.Element => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:px-8 sm:py-8 md:flex-row md:py-[46px] lg:px-12">
        <div className="text-[24px] font-bold tracking-[-0.13px] text-slate-800">Brainwave.io</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[15px] font-bold tracking-[-0.1px] text-slate-600 transition-colors hover:text-slate-800">
            Privacy Policy
          </a>
          <a href="#" className="text-[15px] font-bold tracking-[-0.1px] text-slate-600 transition-colors hover:text-slate-800">
            Terms & Conditions
          </a>
          <a href="#" className="text-[15px] font-bold tracking-[-0.1px] text-slate-600 transition-colors hover:text-slate-800">
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}
