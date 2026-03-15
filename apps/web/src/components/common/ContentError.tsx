import { Book, AlertCircle, RefreshCw } from 'lucide-react';

interface ContentErrorProps {
    type: 'error' | 'no-results';
    message?: string;
}

export default function ContentError({ type, message }: ContentErrorProps) {

    const handleRetry = async () => {
        window.location.reload();
    };

    const isError = type === 'error';

    return (
        <div className="text-center py-12">
            {isError ? (
                <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            ) : (
                <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            )}
            <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-400 mb-2">
                {message ||
                    (isError
                        ? 'មានបញ្ហាក្នុងការទាញយកប្លុក'
                        : 'រកមិនឃើញប្លុក')}
            </h3>

            <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
            >
                <RefreshCw className="w-4 h-4" />
                ព្យាយាមម្តងទៀត
            </button>
        </div>
    );
}
