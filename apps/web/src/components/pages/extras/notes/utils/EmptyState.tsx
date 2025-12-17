'use client';

import { BookOpen, Plus, Sparkles } from "lucide-react";

export default function EmptyState({ onAddNote }) {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-blue-100 blur-2xl opacity-40 rounded-full"></div>
          <div className="relative bg-blue-50 p-8 rounded-full">
            <BookOpen className="w-20 h-20 text-blue-600" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          មិនទាន់មានកំណត់ត្រា
        </h3>

        <p className="text-gray-500 mb-8 leading-relaxed">
          ចាប់ផ្តើមបង្កើតកំណត់ត្រាដំបូង<br />
          ដើម្បីរក្សាទុកគំនិត និងព័ត៌មានសំខាន់ៗ
        </p>

      </div>
    </div>
  );
}
