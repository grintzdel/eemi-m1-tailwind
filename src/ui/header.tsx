'use client'

import React, { useState } from 'react'
import { Button } from './button'

type HeaderProps = Record<string, never>

export const Header: React.FC<HeaderProps> = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-slate-50">
      <nav className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-[24px] font-bold tracking-[-0.13px] text-slate-800" style={{ fontFamily: 'var(--font-rubik)' }}>
          Brainwave.io
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-9 text-[15px] font-bold tracking-[-0.1px] text-slate-800 transition-colors hover:text-slate-600 md:flex">
          <li>
            <a href="#">Demos</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button variant="primary">Buy now - Starting at $99</Button>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-slate-800 transition-all ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-slate-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-slate-800 transition-all ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-slate-50 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-[15px] font-bold tracking-[-0.1px] text-slate-800">
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Demos
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Pages
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Support
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
