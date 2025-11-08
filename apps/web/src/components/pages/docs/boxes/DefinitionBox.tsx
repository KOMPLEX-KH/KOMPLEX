'use client'

import { DefinitionBoxProps } from '@core-types/docs/boxProps'

export function DefinitionBox({ title, content }: DefinitionBoxProps) {
    return (
        <div className="my-6 space-y-4">
            <h4 className="text-black font-bold text-2xl">{title}</h4>
            {typeof content === 'string' ? (
                <div className="text-gray-700 leading-relaxed text-base">{content}</div>
            ) : (
                <div className="text-gray-700 leading-relaxed text-base">
                    {content}
                </div>
            )}
        </div>
    )
}