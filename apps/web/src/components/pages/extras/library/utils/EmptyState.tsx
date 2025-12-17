import { BookOpen } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="p-8 max-w-md w-full text-center">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-blue-100 blur-2xl opacity-40 rounded-full"></div>
          <div className="relative bg-blue-50 p-8 rounded-full">
            <BookOpen className="w-20 h-20 text-indigo-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">គ្មានសៀវភៅ</h3>
        <p className="text-gray-500">សៀវភៅនឹងមានឆាប់ៗនេះ</p>
      </div>
    </div>
  );
}
