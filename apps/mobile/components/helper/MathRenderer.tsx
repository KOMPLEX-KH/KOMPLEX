/* eslint-disable */
import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore - react-native-math-view source imports
import MathView from 'react-native-math-view/src/fallback';

interface MathRendererProps {
    math: string;
    inline?: boolean;
}

/**
 * Parse LaTeX string and extract \text{} commands with Khmer/Unicode text
 * Returns array of segments: { type: 'text' | 'math', content: string }
 */
function parseMathWithText(latex: string): Array<{ type: 'text' | 'math'; content: string }> {
    const segments: Array<{ type: 'text' | 'math'; content: string }> = [];
    let currentIndex = 0;

    // Match \text{...} patterns, handling escaped characters and nested braces
    const textPattern = /\\text\s*\{/g;
    let match;

    while ((match = textPattern.exec(latex)) !== null) {
        const startIndex = match.index;
        const contentStart = match.index + match[0].length;

        // Add math content before this \text{} (preserve whitespace and operators)
        if (startIndex > currentIndex) {
            const mathContent = latex.substring(currentIndex, startIndex);
            // Trim only leading/trailing whitespace, preserve internal spacing
            const trimmed = mathContent.trim();
            if (trimmed) {
                segments.push({ type: 'math', content: trimmed });
            }
        }

        // Find matching closing brace, handling escaped braces
        let braceCount = 1;
        let contentEnd = contentStart;
        let escaped = false;

        while (braceCount > 0 && contentEnd < latex.length) {
            const char = latex[contentEnd];

            if (escaped) {
                escaped = false;
                contentEnd++;
                continue;
            }

            if (char === '\\') {
                escaped = true;
                contentEnd++;
                continue;
            }

            if (char === '{') {
                braceCount++;
            } else if (char === '}') {
                braceCount--;
            }

            if (braceCount > 0) {
                contentEnd++;
            }
        }

        // Extract text content (preserve exact content including spaces)
        // Don't trim - preserve spaces that are part of the text
        const textContent = latex.substring(contentStart, contentEnd);
        if (textContent) {
            segments.push({ type: 'text', content: textContent });
        }

        currentIndex = contentEnd + 1;
    }

    // Add remaining math content
    if (currentIndex < latex.length) {
        const mathContent = latex.substring(currentIndex).trim();
        if (mathContent) {
            segments.push({ type: 'math', content: mathContent });
        }
    }

    // If no \text{} found, return entire string as math
    if (segments.length === 0) {
        return [{ type: 'math', content: latex }];
    }

    // Filter out empty segments
    return segments.filter(seg => {
        if (seg.type === 'text') {
            return seg.content.length > 0; // Text can have spaces
        }
        return seg.content.trim().length > 0; // Math should have content
    });
}

/**
 * Normalize math string to proper LaTeX format
 * Converts MathLive-style syntax (without backslashes) to proper LaTeX
 * Preserves existing LaTeX commands (like \overline, \text, etc.)
 * Only normalizes math parts, not \text{} content
 */
function normalizeMathString(math: string): string {
    if (!math || typeof math !== 'string') return math;

    // If math contains \text{}, we need to normalize math parts separately
    // to preserve \text{} but normalize math expressions
    if (math.includes('\\text{')) {
        // Parse and normalize only math segments
        const segments = parseMathWithText(math);
        const normalizedSegments = segments.map(seg => {
            if (seg.type === 'text') {
                return seg; // Keep text as-is
            } else {
                // Normalize math segment (but it might already have backslashes)
                return { ...seg, content: normalizeMathOnly(seg.content) };
            }
        });

        // Reconstruct the LaTeX string, preserving spacing
        let result = '';
        for (let i = 0; i < normalizedSegments.length; i++) {
            const seg = normalizedSegments[i];
            if (seg.type === 'text') {
                result += `\\text{${seg.content}}`;
            } else {
                result += seg.content;
            }
            // Add space between segments (except at the end)
            if (i < normalizedSegments.length - 1) {
                result += ' ';
            }
        }
        return result;
    }

    // No \text{} - check if it needs normalization
    const hasBackslashes = math.includes('\\');

    // If it has backslashes and looks like proper LaTeX, return as-is
    if (hasBackslashes) {
        // Check if it's already proper LaTeX (has commands like \overline)
        // If it does, return as-is. Otherwise, try to normalize.
        if (/\\(overline|frac|sqrt|text|begin|end|left|right|cdot)/.test(math)) {
            return math; // Already proper LaTeX
        }
        // Has backslashes but might need normalization (e.g., partial LaTeX)
        return normalizeMathOnly(math);
    }

    // No backslashes - MathLive-style input, normalize everything
    return normalizeMathOnly(math);
}

/**
 * Normalize math-only string (no \text{} handling)
 */
function normalizeMathOnly(math: string): string {
    if (!math || typeof math !== 'string') return math;

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

    // Step 1: Handle concatenated commands first (before adding backslashes)
    for (let i = 0; i < latexCommands.length; i++) {
        const cmd1 = latexCommands[i];
        for (let j = 0; j < latexCommands.length; j++) {
            if (i === j) continue;
            const cmd2 = latexCommands[j];
            const concatPattern = new RegExp(`\\b${cmd1}${cmd2}(?=[({]|\\w)`, 'g');
            normalized = normalized.replace(concatPattern, `\\${cmd1}\\${cmd2}`);
        }
    }

    // Step 2: Add backslashes to commands
    for (const cmd of latexCommands) {
        const patterns = [
            new RegExp(`\\b${cmd}(?=[({])`, 'g'),
            new RegExp(`\\b${cmd}\\s+(?=[({])`, 'g'),
            new RegExp(`\\b${cmd}(?=\\s*[=+\\-*/^_|&<>]|\\s*$)`, 'g'),
        ];

        patterns.forEach(pattern => {
            normalized = normalized.replace(pattern, (match) => {
                return match.trim().replace(new RegExp(`^${cmd}`), `\\${cmd}`);
            });
        });
    }

    // Step 3: Handle commands followed directly by variables (like "overlinez1")
    const singleArgCommands = ['overline', 'underline', 'sqrt'];
    for (const cmd of singleArgCommands) {
        normalized = normalized.replace(
            new RegExp(`\\\\${cmd}([a-zA-Z_][a-zA-Z0-9_]*|\\d+)`, 'g'),
            (match, varPart) => {
                if (!latexCommands.includes(varPart)) {
                    return `\\${cmd}{${varPart}}`;
                }
                return match;
            }
        );
    }

    // Step 4: Convert parentheses to braces for single-argument commands
    // Handle nested parentheses by processing from innermost to outermost
    for (const cmd of singleArgCommands) {
        let changed = true;
        let iterations = 0;
        while (changed && iterations < 10) { // Safety limit
            changed = false;
            const before = normalized;
            // Match \command(...) where ... can contain nested parentheses
            // We'll use a more sophisticated approach: find matching parentheses
            normalized = normalized.replace(
                new RegExp(`\\\\${cmd}\\s*\\(([^()]*(?:\\([^()]*\\)[^()]*)*)\\)`, 'g'),
                (match, content) => {
                    changed = true;
                    return `\\${cmd}{${content}}`;
                }
            );
            if (before !== normalized) changed = true;
            iterations++;
        }
    }

    // Step 4b: Handle subscript notation: z1 -> z_1, z2 -> z_2, etc.
    // Match variable names followed by numbers (like z1, z2, etc.)
    normalized = normalized.replace(/([a-zA-Z])(\d+)/g, '$1_{$2}');

    // Step 5: Fix frac patterns: frac(a,b) -> \frac{a}{b}
    normalized = normalized.replace(/\\?frac\s*\(\s*([^,)]+)\s*,\s*([^)]+)\s*\)/g, '\\frac{$1}{$2}');
    normalized = normalized.replace(/(^|[^\\])frac\s*\{\s*([^}]+)\s*\}\s*\{\s*([^}]+)\s*\}/g, '$1\\frac{$2}{$3}');

    // Step 6: Fix left/right patterns
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

