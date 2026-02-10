'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar, { ExtraTabs } from '@/components/pages/extras/Sidebar';
import CalculateContent from '@/components/pages/extras/calculate/calculation_page';
import LibraryContent from '@/components/pages/extras/library/LibraryPage';
import FormularContent from '@/components/pages/extras/formular/FormularPage';
import NotFound from '../not-found';

export const extraScrollRef: { current: HTMLDivElement | null } = { current: null };

export enum ExtraTab {
  Library = 'library',
  Formula = 'formula',
  Calculate = 'calculate',
}

const Tabs: ExtraTab[] = [
  ExtraTab.Library,
  ExtraTab.Formula,
  ExtraTab.Calculate,
];

function ExtraWrapper({ currentTab }: { currentTab: ExtraTab }) {
  switch (currentTab) {
    case ExtraTab.Calculate:
      return <CalculateContent />;
    case ExtraTab.Library:
      return <LibraryContent />;
    case ExtraTab.Formula:
      return <FormularContent />;
    default:
      return <NotFound />;
  }
}

function ExtraPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get('tab') as ExtraTab | null;
  const initialIndex = tabParam ? Tabs.indexOf(tabParam) : -1;
  const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', Tabs[tabIndex]);

    router.push(`/extra?${params.toString()}`, { scroll: false });

    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tabIndex, router, searchParams]);

  return (
    <div className="bg-gray-50 relative">
      <div className="pt-22 lg:pt-19 max-w-7xl mx-auto h-screen">
        <div className="flex gap-5 h-[calc(100vh-7rem)] lg:h-[calc(100vh-5rem)]">
          <Sidebar currentTab={tabIndex} onTabChange={setTabIndex} />

          <main className="flex-1 h-full bg-white rounded-3xl p-5 relative">
            <div
              ref={el => {
                mainRef.current = el;
                extraScrollRef.current = el;
              }}
              className="h-full overflow-auto"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

              <ExtraWrapper currentTab={Tabs[tabIndex]} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function ExtraPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-400">Loading...</div>}>
      <ExtraPageContent />
    </Suspense>
  );
}
