import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

interface MathRendererProps {
    math: string;
    inline?: boolean;
}

/**
 * Normalize math string to proper LaTeX format
 * Converts MathLive-style syntax (without backslashes) to proper LaTeX
 * Handles complex patterns like concatenated commands and missing backslashes
 */
function normalizeMathString(math: string): string {
    if (!math || typeof math !== 'string') return math;

    // If math already has backslashes, assume it's mostly correct LaTeX
    // But we'll still fix some common issues
    const hasBackslashes = math.includes('\\');

    let normalized = math;

    // List of LaTeX commands (sorted by length, longest first to avoid partial matches)
    const latexCommands = [
        'overline', 'underline', 'Rightarrow', 'Leftrightarrow', 'rightarrow', 'leftarrow',
        'varepsilon', 'vartheta', 'varpi', 'varrho', 'varsigma', 'varphi',
        'subseteq', 'supseteq', 'notin',
        'sqrt', 'frac', 'left', 'right', 'bigg', 'Bigg',
        'sum', 'prod', 'int', 'lim', 'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
        'log', 'ln', 'exp', 'max', 'min', 'sup', 'inf', 'det', 'dim', 'gcd', 'lcm',
        'cdot', 'times', 'div', 'pm', 'mp', 'leq', 'geq', 'neq', 'approx', 'equiv',
        'big', 'Big', 'infty', 'partial', 'nabla', 'emptyset', 'exists', 'forall',
        'subset', 'supset', 'cup', 'cap', 'vee', 'wedge', 'oplus', 'otimes',
        'mapsto', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta',
        'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'pi', 'rho',
        'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega',
        'Gamma', 'Delta', 'Theta', 'Lambda', 'Xi', 'Pi', 'Sigma', 'Upsilon',
        'Phi', 'Psi', 'Omega', 'to', 'gets'
    ].sort((a, b) => b.length - a.length);

    if (!hasBackslashes) {
        // Step 1: Handle concatenated commands first (before adding backslashes)
        // e.g., "overlineleft" -> needs to become "\overline\left" before processing
        // Process longest commands first to avoid partial matches
        for (let i = 0; i < latexCommands.length; i++) {
            const cmd1 = latexCommands[i];
            for (let j = 0; j < latexCommands.length; j++) {
                if (i === j) continue;
                const cmd2 = latexCommands[j];
                // Match concatenated commands: cmd1cmd2 followed by ( or { or variable
                const concatPattern = new RegExp(`\\b${cmd1}${cmd2}(?=[({]|\\w)`, 'g');
                normalized = normalized.replace(concatPattern, `\\${cmd1}\\${cmd2}`);
            }
        }

        // Step 2: Add backslashes to commands followed by parentheses, braces, or variables
        for (const cmd of latexCommands) {
            // Match command followed by: ( or { or space+( or variable name
            const patterns = [
                // Command directly followed by ( or {
                new RegExp(`\\b${cmd}(?=[({])`, 'g'),
                // Command followed by space and then ( or {
                new RegExp(`\\b${cmd}\\s+(?=[({])`, 'g'),
                // Command at end of string or before operator
                new RegExp(`\\b${cmd}(?=\\s*[=+\\-*/^_|&<>]|\\s*$)`, 'g'),
            ];

            patterns.forEach(pattern => {
                normalized = normalized.replace(pattern, (match) => {
                    // Remove any space after command
                    return match.trim().replace(new RegExp(`^${cmd}`), `\\${cmd}`);
                });
            });
        }

        // Step 3: Handle commands followed directly by variables (like "overlinez1")
        // This is tricky - we need to identify where the command ends and variable starts
        const singleArgCommands = ['overline', 'underline', 'sqrt'];
        for (const cmd of singleArgCommands) {
            // Match \overline followed directly by a variable (starts with letter)
            // \overlinez1 -> \overline{z1}
            normalized = normalized.replace(
                new RegExp(`\\\\${cmd}([a-zA-Z_][a-zA-Z0-9_]*|\\d+)`, 'g'),
                (match, varPart) => {
                    // Only wrap if it looks like a variable, not a command
                    if (!latexCommands.includes(varPart)) {
                        return `\\${cmd}{${varPart}}`;
                    }
                    return match;
                }
            );
        }
    }

    // Step 4: Convert parentheses to braces for single-argument commands
    // Simple regex-based approach: \command(content) -> \command{content}
    const singleArgCommands = ['overline', 'underline', 'sqrt'];
    for (const cmd of singleArgCommands) {
        // Handle \command( with matching ) - simple balanced paren matching
        let changed = true;
        while (changed) {
            changed = false;
            const before = normalized;
            // Match \command( ... ) and replace with \command{ ... }
            // Use a simple approach: find \command( and the next balanced )
            normalized = normalized.replace(
                new RegExp(`\\\\${cmd}\\s*\\(([^()]*)\\)`, 'g'),
                `\\${cmd}{$1}`
            );
            if (before !== normalized) changed = true;
        }
        // Also handle cases where command is followed by content without parens
        // \overlinez1 -> \overline{z1} (already handled in Step 3, but ensure it worked)
    }

    // Step 5: Fix frac patterns: frac(a,b) -> \frac{a}{b}
    normalized = normalized.replace(/\\?frac\s*\(\s*([^,)]+)\s*,\s*([^)]+)\s*\)/g, '\\frac{$1}{$2}');
    // Handle frac without backslash: frac{a}{b} -> \frac{a}{b}
    normalized = normalized.replace(/(^|[^\\])frac\s*\{\s*([^}]+)\s*\}\s*\{\s*([^}]+)\s*\}/g, '$1\\frac{$2}{$3}');

    // Step 6: Fix left/right patterns (avoid negative lookbehind)
    normalized = normalized.replace(/(^|[^\\])left\(/g, '$1\\left(');
    normalized = normalized.replace(/(^|[^\\])right\)/g, '$1\\right)');
    normalized = normalized.replace(/(^|[^\\])left\[/g, '$1\\left[');
    normalized = normalized.replace(/(^|[^\\])right\]/g, '$1\\right]');
    normalized = normalized.replace(/(^|[^\\])left\{/g, '$1\\left\\{');
    normalized = normalized.replace(/(^|[^\\])right\}/g, '$1\\right\\}');

    // Step 7: Fix cdot and other operators
    normalized = normalized.replace(/(^|[^\\])cdot(?![a-zA-Z])/g, '$1\\cdot');

    return normalized;
}

