import { oklch as toOklch, formatHex8, parse as parseColor } from "culori";

const parseOklch = (oklch: string) => {
  const [l, c, h] = oklch.slice(6, -1).split(" ").map(Number);
  return { l, c, h };
};

export const oklchToHex = (color: string, alpha?: number) => {
  // If it's already a hex color, just apply alpha
  if (color.startsWith("#")) {
    if (alpha !== undefined && alpha < 1) {
      const parsed = parseColor(color);
      if (parsed) {
        return formatHex8({ ...parsed, alpha });
      }
    }
    return color;
  }

  // If it's OKLCH format, parse and convert
  if (color.startsWith("oklch")) {
    const { l, c, h } = parseOklch(color);
    return formatHex8(toOklch({ l, c, h, a: alpha ?? 1 }));
  }

  // Fallback: try to parse as any color format
  const parsed = parseColor(color);
  if (parsed) {
    return formatHex8({ ...parsed, alpha: alpha ?? 1 });
  }

  return color;
};