export default function MathRenderer({ math, inline = false }: MathRendererProps) {
    // Normalize the math string to ensure proper LaTeX syntax
    const normalizedMath = normalizeMathString(math);

    if (inline) {
        // For inline math: render directly without wrapper to maximize inline behavior
        // Parent flex-row in ContentDeserializer will handle inline flow
        // Use resizeMode="cover" to avoid the contain style's maxWidth: '100%'
        return (
            <View style={styles.inlineContainer}>
                <MathView
                    math={normalizedMath}
                    resizeMode="cover"
                    config={{ inline: true }}
                    style={styles.inlineMath}
                />
            </View>
        );
    }

    // For block math: use MathView with block container
    return (
        <View style={styles.blockContainer}>
            <MathView
                math={normalizedMath}
                resizeMode="contain"
                config={{ inline: false }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inlineMath: {
        // CRITICAL for inline rendering:
        backgroundColor: 'transparent',
        // Align with text baseline in parent flex-row
        alignSelf: 'baseline',
        // Prevent expansion - only take space needed
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: 'auto',
        // Remove ALL width constraints
        // SVG will use intrinsic width/height from MathJax (via size prop)
        maxWidth: undefined,
        maxHeight: undefined,
        width: undefined,
        height: undefined,
        minWidth: undefined,
        minHeight: undefined,
        // Small margin for spacing
        marginHorizontal: 2,
        marginVertical: 0,
    },
    blockContainer: {
        marginVertical: 12,
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'center',
    },
    inlineContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 2,
        marginVertical: 0,
        gap: 2,
    },
});