'use client'

import { useEffect, useRef } from 'react';
import { CalculatorOptions } from 'desmos';
import { Expression } from '@core-types/docs/boxProps';

// Re-export for backwards compatibility
export type { Expression };

export type DesmosGraphProps = {
    expressions?: Expression[] | null;
    width?: string | number;
    height?: string | number;
    options?: Partial<CalculatorOptions>;
};

const CustomDesmosGraph = ({
    expressions,
    width = '100%',
    height = 400,
    options = {},
}: DesmosGraphProps) => {
    const calculatorRef = useRef<HTMLDivElement>(null);
    const calculatorInstance = useRef<Desmos.Calculator | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Desmos && calculatorRef.current) {
            // Destroy previous instance (if any)
            if (calculatorInstance.current) {
                calculatorInstance.current.destroy();
            }

            // Initialize calculator
            calculatorInstance.current = window.Desmos.GraphingCalculator(calculatorRef.current, {
                expressions: true,
                keypad: true,
                settingsMenu: false,
                zoomButtons: true,
                showGrid: true,
                showXAxis: true,
                showYAxis: true,
                xAxisLabel: "x",
                yAxisLabel: "y",
                xAxisStep: 1,
                yAxisStep: 1,
                ...options,
            });

            // Set expressions - validate that expressions exists and is an array
            if (Array.isArray(expressions) && expressions.length > 0) {
                try {
                    expressions.forEach(expr => {
                        if (expr && typeof expr === 'object') {
                            calculatorInstance.current?.setExpression(expr);
                        }
                    });
                } catch (error) {
                    console.error("Error setting graph expressions:", error);
                }
            }
        }

        return () => {
            calculatorInstance.current?.destroy();
        };
    }, [expressions, options]);

    return <div ref={calculatorRef} style={{ width, height }} />;
};

export default CustomDesmosGraph;
