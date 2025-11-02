export const EDITOR_STYLE = `
                /* Override Monaco's default fonts and ensure proper font loading */
                .monaco-editor {
                    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'Courier New', monospace !important;
                }
                
                .monaco-editor .view-lines {
                    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'Courier New', monospace !important;
                }
                
                /* Fix Khmer text color - override syntax highlighting for Khmer */
                .monaco-editor .token.string,
                .monaco-editor .token.string.quoted,
                .monaco-editor .token.string.template {
                    color: #6EE7B7 !important; /* Keep green for strings */
                }
                
                /* Ensure Khmer text is properly colored */
                .monaco-editor .token:not(.keyword):not(.type):not(.function):not(.operator):not(.delimiter):not(.comment):not(.number) {
                    color: #F1F5F9 !important; /* Default text color for non-syntax elements */
                }
                
                /* Force monospace font for all text */
                .monaco-editor * {
                    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'Courier New', monospace !important;
                }
                
                /* Override any Noto Sans inheritance */
                .monaco-editor .view-line,
                .monaco-editor .view-lines,
                .monaco-editor .margin,
                .monaco-editor .current-line {
                    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'Courier New', monospace !important;
                }
                
                /* Ensure proper font rendering */
                .monaco-editor {
                    font-feature-settings: "liga" 1, "calt" 1;
                    font-variant-ligatures: normal;
                    text-rendering: optimizeLegibility;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `;
