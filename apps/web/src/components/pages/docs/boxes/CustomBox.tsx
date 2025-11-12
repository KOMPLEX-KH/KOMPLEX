import { CustomBoxProps } from "@core-types/docs/boxProps";

export function CustomBox({
  content,
  title,
  titleIcon: Icon,
  backgroundColor = "bg-white",
  borderColor = "border-gray-200",
  titleColor = "text-gray-900",
  iconColor = "text-gray-600",
  contentColor = "text-gray-700",
  showTitle = true,
  showIcon = true,
  borderWidth = "1",
  shadow = "lg",
  padding = "4",
  margin = "6",
  rounded = "2xl",
  backdropBlur = false,
  gradient = false,
  gradientFrom = "from-blue-500",
  gradientTo = "to-purple-500",
  gradientDirection = "to-r",
  hoverEffect = false,
  clickable = false,
  onClick,
}: CustomBoxProps) {
  const baseClasses = [
    "border",
    `border-${borderWidth}`,
    `border-${borderColor.replace("border-", "")}`,
    `bg-${backgroundColor.replace("bg-", "")}`,
    `shadow-${shadow}`,
    `p-${padding}`,
    `my-${margin}`,
    `rounded-${rounded}`,
    backdropBlur && "backdrop-blur-sm",
    gradient &&
      `bg-gradient-${gradientDirection} ${gradientFrom} ${gradientTo}`,
    hoverEffect && "transition-all duration-200 hover:scale-[1.02]",
    clickable && "cursor-pointer",
    clickable && hoverEffect && "hover:shadow-2xl",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={baseClasses} onClick={clickable ? onClick : undefined}>
      {/* Title Section */}
      {showTitle && title && (
        <div className="flex items-center gap-3 mb-3">
          {showIcon && Icon && <Icon size={20} className={iconColor} />}
          <h4 className={`${titleColor} font-semibold text-lg`}>{title}</h4>
        </div>
      )}

      {/* Content Section */}
      <div className={contentColor}>
        {content}
      </div>
    </div>
  );
}
