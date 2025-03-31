'use client';

import { SectionHeader } from '@/components/section-header';
import { siteConfig } from '@/lib/config';
import { Target, Sparkle, Robot } from '@phosphor-icons/react';

export function ServicesSection() {
  const { title, description, items } = siteConfig.services;

  // Map emoji to Phosphor icons
  const getIconComponent = (icon: string) => {
    switch (icon) {
      case '🎯':
        return <Target size={32} weight='fill' className='text-secondary' />;
      case '✨':
        return <Sparkle size={32} weight='fill' className='text-secondary' />;
      case '🤖':
        return <Robot size={32} weight='fill' className='text-secondary' />;
      default:
        return null;
    }
  };

  return (
    <section
      id='services'
      className='flex flex-col items-center justify-center gap-12 w-full relative py-24'
    >
      <SectionHeader>
        <h2 className='text-3xl md:text-5xl font-medium tracking-tighter text-center text-balance'>
          {title}
        </h2>
        <p className='text-muted-foreground/90 text-base text-center leading-relaxed relative z-10'>
          {description}
        </p>
      </SectionHeader>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-10'>
        {items.map((item) => (
          <div
            key={`service-${item.title}`}
            className='flex flex-col gap-6 p-6 rounded-3xl border border-border/40 bg-card/50 backdrop-blur-sm text-card-foreground 
              shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 
              transition-all duration-300 group relative overflow-hidden'
          >
            <div className='text-2xl text-primary'>
              {getIconComponent(item.icon)}
            </div>
            <h3
              className='text-2xl font-semibold tracking-tight group-hover:text-primary 
              transition-colors relative z-10'
            >
              {item.title}
            </h3>
            <p className='text-muted-foreground/90 text-base leading-relaxed relative z-10'>
              {item.description}
            </p>
            <div
              className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/5 
              group-hover:to-secondary/10 transition-colors duration-300'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
