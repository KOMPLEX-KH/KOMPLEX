'use client';

import { useRef, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/pages/extras/Sidebar';

interface ExtraLayoutProps {
  children: ReactNode;
}

export default function ExtraLayout({ children }: ExtraLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="bg-gray-50 relative">
      <div className="pt-22 lg:pt-19 max-w-7xl mx-auto h-screen">
        <div className="flex gap-5 h-[calc(100vh-7rem)] lg:h-[calc(100vh-5rem)]">
          <Sidebar currentPath={pathname} />

          <main className="flex-1 h-full bg-white rounded-3xl p-5 relative">
            <div className="h-full overflow-auto scrollbar-hide">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}