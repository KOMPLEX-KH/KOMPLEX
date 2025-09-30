import { TAILWIND_CLASSES } from "@/constants/tailwind";

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
