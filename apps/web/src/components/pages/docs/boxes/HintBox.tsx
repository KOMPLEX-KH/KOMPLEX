import BulletList from '@components/helper/BulletList';
import { Lightbulb } from 'lucide-react';

export interface HintBoxProps {
    content: string | string[] | React.ReactNode;
}

export default function HintBox({ content }: HintBoxProps) {
    return (
        <div className="bg-indigo-50/80 border border-indigo-600 p-6 my-6 rounded-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
                <Lightbulb size={20} className="text-indigo-600" />
                <h4 className="text-indigo-600 font-semibold text-lg">
                    សំគាល់
                </h4>
            </div>

            {typeof content === 'string' ? (
                <p
                    className="text-gray-700 leading-relaxed text-base"
                    dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }}
                />
            ) : Array.isArray(content) ? (
                <BulletList content={content} />
            ) : (
                <div className="text-gray-700 leading-relaxed text-base">
                    {content}
                </div>
            )}
        </div>
    );
}
