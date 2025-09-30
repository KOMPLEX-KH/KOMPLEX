import BulletList from '@components/helper/BulletList';
import { Lightbulb } from 'lucide-react';

export interface TipBoxProps {
    title?: string | React.ReactNode;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    content: string | string[] | React.ReactNode;
}

export default function TipBox({
    title,
    content,
    icon: Icon = Lightbulb
}: TipBoxProps) {
    return (
        <div className="bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
            {title && (
                <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-indigo-600" />
                    <h4 className="text-indigo-600 font-semibold text-lg">
                        {title}
                    </h4>
                </div>
            )}
            {typeof content === 'string' ? (
                <div className="text-gray-700 leading-relaxed text-base">
                    {content}
                </div>
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
