import { BentoSection } from '@/components/sections/bento-section';

import { CTASection } from '@/components/sections/cta-section';
import { FAQSection } from '@/components/sections/faq-section';
import { FeatureSection } from '@/components/sections/feature-section';
import { FooterSection } from '@/components/sections/footer-section';
import { GrowthSection } from '@/components/sections/growth-section';
import { HeroSection } from '@/components/sections/hero-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { QuoteSection } from '@/components/sections/quote-section';
import { ServicesSection } from '@/components/sections/services-section';
// import { TestimonialSection } from '@/components/sections/testimonial-section';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full'>
      <HeroSection />
      {/* <CompanyShowcase /> */}
      <BentoSection />
      <QuoteSection />
      <ServicesSection />
      <FeatureSection />
      <GrowthSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      {/* <TestimonialSection /> */}
      <FooterSection />
    </main>
  );
}
