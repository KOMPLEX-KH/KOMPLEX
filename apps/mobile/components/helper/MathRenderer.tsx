/* eslint-disable */
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

// Use react-native-math-view for native, react-katex for web
const MathView = Platform.OS !== 'web' ? require('react-native-math-view').default : null;
const { InlineMath: WebInlineMath, BlockMath: WebBlockMath } =
    Platform.OS === 'web' ? require('react-katex') : { InlineMath: null, BlockMath: null };

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

    // Arrow and common replacements (better support for chemistry-like arrows)
    // Arrow replacements: keep valid LaTeX commands, only normalize plain ascii arrows
    const arrowReplacements: Array<[RegExp, string]> = [
        [/<=?>/g, '\\leftrightarrow'], // <=> variants
        [/->/g, '\\to'],
        [/=>/g, '\\to'],
    ];
    arrowReplacements.forEach(([pattern, replacement]) => {
        normalized = normalized.replace(pattern, replacement);
    });

    // Spacing replacements (common in math text)
    normalized = normalized.replace(/\\qquad/g, '\\;\\;');
    normalized = normalized.replace(/\\quad/g, '\\;');

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
    // Process Greek letters first (they're common and need special handling)
    const greekLetters = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta',
        'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'pi', 'rho', 'sigma',
        'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega',
        'Gamma', 'Delta', 'Theta', 'Lambda', 'Xi', 'Pi', 'Sigma', 'Upsilon',
        'Phi', 'Psi', 'Omega', 'varepsilon', 'vartheta', 'varpi', 'varrho',
        'varsigma', 'varphi'];

    // First pass: Handle Greek letters with careful pattern matching
    // Process in reverse order (longest first) to avoid partial matches
    const sortedGreek = greekLetters.sort((a, b) => b.length - a.length);
    for (const greek of sortedGreek) {
        // Match Greek letters that aren't already escaped
        // Pattern: (start of string OR non-backslash char) + word boundary + greek + word boundary
        const greekPattern = new RegExp(`(^|[^\\\\])\\b${greek}\\b(?!\\w)`, 'g');
        normalized = normalized.replace(greekPattern, (match, prefix) => {
            if (match.includes(`\\${greek}`)) {
                return match; // Already escaped
            }
            if (!prefix || prefix === '') {
                return `\\${greek}`;
            }
            return `${prefix}\\${greek}`;
        });
    }

    // Second pass: Handle other commands
    for (const cmd of latexCommands) {
        if (greekLetters.includes(cmd)) continue;

        const patterns = [
            new RegExp(`(^|[^\\\\])\\b${cmd}(?=[({])`, 'g'),
            new RegExp(`(^|[^\\\\])\\b${cmd}\\s+(?=[({])`, 'g'),
            new RegExp(`(^|[^\\\\])\\b${cmd}(?=\\s*[=+\\-*/^_|&<>]|\\s*$)`, 'g'),
        ];

        patterns.forEach(pattern => {
            normalized = normalized.replace(pattern, (match, prefix) => {
                if (match.startsWith('\\')) {
                    return match; // Already escaped
                }
                return `${prefix}\\${cmd}`;
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
    for (const cmd of singleArgCommands) {
        let changed = true;
        let iterations = 0;
        while (changed && iterations < 10) {
            changed = false;
            const before = normalized;
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
    const normalizedMath = normalizeMathString(math);

    // Web rendering via react-katex
    if (Platform.OS === 'web') {
        if (inline && WebInlineMath) {
            return <WebInlineMath math={normalizedMath} />;
        }
        if (WebBlockMath) {
            return (
                <View style={styles.blockContainer}>
                    <WebBlockMath math={normalizedMath} />
                </View>
            );
        }
        return null;
    }

    // Native rendering via react-native-math-view
    if (!MathView) return null;

    if (inline) {
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
        backgroundColor: 'transparent',
        alignSelf: 'baseline',
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: 'auto',
        maxWidth: undefined,
        maxHeight: undefined,
        width: undefined,
        height: undefined,
        minWidth: undefined,
        minHeight: 6, // prevent 0-height on first render
        marginHorizontal: 2,
        marginVertical: 2,
    },
    inlineContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        marginHorizontal: 2,
        marginVertical: 1,
        gap: 2,
    },
    blockContainer: {
        marginVertical: 4,
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'center',
    },
});