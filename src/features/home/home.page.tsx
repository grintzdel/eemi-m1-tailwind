import React from 'react'
import { HeroSection } from '@/modules/app/hero.section'
import { FeaturesSection } from '@/modules/app/features.section'
import { TestimonialSection } from '@/modules/app/testimonial.section'
import { TrendyDesignsSection } from '@/modules/app/trendy-designs.section'
import { ProductsSection } from '@/modules/app/products.section'
import { LifestyleSection } from '@/modules/app/lifestyle.section'

type HomePageProps = Record<string, never>

const HomePage: React.FC<HomePageProps> = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <TrendyDesignsSection />
      <ProductsSection />
      <LifestyleSection />
    </React.Fragment>
  )
}

export default HomePage
