'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/components/pages/extras/Sidebar';
import ExploreContent from '@/components/pages/extras/explore/content';
import CalculateContent from '@/components/pages/extras/calculate/content';
import LibraryContent from '@/components/pages/extras/library/content';
import NotesContent from '@/components/pages/extras/notes/content';
import FormularContent from '@/components/pages/extras/formular/content';
import CalendarContent from '@/components/pages/extras/calendar/content';
import LibraryContentSkeleton from '@/components/pages/extras/library/utils/BookSkeleton';
import NotesContentSkeleton from '@/components/pages/extras/notes/utils/NoteSkeleton';
import FormularContentSkeleton from '@/components/pages/extras/formular/utils/FormularSkeleton';
import CalculateContentSkeleton from '@/components/pages/extras/calculate/utils/CalculateSkeleton';
import NotFound from '../not-found';

export const extraScrollRef: { current: HTMLDivElement | null } = { current: null };

const Tabs = [
  'calculate',
  'library',
  'notes',
  'formula',
  // 'calendar'
];

interface ExtraWrapperProps {
  currentTab: string;
}

function ExtraWrapper({ currentTab }: ExtraWrapperProps) {
  const [loading, setLoading] = useState(true);
  const [prevTab, setPrevTab] = useState(currentTab);

  useEffect(() => {
    if (currentTab !== prevTab) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setPrevTab(currentTab);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [currentTab, prevTab]);

  if (loading) {
    switch (currentTab) {
      case 'library':
        return <LibraryContentSkeleton />;
      case 'notes':
        return <NotesContentSkeleton />;
      case 'calculate':
        return <CalculateContentSkeleton />;
      case 'formula':
        return <FormularContentSkeleton />;
      default:
        return (
          <div className="p-10 text-center text-gray-400">
            Loading...
          </div>
        );
    }
  }

  switch (currentTab) {
    case 'calculate':
      return <CalculateContent />;
    case 'library':
      return <LibraryContent />;
    case 'notes':
      return <NotesContent />;
    case 'formula':
      return <FormularContent />;
    // case 'calendar':
    //   return <CalendarContent />;
    default:
      return <NotFound />;
  }
}

export default function ExtraPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get('tab') || 'explore';
  const initialTabIndex = Tabs.indexOf(tabParam);
  const validTabIndex = initialTabIndex === -1 ? 0 : initialTabIndex;

  const [tabIndex, setTabIndex] = useState(validTabIndex);

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('tab', Tabs[tabIndex]);

    router.push(`/extra?${params.toString()}`, { scroll: false });

    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [tabIndex, router]);

  const handleTabChange = (index: number) => {
    if (index !== tabIndex) setTabIndex(index);
  };

  return (
    <div className="bg-gray-50 relative">
      <div className="pt-22 lg:pt-19 max-w-7xl mx-auto h-screen">
        <div className="flex gap-5 h-[calc(100vh-7rem)] lg:h-[calc(100vh-5rem)]">
          <Sidebar currentTab={tabIndex} onTabChange={handleTabChange} />

          <main className="flex-1 h-full bg-white rounded-3xl p-5 relative">
            <div
              ref={(el) => {
                mainRef.current = el;
                extraScrollRef.current = el;
              }}
              className="h-full overflow-auto"
              style={{
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
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
