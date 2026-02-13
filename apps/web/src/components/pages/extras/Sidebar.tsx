'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SidebarProps {
  currentPath: string;
}

export const ExtraTabs = [
  { label: 'បណ្ណាល័យ', slug: 'library', href: '/extra/library' },
  { label: 'រូបមន្ត', slug: 'formula', href: '/extra/formula' },
  { label: 'គណនាពិន្ទុ', slug: 'calculate', href: '/extra/calculate' },
];

export default function Sidebar({ currentPath }: SidebarProps) {

  return (
    <>
      {/* Mobile top bar */}
      <div className={`lg:hidden fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10 px-4 py-2 transition-transform duration-300 `}
      >
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {ExtraTabs.map((tab) => (
            <Link key={tab.slug}
              href={tab.href}
              className={`px-3.5 py-1.5 rounded-full border border-indigo-500/10 sm:text-sm text-[13px] transition ${
                currentPath.startsWith(tab.href)
                  ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                  : 'text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/60'
              }`}
            >
              {tab.label}
            </Link>
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
          {ExtraTabs.map((tab) => (
            <Link
              key={tab.slug}
              href={tab.href}
              className={`text-left px-3 py-2 rounded-3xl transition-colors ${
                currentPath.startsWith(tab.href)
                  ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                  : 'text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/60'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