/**
 * MathRenderer using WebView with KaTeX
 * Renders LaTeX math expressions directly using katex.renderToString()
 */
export default function MathRendererWebView({ math, inline = false }: MathRendererProps) {
    // Normalize math string to ensure proper LaTeX syntax
    const normalizedMath = normalizeMathString(math);

    // Use JSON.stringify to safely escape the math string for JavaScript
    // This preserves backslashes and special characters correctly
    const mathJson = JSON.stringify(normalizedMath);

    // Create HTML with KaTeX - use katex.renderToString() directly
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossorigin="anonymous">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html, body {
            margin: 0;
            padding: ${inline ? '0' : '8px'};
            background: transparent;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        #math-container {
            display: ${inline ? 'inline-block' : 'block'};
            text-align: ${inline ? 'left' : 'center'};
            background: transparent;
            width: 100%;
            ${inline ? 'max-width: fit-content;' : ''}
        }
        .katex {
            font-size: ${inline ? '1em' : '1.1em'} !important;
            background: transparent !important;
        }
        .katex-display {
            margin: 0 !important;
            padding: 0 !important;
        }
    </style>
</head>
<body>
    <div id="math-container"></div>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyOOlG8jCL0uq13y57NxAbZ3SaYySfUX3Jx6KmX8KpO0XqrVJQvW2Y5d0vJjQ8" crossorigin="anonymous"></script>
    <script>
        (function() {
            try {
                // Parse the JSON string to get the math expression
                const mathExpr = JSON.parse(${mathJson});
                const container = document.getElementById('math-container');
                
                if (!container) {
                    console.error('Math container not found');
                    return;
                }
                
                // Render the math expression using KaTeX
                const rendered = katex.renderToString(mathExpr, {
                    displayMode: ${inline ? 'false' : 'true'},
                    throwOnError: false,
                    errorColor: '#cc0000',
                    strict: false,
                    trust: false
                });
                
                container.innerHTML = rendered;
                
                // Adjust container height to content and notify React Native
                setTimeout(function() {
                    const height = container.scrollHeight || container.offsetHeight;
                    if (window.ReactNativeWebView) {
                        window.ReactNativeWebView.postMessage(JSON.stringify({
                            type: 'mathRendered',
                            height: height
                        }));
                    }
                }, 100);
            } catch (error) {
                console.error('KaTeX render error:', error);
                console.error('Math expression:', ${mathJson});
                const container = document.getElementById('math-container');
                if (container) {
                    container.innerHTML = '<span style="color: red;">Math Error: ' + error.message + '</span>';
                }
            }
        })();
    </script>
</body>
</html>`;

    const [height, setHeight] = useState(inline ? 24 : 60);

    // Handle messages from WebView to get rendered height
    const handleMessage = (event: any) => {
        try {
            const data = JSON.parse(event.nativeEvent.data);
            if (data.type === 'mathRendered' && data.height) {
                setHeight(Math.max(data.height + 4, inline ? 20 : 50));
            }
        } catch {
            // Ignore parse errors
        }
    };

    const webViewStyle = inline
        ? { ...styles.inlineWebView, height: height }
        : { ...styles.blockWebView, minHeight: height };

    if (inline) {
        return (
            <View style={[styles.inlineContainer, { height: height }]}>
                <WebView
                    source={{ html }}
                    style={webViewStyle}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    androidLayerType="hardware"
                    androidHardwareAccelerationDisabled={false}
                    nestedScrollEnabled={false}
                    originWhitelist={['*']}
                    onMessage={handleMessage}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={false}
                    scalesPageToFit={false}
                />
            </View>
        );
    }

    return (
        <View style={styles.blockContainer}>
            <WebView
                source={{ html }}
                style={webViewStyle}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                androidLayerType="hardware"
                androidHardwareAccelerationDisabled={false}
                nestedScrollEnabled={false}
                originWhitelist={['*']}
                onMessage={handleMessage}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={false}
                scalesPageToFit={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inlineContainer: {
        alignSelf: 'baseline',
        backgroundColor: 'transparent',
        marginHorizontal: 2,
        marginVertical: 0,
    },
    inlineWebView: {
        backgroundColor: 'transparent',
        width: '100%',
    },
    blockContainer: {
        marginVertical: 12,
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'center',
    },
    blockWebView: {
        backgroundColor: 'transparent',
        width: '100%',
    },
});

