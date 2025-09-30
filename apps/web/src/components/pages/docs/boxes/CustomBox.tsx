import BulletList from '@components/helper/BulletList';
import { LucideIcon } from 'lucide-react';

export interface CustomBoxProps {
    // Content
    content: string | string[] | React.ReactNode;

    // Title and Icon
    title?: string;
    titleIcon?: React.ComponentType<{ size?: number; className?: string }>;

    // Colors (with defaults)
    backgroundColor?: string;
    borderColor?: string;
    titleColor?: string;
    iconColor?: string;
    contentColor?: string;

    // Styling
    showTitle?: boolean;
    showIcon?: boolean;
    borderWidth?: '1' | '2' | '4';
    shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    padding?: '2' | '4' | '6' | '8';
    margin?: '2' | '4' | '6' | '8';
    rounded?: 'lg' | 'xl' | '2xl' | '3xl';

    // Additional features
    backdropBlur?: boolean;
    gradient?: boolean;
    gradientFrom?: string;
    gradientTo?: string;
    gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';

    // Interactive
    hoverEffect?: boolean;
    clickable?: boolean;
    onClick?: () => void;
}

export default function CustomBox({
    content,
    title,
    titleIcon: Icon,
    backgroundColor = 'bg-white',
    borderColor = 'border-gray-200',
    titleColor = 'text-gray-900',
    iconColor = 'text-gray-600',
    contentColor = 'text-gray-700',
    showTitle = true,
    showIcon = true,
    borderWidth = '1',
    shadow = 'lg',
    padding = '6',
    margin = '6',
    rounded = '2xl',
    backdropBlur = false,
    gradient = false,
    gradientFrom = 'from-blue-500',
    gradientTo = 'to-purple-500',
    gradientDirection = 'to-r',
    hoverEffect = false,
    clickable = false,
    onClick
}: CustomBoxProps) {
    const baseClasses = [
        'border',
        `border-${borderWidth}`,
        `border-${borderColor.replace('border-', '')}`,
        `bg-${backgroundColor.replace('bg-', '')}`,
        `shadow-${shadow}`,
        `p-${padding}`,
        `my-${margin}`,
        `rounded-${rounded}`,
        backdropBlur && 'backdrop-blur-sm',
        gradient && `bg-gradient-${gradientDirection} ${gradientFrom} ${gradientTo}`,
        hoverEffect && 'transition-all duration-200 hover:scale-[1.02]',
        clickable && 'cursor-pointer',
        clickable && hoverEffect && 'hover:shadow-2xl'
    ].filter(Boolean).join(' ');

    return (
        <div
            className={baseClasses}
            onClick={clickable ? onClick : undefined}
        >
            {/* Title Section */}
            {showTitle && title && (
                <div className="flex items-center gap-3 mb-3">
                    {showIcon && Icon && (
                        <Icon size={20} className={iconColor} />
                    )}
                    <h4 className={`${titleColor} font-semibold text-lg`}>
                        {title}
                    </h4>
                </div>
            )}

            {/* Content Section */}
            {typeof content === 'string' ? (
                <div className={`${contentColor} leading-relaxed text-base`}>
                    {content}
                </div>
            ) : Array.isArray(content) ? (
                <BulletList content={content} />
            ) : (
                <div className={`${contentColor} leading-relaxed text-base`}>
                    {content}
                </div>
            )}
        </div>
    );
}
