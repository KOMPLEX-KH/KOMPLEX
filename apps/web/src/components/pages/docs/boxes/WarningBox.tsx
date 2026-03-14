import { AlertTriangle } from "lucide-react";
import { WarningBoxProps } from "@core-types/docs/boxProps";

export function WarningBox({
  content,
  icon: Icon = AlertTriangle,
}: WarningBoxProps) {
  return (
    <div className="bg-red-50/80 dark:bg-red-900/40 border rounded-3xl border-red-600 dark:border-red-500 p-4 my-6 shadow-lg shadow-red-500/10 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-3">
        <Icon size={20} className="text-red-600 dark:text-red-400" />
        <h4 className="text-red-600 dark:text-red-400 font-semibold text-lg">ប្រុងប្រយត្ន័</h4>
      </div>
      {typeof content === 'string' ? (
        <div className="text-gray-700 dark:text-zinc-300 leading-relaxed text-base">{content}</div>
      ) : (
        <div className="text-gray-700 dark:text-zinc-300 leading-relaxed text-base">
          {content}
        </div>
      )}
    </div>
  );
}
