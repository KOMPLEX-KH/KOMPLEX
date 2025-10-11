export const KOMPLEX_DARK_THEME = {
    base: "vs-dark" as const,
    inherit: true,
    rules: [
        // Keywords - Purple with glow
        { token: "keyword", foreground: "C084FC", fontStyle: "bold" }, // purple-400
        { token: "keyword.control", foreground: "F59E0B", fontStyle: "bold" }, // amber-500
        { token: "keyword.operator", foreground: "F472B6", fontStyle: "bold" }, // pink-400

        // Types - Cyan
        { token: "type", foreground: "22D3EE", fontStyle: "bold" }, // cyan-400
        { token: "type.identifier", foreground: "06B6D4", fontStyle: "bold" }, // cyan-500

        // Functions - Orange
        { token: "function", foreground: "FB923C", fontStyle: "bold" }, // orange-400
        { token: "function.call", foreground: "F97316", fontStyle: "bold" }, // orange-500

        // Variables - Light blue
        { token: "variable", foreground: "93C5FD", fontStyle: "normal" }, // blue-300
        { token: "variable.predefined", foreground: "60A5FA", fontStyle: "bold" }, // blue-400

        // Strings - Green (but not for content inside JSX)
        { token: "string", foreground: "6EE7B7", fontStyle: "normal" }, // emerald-300
        { token: "string.quoted", foreground: "34D399", fontStyle: "normal" }, // emerald-400
        { token: "string.template", foreground: "10B981", fontStyle: "normal" }, // emerald-500

        // Numbers - Yellow
        { token: "number", foreground: "FDE047", fontStyle: "bold" }, // yellow-300
        { token: "number.hex", foreground: "FACC15", fontStyle: "bold" }, // yellow-400

        // Comments - Muted purple
        { token: "comment", foreground: "A78BFA", fontStyle: "italic" }, // violet-400
        { token: "comment.doc", foreground: "8B5CF6", fontStyle: "italic" }, // violet-500

        // Operators - Pink
        { token: "operator", foreground: "F472B6", fontStyle: "bold" }, // pink-400
        { token: "operator.keyword", foreground: "EC4899", fontStyle: "bold" }, // pink-500

        // Brackets - Rainbow
        { token: "delimiter", foreground: "F59E0B", fontStyle: "bold" }, // amber-500
        { token: "delimiter.bracket", foreground: "EF4444", fontStyle: "bold" }, // red-500
        { token: "delimiter.parenthesis", foreground: "8B5CF6", fontStyle: "bold" }, // violet-500
        { token: "delimiter.square", foreground: "06B6D4", fontStyle: "bold" }, // cyan-500

        // JSX - Special colors
        { token: "tag", foreground: "F97316", fontStyle: "bold" }, // orange-500
        { token: "tag.id.pug", foreground: "22D3EE", fontStyle: "bold" }, // cyan-400
        { token: "tag.class.pug", foreground: "C084FC", fontStyle: "bold" }, // purple-400

        // JSX Content - Normal text color for content inside JSX
        { token: "tag.id", foreground: "F1F5F9", fontStyle: "normal" }, // normal text color
        { token: "tag.class", foreground: "F1F5F9", fontStyle: "normal" }, // normal text color
        { token: "attribute.name", foreground: "93C5FD", fontStyle: "normal" }, // blue for attributes
        { token: "attribute.value", foreground: "6EE7B7", fontStyle: "normal" }, // green for attribute values

        // Regex - Special highlighting
        { token: "regexp", foreground: "FBBF24", fontStyle: "bold" }, // amber-300

        // Text content - Ensure normal color for all text
        { token: "text", foreground: "F1F5F9", fontStyle: "normal" }, // normal text color
        { token: "identifier", foreground: "F1F5F9", fontStyle: "normal" }, // normal text color
    ],
    colors: {
        // Main editor colors
        "editor.background": "#0F172A", // slate-900 - Deep dark blue
        "editor.foreground": "#F1F5F9", // slate-100 - Light gray

        // Line numbers
        "editorLineNumber.foreground": "#64748B", // slate-500
        "editorLineNumber.activeForeground": "#C084FC", // purple-400
        "editorLineNumber.dimmedForeground": "#475569", // slate-600

        // Cursor and selection
        "editorCursor.foreground": "#F59E0B", // amber-500 - Bright orange cursor
        "editorCursor.background": "#FEF3C7", // amber-100 - Cursor background
        "editor.selectionBackground": "#7C3AED40", // violet-600 with transparency
        "editor.inactiveSelectionBackground": "#7C3AED20", // violet-600 with less transparency
        "editor.selectionHighlightBackground": "#F59E0B20", // amber-500 with transparency

        // Indentation guides
        "editorIndentGuide.background": "#334155", // slate-700
        "editorIndentGuide.activeBackground": "#C084FC", // purple-400

        // Line highlighting
        "editorLineHighlight.background": "#1E293B", // slate-800
        "editorLineHighlight.border": "#334155", // slate-700

        // Widget colors
        "editorWidget.background": "#1E293B", // slate-800
        "editorWidget.border": "#475569", // slate-600
        "editorWidget.foreground": "#F1F5F9", // slate-100

        // Find and replace
        "editor.findMatchBackground": "#FDE04780", // yellow-300 with transparency
        "editor.findMatchHighlightBackground": "#FDE04740", // yellow-300 with less transparency
        "editor.findRangeHighlightBackground": "#7C3AED20", // violet-600 with transparency

        // Bracket matching
        "editorBracketMatch.background": "#7C3AED40", // violet-600 with transparency
        "editorBracketMatch.border": "#C084FC", // purple-400

        // Error and warning colors
        "editorError.foreground": "#EF4444", // red-500
        "editorError.border": "#F87171", // red-400
        "editorWarning.foreground": "#F59E0B", // amber-500
        "editorWarning.border": "#FBBF24", // amber-300
        "editorInfo.foreground": "#06B6D4", // cyan-500
        "editorInfo.border": "#22D3EE", // cyan-400

        // Gutter colors
        "editorGutter.background": "#0F172A", // slate-900
        "editorGutter.modifiedBackground": "#F59E0B", // amber-500
        "editorGutter.addedBackground": "#10B981", // emerald-500
        "editorGutter.deletedBackground": "#EF4444", // red-500

        // Scrollbar
        "scrollbar.shadow": "#00000040",
        "scrollbarSlider.background": "#47556980", // slate-600 with transparency
        "scrollbarSlider.hoverBackground": "#64748B80", // slate-500 with transparency
        "scrollbarSlider.activeBackground": "#94A3B880", // slate-400 with transparency

        // Minimap
        "minimap.background": "#1E293B", // slate-800
        "minimap.selectionHighlight": "#7C3AED40", // violet-600 with transparency
        "minimap.errorHighlight": "#EF444440", // red-500 with transparency
        "minimap.warningHighlight": "#F59E0B40", // amber-500 with transparency

        // Activity bar
        "activityBar.background": "#1E293B", // slate-800
        "activityBar.foreground": "#F1F5F9", // slate-100
        "activityBar.activeBorder": "#C084FC", // purple-400

        // Sidebar
        "sideBar.background": "#1E293B", // slate-800
        "sideBar.foreground": "#F1F5F9", // slate-100
        "sideBarTitle.foreground": "#F1F5F9", // slate-100

        // Status bar
        "statusBar.background": "#1E293B", // slate-800
        "statusBar.foreground": "#F1F5F9", // slate-100
        "statusBar.debuggingBackground": "#7C3AED", // violet-600
        "statusBar.noFolderBackground": "#1E293B", // slate-800

        // Title bar
        "titleBar.activeBackground": "#1E293B", // slate-800
        "titleBar.activeForeground": "#F1F5F9", // slate-100
        "titleBar.inactiveBackground": "#334155", // slate-700
        "titleBar.inactiveForeground": "#94A3B8", // slate-400
    },
}