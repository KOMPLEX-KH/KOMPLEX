import { InlineMath } from "react-katex";

export const MathLine = ({ math }: { math: string }) => (
  <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.05rem]">
    <InlineMath math={math} />
  </div>
);