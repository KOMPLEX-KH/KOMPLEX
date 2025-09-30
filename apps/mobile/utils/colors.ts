import { oklch as toOklch, formatHex8 } from "culori";

const parseOKLCH = (oklch: string) => {
  const [l, c, h] = oklch.slice(6, -1).split(" ").map(Number);
  return { l, c, h };
};

export const oklchToHex = (oklch: string, alpha?: number) => {
  const { l, c, h } = parseOKLCH(oklch);
  return formatHex8(toOklch({ l, c, h }), alpha);
};
