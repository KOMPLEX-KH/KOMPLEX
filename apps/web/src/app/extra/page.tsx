'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/components/pages/extras/Sidebar';
import HelpSkeleton from '@/components/pages/extras/ExtraSkeleton';
import ExtraHelper from './ExtraWrapper';

const Tabs = [
  'explore',
  'calculate',
  'library',
  'notes',
  'formular',
  'calendar',
];

export default function HelpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // set the default tab is explore
  const tabParam = searchParams.get('tab') || 'explore';
  const initialTabIndex = Tabs.indexOf(tabParam);
  const validTabIndex = initialTabIndex === -1 ? 0 : initialTabIndex;

  const [tabIndex, setTabIndex] = useState(validTabIndex);
  const tab = Tabs[tabIndex];

  // create a smooth fade animation
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {

    // update the url without reloading the page
    router.push(`/extra?tab=${Tabs[tabIndex]}`, { scroll: false });

    // design a good smooth fade effect
    setIsFading(true);
    const timeout = setTimeout(() => {
      setIsFading(false);
    }, 100);

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
          <main
            className="flex-1 bg-white rounded-3xl p-6 shadow relative overflow-auto"
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          ><style jsx>{`main::-webkit-scrollbar { display: none;  }`}</style>
          <div
            className={`transition-opacity duration-200 ease-in-out ${
              isFading ? 'opacity-0' : 'opacity-100'}`}>
            <ExtraHelper currentTab={tab} />
          </div>
        </main>
      </div>
    </div>
  </div>
  );
}
