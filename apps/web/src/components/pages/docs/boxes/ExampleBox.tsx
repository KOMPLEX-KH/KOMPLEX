import { Search } from 'lucide-react';
import { ExampleBoxProps } from '@core-types/docs/boxProps';

function AnswerBox({ answer }: { answer: string | React.ReactNode }) {
    return (
        <div className="bg-green-50/60 dark:bg-green-900/40 border-2 border-green-500 dark:border-green-500/50 rounded-3xl p-5 my-4 ">
            <div className="text-green-800 dark:text-white font-semibold">
                ចម្លើយៈ {answer}
            </div>
        </div>
    );
}

export function ExampleBox({ question, content, steps, answer }: ExampleBoxProps) {
    return (
        <div className="bg-amber-50/90 dark:bg-amber-900/40 border-2 border-amber-500 dark:border-amber-500/50 rounded-3xl p-4 my-6 shadow-lg shadow-amber-500/15">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <Search size={20} className="text-amber-600 dark:text-amber-400" />
                <h4 className="text-amber-800 dark:text-amber-400 font-semibold text-lg">
                    ឧទាហរណ៍
                </h4>
            </div>

            {/* Question */}
            <div className="text-gray-800 dark:text-zinc-300 mb-4 font-medium">
                {question}
            </div>

            {/* Content */}
            <div className="text-gray-800 dark:text-zinc-300 mb-4 font-medium">
                {content}
            </div>

            {/* Solution Steps */}
            {/* <div className="bg-white text-white rounded-xl p-5 mb-4 shadow-lg">
                <div className="space-y-4">
                    {steps?.map((step, index) => (
                        <div key={index} className="space-y-2">
                            <div className="font-semibold text-black">
                                ជំហានទី{index + 1}៖ {step.title}
                            </div>
                            <div className="font-mono text-sm p-3 rounded-lg border-2 border-gray-200 text-black">
                                {step.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {steps?.some(step => step.content) && (
                <div className=" text-white dark:text-white rounded-3xl  mb-4 ">
                    <div className="space-y-4">
                        {steps.map((step, index) =>
                            step.content && (
                                <div key={index} className="space-y-2 ">
                                    <div className="font-semibold text-black dark:text-white">
                                        ជំហានទី{index + 1}៖ {step.title}
                                    </div>
                                    <div className="font-mono text-sm p-3 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-gray-200 dark:border-zinc-700 text-black dark:text-white">
                                        {step.content}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}


            {/* Answer */}
            {answer && <AnswerBox answer={answer} />}
        </div>
    );
}
