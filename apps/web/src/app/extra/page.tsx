'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/components/pages/extras/Sidebar';
import ExploreContent from '@/components/pages/extras/explore/content';
import CalculateContent from '@/components/pages/extras/calculate/calculation_page';
import LibraryContent from '@/components/pages/extras/library/LibraryPage';
import NotesContent from '@/components/pages/extras/notes/content';
import FormularContent from '@/components/pages/extras/formular/FormularPage';
import CalendarContent from '@/components/pages/extras/calendar/content';
import LibraryContentSkeleton from '@/components/pages/extras/library/BookSkeleton';
import CalculateContentSkeleton from '@/components/pages/extras/calculate/calculateSkeleton';
import NotFound from '../not-found';

export const extraScrollRef: { current: HTMLDivElement | null } = { current: null };

const Tabs = [
  'library',
  'formula',
  'calculate',
  // 'notes',
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

      //! let the tab component handle its loading state not with a time out
      const timer = setTimeout(() => {
        setLoading(false);
        setPrevTab(currentTab);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [currentTab, prevTab]);

  // ! when each tab handle its loading state no need for this let each tab give its own skeleton
  if (loading) {
    switch (currentTab) {
      case 'library':
        return <LibraryContentSkeleton />;
      // case 'notes':
      //   return <NotesContentSkeleton />;
      case 'calculate':
        return <CalculateContentSkeleton />;
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
    // case 'notes':
    //   return <NotesContent />;
    case 'formula':
      return <FormularContent />;
    // case 'calendar':
    //   return <CalendarContent />;
    default:
      return <NotFound />;
  }
}

function ExtraPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get('tab') || 'explore';
  const initialTabIndex = Tabs.indexOf(tabParam);
  const validTabIndex = initialTabIndex === -1 ? 0 : initialTabIndex;

  const [tabIndex, setTabIndex] = useState(validTabIndex);

  const mainRef = useRef<HTMLDivElement>(null);

  // ! dont use index use (alr in sidebar component) because the ordering of the tab here and the tab at the sidebar 
  // ! has to match or else bug so identify by the slug or id 

  // const tabs = [
  //   // { label: 'ស្វែងយល់', slug: 'explore' },
  //   { label: 'បណ្ណាល័យ', slug: 'library' },
  //   { label: 'រូបមន្ត', slug: 'formula' },
  //   { label: 'គណនាពិន្ទុ', slug: 'calculate' },
  //   // { label: 'កំណត់ត្រា', slug: 'notes' },
  //   // { label: 'ថ្ងៃប្រលងបាក់ឌុប', slug: 'calendar' },
  // ];

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

export default function ExtraPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-400">Loading...</div>}>
      <ExtraPageContent />
    </Suspense>
  );
}
