import { InlineMath as InlineMathComponent } from "react-katex";

export const InlineMath = ({ math }: { math: string }) => {

    return (
        <span className="inline-flex items-baseline">
            <InlineMathComponent math={math} />
        </span>
    )
};