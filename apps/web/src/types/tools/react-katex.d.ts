declare module "react-katex" {
  import { Component } from "react";

  interface MathProps {
    math: string;
    children?: React.ReactNode;
  }

  interface BlockMathProps extends MathProps {
    math: string;
  }

  interface InlineMathProps extends MathProps {
    math: string;
  }

  export class BlockMath extends Component<BlockMathProps> {}
  export class InlineMath extends Component<InlineMathProps> {}
}
