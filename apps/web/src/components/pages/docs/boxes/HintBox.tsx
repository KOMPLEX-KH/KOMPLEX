import BulletList from "@components/helper/BulletList";
import { Lightbulb } from "lucide-react";

export interface HintBoxProps {
    content: string | string[] | React.ReactNode;
    title?: string;
}

export function HintBox({ content, title = "សំគាល់" }: HintBoxProps) {
    return (
        <div className="bg-indigo-50/80 border border-indigo-600 p-4 my-6 rounded-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
                <Lightbulb size={20} className="text-indigo-600" />
                <h4 className="text-indigo-600 font-semibold text-lg">{title}</h4>
            </div>

            {content}
        </div>
    );
}
