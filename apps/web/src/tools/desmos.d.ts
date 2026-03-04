declare module "desmos" {
  interface CalculatorOptions {
    xAxisLabel?: string;
    yAxisLabel?: string;
    xAxisStep?: number;
    yAxisStep?: number;
    showGrid?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    expressions?: boolean;
  }

  export class Calculator extends Component<CalculatorOptions> {}
}
