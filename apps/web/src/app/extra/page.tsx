'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/components/pages/extras/Sidebar';
import ExtraHelper from './ExtraWrapper';

const Tabs = [
  'explore',
  'calculate',
  'library',
  'notes',
  'formular',
  'calendar',
];

export default function ExtraPage() {
  
  const router = useRouter();
  const searchParams = useSearchParams();

  // set the default tab is explore
  const tabParam = searchParams.get('tab') || 'explore';
  const initialTabIndex = Tabs.indexOf(tabParam);
  const validTabIndex = initialTabIndex === -1 ? 0 : initialTabIndex;

  const [tabIndex, setTabIndex] = useState(validTabIndex);
  const [isFading, setIsFading] = useState(false);

  // Ref to the scrollable container
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {

    // get current URL
    const params = new URLSearchParams(window.location.search);
    // update the tab query parameter
    params.set('tab', Tabs[tabIndex]);
    
    router.push(`/extra?${params.toString()}`, { scroll: true });

    setIsFading(true);
    const timeout = setTimeout(() => {
      setIsFading(false);
    }, 100);

    // Scroll the scrollable container to top
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return () => clearTimeout(timeout);
  }, [tabIndex, router]);

  const handleTabChange = (index: number) => {
    if (index !== tabIndex) {
      setTabIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-29 lg:pt-19 max-w-7xl mx-auto h-screen">
        <div className="flex gap-5 h-full">
          <Sidebar currentTab={tabIndex} onTabChange={handleTabChange} />
          <main ref={mainRef}
            className="flex-1 bg-white rounded-3xl p-5 shadow relative overflow-auto"
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            <style jsx>{`main::-webkit-scrollbar { display: none;  }`}</style>
            <div className={`transition-opacity duration-200 ease-in-out ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <ExtraHelper currentTab={Tabs[tabIndex]} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
