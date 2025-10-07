'use client'

import BulletList from '@components/helper/BulletList';
import JsxParser from "react-jsx-parser";
import reactElementToJSXString from "react-element-to-jsx-string";
import { BlockMath, InlineMath } from 'react-katex';

export interface DefinitionBoxProps {
    title: string | React.ReactNode;
    content: string | string[] | React.ReactNode;
}

export default function DefinitionBox({ title, content }: DefinitionBoxProps) {
    const jsxString =
        typeof content === "string"
            ? content
            : Array.isArray(content)
                ? content.map(el => reactElementToJSXString(el)).join("\n")
                : reactElementToJSXString(content);
    return (
        <div className=" my-6 space-y-4 ">
            <h4 className="text-black font-bold text-2xl">{title}</h4>
            {typeof content === 'string' ? (
                <p className="text-gray-700 leading-relaxed text-base">{content}</p>
            ) : Array.isArray(content) ? (
                <BulletList content={content} />
            ) : (
                <div className="text-gray-700 leading-relaxed text-base">
                    <JsxParser jsx={jsxString} components={{ }} />
                </div>
            )}
        </div>
    )
}