'use client';

import { useState, useEffect, useRef } from 'react';

interface SidebarProps {
  currentTab: number;
  onTabChange: (index: number) => void;
}

const tabs = [
  // { label: 'ស្វែងយល់', slug: 'explore' },
  { label: 'បណ្ណាល័យ', slug: 'library' },
  { label: 'រូបមន្ត', slug: 'formula' },
  { label: 'គណនាពិន្ទុ', slug: 'calculate' },
  // { label: 'កំណត់ត្រា', slug: 'notes' },
  // { label: 'ថ្ងៃប្រលងបាក់ឌុប', slug: 'calendar' },
];

export default function Sidebar({ currentTab, onTabChange }: SidebarProps) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollYRef = useRef(0);
  const scrollUpThresholdRef = useRef(0);

  // Detect scroll direction for hiding mobile top bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingDown(true);
        scrollUpThresholdRef.current = 0;
      } else if (currentScrollY < lastScrollY) {
        scrollUpThresholdRef.current += lastScrollY - currentScrollY;
        if (scrollUpThresholdRef.current >= 100 || currentScrollY <= 100) {
          setIsScrollingDown(false);
          scrollUpThresholdRef.current = 0;
        }
      } else if (currentScrollY <= 50) {
        setIsScrollingDown(false);
        scrollUpThresholdRef.current = 0;
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      {/* Mobile top bar */}
      <div
        className={`lg:hidden fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10 px-4 py-2 transition-transform duration-300 ${isScrollingDown ? '-translate-y-[300%]' : 'translate-y-0'
          }`}
      >
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide ">
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => onTabChange(i)}
              className={`px-3.5 py-1.5 rounded-full border border-indigo-500/10 sm:text-sm text-[13px] transition ${currentTab === i
                  ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                  : 'text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/60'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-65 bg-white rounded-3xl shadow p-6 shadow-indigo-500/10 border border-indigo-500/10 h-fit sticky top-20">
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold mb-2 text-indigo-600">បន្ថែម</h1>
          <p className="text-gray-500 text-sm">មុខងារផ្សេង ដែលជួយដល់ការសិក្សា</p>
        </div>

        <nav className="flex flex-col space-y-2">
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => onTabChange(i)}
              className={`text-left px-3 py-2 rounded-3xl cursor-pointer  ${currentTab === i
                  ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                  : 'text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/60'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
