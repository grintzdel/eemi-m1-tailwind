import React from 'react'

type LifestyleSectionProps = Record<string, never>

export const LifestyleSection: React.FC<LifestyleSectionProps> = (): React.JSX.Element => {
  return (
    <section className="w-full bg-slate-50">
      <div className="w-full">
        <img src="/ImageAdv.png" alt="AirPods lifestyle" className="h-auto w-full object-cover" />
      </div>
    </section>
  )
}
