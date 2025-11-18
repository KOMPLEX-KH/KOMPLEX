'use client';

import Sidebar from '@/components/pages/helps/Sidebar'; // Adjust path as needed
import HelpSkeleton from '@/components/pages/helps/HelpSkeleton';
import ContentError from '@/components/common/ContentError';
import { useState, useEffect } from 'react';

const mockContentData = [
  'នេះគឺជាអត្ថបទជំនួយស្វែងយល់។',
  'នេះគឺជាកន្លែងគណនាពិន្ទុ។',
  'បណ្ណាល័យជំនួយនៅទីនេះ។',
  'កំណត់ចំណាំរបស់អ្នក។',
  'ផែនការសិក្សា។',
  'រូបមន្តសម្រាប់ជំនួយ។',
  'ប្រតិទិនសម្រាប់ជំនួយ។',
];

export default function Help() {
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timeout = setTimeout(() => {
      if (currentTab >= 0 && currentTab < mockContentData.length) {
        setContent(mockContentData[currentTab]);
      } else {
        setError('រកមិនឃើញអត្ថបទ');
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentTab]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="pt-36 lg:pt-20 p-5 max-w-7xl mx-auto">
          <div className="flex gap-6">
            <Sidebar currentTab={currentTab} onTabChange={setCurrentTab} />
            <div className="flex-1">
              <HelpSkeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="pt-36 lg:pt-20 p-5 max-w-7xl mx-auto">
          <div className="flex gap-6">
            <Sidebar currentTab={currentTab} onTabChange={setCurrentTab} />
            <div className="flex-1">
              <ContentError
                type={error === 'រកមិនឃើញអត្ថបទ' ? 'no-results' : 'error'}
                message={error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-30 lg:pt-15 p-2 max-w-7xl mx-auto bg-amber-700">
        <div className="flex gap-5 bg-amber-500 min-h-full">
          <Sidebar currentTab={currentTab} onTabChange={setCurrentTab} />
          <main className="flex-1 bg-white rounded-3xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">{`ជំនួយ: ${currentTab + 1}`}</h2>
            <p>{content}</p>
          </main>
        </div>
      </div>
    </div>
  );
}
