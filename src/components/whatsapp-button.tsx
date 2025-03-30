'use client';
import { Button } from '@/components/ui/button';
import { WhatsappLogo } from '@phosphor-icons/react';

export function WhatsAppButton() {
  return (
    <Button
      asChild
      className='fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg'
      size='icon'
    >
      <a
        href='https://wa.me/34636769622'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat with us on WhatsApp'
      >
        <WhatsappLogo weight='fill' className='h-6 w-6' />
      </a>
    </Button>
  );
}
