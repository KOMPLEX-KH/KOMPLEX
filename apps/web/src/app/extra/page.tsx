'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/components/pages/extras/Sidebar';
import ExtraHelper from './ExtraWrapper';


export const extraScrollRef: { current: HTMLDivElement | null } = { current: null };

const Tabs = ['explore', 'calculate', 'library', 'notes', 'formular', 'calendar'];

export default function ExtraPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get('tab') || 'explore';
  const initialTabIndex = Tabs.indexOf(tabParam);
  const validTabIndex = initialTabIndex === -1 ? 0 : initialTabIndex;

  const [tabIndex, setTabIndex] = useState(validTabIndex);
  const [isFading, setIsFading] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('tab', Tabs[tabIndex]);

    router.push(`/extra?${params.toString()}`, { scroll: false });

    setIsFading(true);
    const timeout = setTimeout(() => setIsFading(false), 100);

    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return () => clearTimeout(timeout);
  }, [tabIndex, router]);

  const handleTabChange = (index: number) => {
    if (index !== tabIndex) setTabIndex(index);
  };

  return (
    <div className="bg-gray-50 relative">
      <div className="pt-29 lg:pt-19 max-w-7xl mx-auto h-screen">
        <div className="flex gap-5 h-[calc(100vh-7rem)] lg:h-[calc(100vh-5rem)]">
          <Sidebar currentTab={tabIndex} onTabChange={handleTabChange} />

          <main className="flex-1 h-full bg-white rounded-3xl p-5 relative">
            <div
              ref={(el) => {
                mainRef.current = el;
                extraScrollRef.current = el; // ✅ Make it globally usable
              }}
              className="h-full overflow-auto"
              style={{
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

              <div
                className={`transition-opacity duration-200 ease-in-out ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <ExtraHelper currentTab={Tabs[tabIndex]} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
