'use client'

import { InlineMath } from 'react-katex'
import CodeEditor from '@/components/helper/CodeEditor'
import { useState, useEffect, useMemo, useCallback } from 'react'
import React from 'react'
import { TopicContent_V3 } from '@/types/docs/topic'
import { Calculator } from 'lucide-react'
import ContentRendererV3 from '@/components/pages/docs/utils/ContentRendererV2'
import { transform } from '@babel/standalone';

// Import all box components
import { DefinitionBox } from '@/components/pages/docs/boxes/DefinitionBox'
import { TipBox } from '@/components/pages/docs/boxes/TipBox'
import { ExampleBox } from '@/components/pages/docs/boxes/ExampleBox'
import { ExerciseBox } from '@/components/pages/docs/boxes/ExerciseBox'
import { HintBox } from '@/components/pages/docs/boxes/HintBox'
import { WarningBox } from '@/components/pages/docs/boxes/WarningBox'
import { CustomBox } from '@/components/pages/docs/boxes/CustomBox'
import { GraphBox } from '@/components/pages/docs/boxes/GraphBox'
import { ThreeDBox } from '@/components/pages/docs/boxes/3DBox'
import { SummaryBox } from '@/components/pages/docs/boxes/SummaryBox'
import { ExamQuestionBox } from '@/components/pages/docs/boxes/ExamQuestionBox'
import { ExerciseCreationBox } from '@/components/pages/docs/boxes/ExerciseCreationBox'
import { TopicPracticeBox } from '@/components/pages/docs/boxes/TopicPracticeBox'
import { ThreeDExplanationBox } from '@/components/pages/docs/boxes/explanation-box/3DExplanationBox'
import { GraphExplanationBox } from '@/components/pages/docs/boxes/explanation-box/GraphExplanationBox'
import { ImageExplanationBox } from '@/components/pages/docs/boxes/explanation-box/ImageExplanationBox'
import { VideoExplanationBox } from '@/components/pages/docs/boxes/explanation-box/VideoExplanationBox'

// Import commonly used Lucide icons
import * as Icons from 'lucide-react'
import { FUNCTION_BODY } from '@/configs/monaco-editor/functionBody'
import { START_CODE } from '@/configs/monaco-editor/startCode'
import { deserializeTopicContentV3, serializeTopicContentV3 } from '@/components/pages/docs/utils/ContentSerializerV2'


export default function SerializationTest() {
    const [code, setCode] = useState<string>(START_CODE);

    const [previewContent, setPreviewContent] = useState<TopicContent_V3[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isEvaluating, setIsEvaluating] = useState(false);
    const evaluateCode = useCallback((codeString: string): TopicContent_V3[] | null => {
        if (!codeString.trim()) return [];

        try {
            setIsEvaluating(true);
            setError(null);

            console.log('Code string:', codeString);
            const transpiled = transform(codeString, {
                presets: ['react', 'typescript'],
                filename: 'user-code.tsx'
            }).code;

            console.log('Transpiled code:', transpiled);

            const functionBody = `
                ${FUNCTION_BODY}
                ${transpiled}
                return content;
            `;

            const userFunction = new Function(functionBody);
            const result = userFunction(
                React,
                InlineMath,
                Calculator,
                DefinitionBox,
                TipBox,
                ExampleBox,
                ExerciseBox,
                HintBox,
                WarningBox,
                CustomBox,
                GraphBox,
                ThreeDBox,
                SummaryBox,
                ExamQuestionBox,
                ExerciseCreationBox,
                TopicPracticeBox,
                ThreeDExplanationBox,
                GraphExplanationBox,
                ImageExplanationBox,
                VideoExplanationBox,
                Icons
            );

            const serializedResult = serializeTopicContentV3(result);
            const deserializedResult = deserializeTopicContentV3(serializedResult);

            console.log('Result:', result);
            console.log('Deserialized result:', deserializedResult);
            return deserializedResult || [];
        } catch (error) {
            console.error('Evaluation error:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            setError(errorMessage);

            // Return a soft error display instead of crashing
            return [{
                type: "definition" as const,
                title: "⚠️ កំហុសកូដ",
                content: (
                    <div className="bg-red-50 border border-red-200 rounded-3xl p-4">
                        <div className="flex items-start gap-2">
                            <div className="text-red-500 text-lg">⚠️</div>
                            <div>
                                <h4 className="text-red-800 font-medium mb-1">កំហុស</h4>
                                <p className="text-red-700 text-sm mb-2">
                                    {errorMessage.includes('Element type is invalid')
                                        ? 'អ៊ីកុងមិនត្រឹមត្រូវ - សូមពិនិត្យឈ្មោះអ៊ីកុងរបស់អ្នក'
                                        : errorMessage.includes('Unexpected token')
                                            ? 'កំហុស JSX - សូមពិនិត្យថាតួអក្សរទាំងអស់ត្រូវបានបិទច្រក'
                                            : errorMessage.includes('Missing')
                                                ? 'កំហុសអថេរ - សូមពិនិត្យការប្រកាសអថេរនិងវដ្តនៃ object'
                                                : errorMessage}
                                </p>
                                <details className="text-xs">
                                    <summary className="text-red-600 cursor-pointer hover:text-red-800">
                                        បង្ហាញព័ត៌មានលម្អិតបច្ចេកទេស
                                    </summary>
                                    <pre className="mt-2 p-2 bg-red-100 rounded text-red-800 overflow-auto max-h-64 w-full">
                                        {errorMessage}
                                    </pre>
                                </details>
                            </div>
                        </div>
                    </div>
                )
            }];
        } finally {
            setIsEvaluating(false);
        }
    }, []);

    // Debounced evaluation
    const debouncedEvaluate = useMemo(() => {
        let timeoutId: NodeJS.Timeout;
        return (codeString: string) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const result = evaluateCode(codeString);
                if (result) {
                    setPreviewContent(result);
                }
            }, 500); // 500ms debounce
        };
    }, [evaluateCode]);

    // Trigger evaluation when code changes
    useEffect(() => {
        debouncedEvaluate(code);
    }, [code, debouncedEvaluate]);
    return (
        <div className='pt-20 h-full grid grid-cols-2 gap-10 p-5'>
            <div className='h-[calc(100vh-40px)] pb-20'>
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">Editor</h3>
                    {isEvaluating && (
                        <div className="flex items-center gap-1 text-blue-600">
                            <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs">Evaluating...</span>
                        </div>
                    )}
                    {error && !isEvaluating && (
                        <div className="flex items-center gap-1 text-red-600">
                            <span className="text-xs">⚠️ Error</span>
                        </div>
                    )}
                </div>
                <CodeEditor value={code} onChange={setCode} />
            </div>
            <div className='h-[calc(100vh-40px)] pb-20 overflow-y-auto'>
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">Live Preview</h3>
                    {isEvaluating && (
                        <div className="flex items-center gap-1 text-gray-500">
                            <div className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs">Loading...</span>
                        </div>
                    )}
                </div>
                <ContentRendererV3 content={previewContent} />
            </div>
        </div>
    )
}
