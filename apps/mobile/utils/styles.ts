import { TAILWIND_CLASSES } from "@/constants/styles/tailwind";

// Function to apply multiple Tailwind classes
export const applyStyles = (classNames: string[]): any => {
  const styles: any = {};

  classNames.forEach((className) => {
    if (TAILWIND_CLASSES[className as keyof typeof TAILWIND_CLASSES]) {
      Object.assign(
        styles,
        TAILWIND_CLASSES[className as keyof typeof TAILWIND_CLASSES]
      );
    }
  });

  return styles;
};

export const tw = (classNames: string): any => {
  return applyStyles(classNames.split(" ").filter(Boolean));
};

export const getFontWeightName = (weight: number): string => {
  switch (weight) {
    case 100:
      return "Thin";
    case 200:
      return "ExtraLight";
    case 300:
      return "Light";
    case 400:
      return "Regular";
    case 500:
      return "Medium";
    case 600:
      return "SemiBold";
    case 700:
      return "Bold";
    case 800:
      return "ExtraBold";
    case 900:
      return "Black";
    default:
      return "Medium";
  }
};
