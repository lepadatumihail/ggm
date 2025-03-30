import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

export function HeroVideoSection() {
  return (
    <div className='relative px-6 mt-10'>
      <div className='relative size-full shadow-xl rounded-2xl overflow-hidden'>
        <HeroVideoDialog
          className='block dark:hidden'
          animationStyle='from-center'
          videoSrc='/ggm-banner.mp4'
          thumbnailSrc='/video-thumb.png'
          thumbnailAlt='Hero Video'
        />
        <HeroVideoDialog
          className='hidden dark:block'
          animationStyle='from-center'
          videoSrc='/ggm-banner.mp4'
          thumbnailSrc='/video-thumb.png'
          thumbnailAlt='Hero Video'
        />
      </div>
    </div>
  );
}
