import React from 'react'
import { Button } from './button'

type HeaderProps = Record<string, never>

export const Header: React.FC<HeaderProps> = (): React.JSX.Element => {
  return (
    <header className="w-full bg-slate-50">
      <nav className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold text-slate-800">Brainwave.io</div>
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
        <Button variant="primary">Buy now - Starting at $99</Button>
      </nav>
    </header>
  )
}
