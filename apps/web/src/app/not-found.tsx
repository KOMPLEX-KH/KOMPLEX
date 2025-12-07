'use client';

import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-indigo-500/10">
        <div className="text-center">
          <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle size={48} className="text-white" />
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            ទំព័រមិនត្រូវបានរកឃើញ
          </h1>

          <div className="bg-indigo-50 rounded-3xl p-4 mb-8">
            <p className="text-lg text-indigo-900/80">
              សូមអភ័យទោស ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមានទេ។
            </p>
          </div>

          <Link
            href="/"
            className="bg-indigo-600 text-white px-8 py-4 rounded-full no-underline font-semibold text-base transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <Home size={20} />
            ត្រឡប់ទៅទំព័រដើម
          </Link>
        </div>
      </div>
    </div>
  );
}

