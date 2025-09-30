import BulletList from '@components/helper/BulletList';
import { AlertTriangle } from 'lucide-react';

export interface WarningBoxProps {
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    content: string | string[] | React.ReactNode;
}

export default function WarningBox({
    content,
    icon: Icon = AlertTriangle
}: WarningBoxProps) {
    return (
        <div className="bg-red-50/80 border rounded-3xl border-red-600 p-6 my-6 shadow-lg shadow-red-500/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
                <Icon size={20} className="text-red-600" />
                <h4 className="text-red-600 font-semibold text-lg">
                    ប្រុងប្រយត្ន័
                </h4>
            </div>
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
