'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Sidebar, { ExtraTabs } from '@/components/pages/extras/Sidebar';
import NotFound from '@/app/not-found';

// Import content components
import FormularContent from '@/components/pages/extras/formula/FormularContent';
import BooksContent from '@/components/pages/extras/books/BooksContent';
import CalculateContent from '@/components/pages/extras/calculate/CalculateContent';
// import { useRouter } from 'next/router';

type Params = { tab: string };

export default function ExtraTabPage() {
  const params = useParams() as Params;
  const { tab } = params;
  //   const router = useRouter();

  // Check if the tab exists in our ExtraTabs
  const validTab = ExtraTabs.find(t => t.slug === tab);

  if (!validTab) {
    notFound();
  }

  // Build current path for sidebar highlighting
  const currentPath = `/extra/${tab}`;

  // Render content based on tab parameter
  const renderContent = () => {
    switch (tab) {
      case 'books':
        return <BooksContent />;
      case 'formula':
        return <FormularContent />;
      case 'calculate':
        return <CalculateContent />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 relative">
      <div className="pt-22 lg:pt-19 max-w-7xl mx-auto h-screen">
        <div className="flex gap-5 h-[calc(100vh-7rem)] lg:h-[calc(100vh-5rem)]">
          <Sidebar currentPath={currentPath} />

          <main className="flex-1 h-full bg-white dark:bg-zinc-900 rounded-3xl p-5 relative">
            <div className="h-full overflow-auto scrollbar-hide">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}