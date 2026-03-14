'use client'

import { Lightbulb } from 'lucide-react'
import { TipBoxProps } from '@core-types/docs/boxProps'

export function TipBox({
    title,
    content,
    icon: Icon = Lightbulb
}: TipBoxProps) {
    return (
        <div className="bg-indigo-50/80 dark:bg-indigo-900/40 border-l-4 border-indigo-600 dark:border-indigo-500 p-4 my-6 rounded-r-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
        {title && (
                <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-indigo-600 dark:text-white" />
                    <h4 className="text-indigo-600 dark:text-white font-semibold text-lg">
                        {title}
                    </h4>
                </div>
            )}
            {typeof content === 'string' ? (
                <div className="text-gray-700 dark:text-zinc-300 leading-relaxed text-base">{content}</div>
            ) : (
                <div className="text-gray-700 dark:text-zinc-300 leading-relaxed text-base">
                    {content}
                </div>
            )}
        </div>
    )
}