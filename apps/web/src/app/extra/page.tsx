'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { Logo } from '@/components/common/Logo';

export default function ExtraPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      redirect('/extra/books');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 animation-pulse">
      <Logo isVertical={true} size="xl" isLoading={true} showBeta={false} />
    </div>
  );
}