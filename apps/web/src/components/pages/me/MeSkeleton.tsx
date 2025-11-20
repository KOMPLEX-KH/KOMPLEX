export default function MeSkeleton() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex-1  pt-32 lg:pt-20 max-w-6xl mx-auto">
                <div className="p-6">
                    <div className="animate-pulse space-y-6">
                        <div className="h-8 bg-gray-200 rounded-3xl w-1/3"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-24 bg-gray-200 rounded-3xl"></div>
                            ))}
                        </div>
                        <div className="h-64 bg-gray-200 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};