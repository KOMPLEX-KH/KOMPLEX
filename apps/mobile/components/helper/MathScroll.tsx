import { BlockMath } from "react-katex";


export const MathScroll = ({ math }: { math: string }) => (
  <div
    className="
      -mx-2 px-2
      min-w-0 max-w-full overflow-x-auto
      [&_.katex-display]:text-left [&_.katex-display]:my-1 md:[&_.katex-display]:my-2
      [&_.katex]:text-[1.0rem] sm:[&_.katex]:text-[1.05rem] md:[&_.katex]:text-[1.1rem]
      [&_.katex]:leading-[1.35] [&_.katex]:whitespace-nowrap
    "
  >
    <BlockMath math={math} />
  </div>
);
