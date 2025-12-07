'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-red-500/10">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle size={48} className="text-white" />
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            មានបញ្ហាកើតឡើង
          </h1>

          <div className="bg-red-50 rounded-3xl p-4 mb-8">
            <p className="text-lg text-red-900/80">
              សូមអភ័យទោស មានបញ្ហាកើតឡើងក្នុងកម្មវិធី។
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={reset}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-0.5"
            >
              ព្យាយាមម្តងទៀត
            </button>
            <Link
              href="/"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full no-underline font-semibold text-base transition-all duration-300 hover:bg-gray-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Home size={20} />
              ទំព័រដើម
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

