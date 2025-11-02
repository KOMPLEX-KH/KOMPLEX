export const EDITOR_OPTIONS = {
  // Font and Typography
  fontSize: 16,
  fontFamily:
    "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'Courier New', monospace",
  fontLigatures: true,
  fontWeight: "400",
  letterSpacing: 0.5,
  lineHeight: 1.6,
  fontVariations: true,

  // Layout and Display
  minimap: {
    enabled: false,
    showSlider: "always" as const,
    renderCharacters: true,
    maxColumn: 120,
    side: "right" as const,
  },
  lineNumbers: "on" as const,
  lineNumbersMinChars: 3,
  lineDecorationsWidth: 8,

  // Selection and Cursor
  cursorBlinking: "smooth" as const,
  cursorStyle: "line" as const,
  cursorWidth: 3,
  cursorSurroundingLines: 3,
  cursorSurroundingLinesStyle: "all" as const,

  // Visual Enhancements
  renderLineHighlight: "gutter" as const,
  renderWhitespace: "selection" as const,
  renderControlCharacters: false,
  renderFinalNewline: "on" as const,
  renderValidationDecorations: "on" as const,

  // Selection and Highlighting
  roundedSelection: true,
  selectOnLineNumbers: true,
  selectionHighlight: true,

  // Scrolling and Navigation
  scrollBeyondLastLine: false,
  scrollBeyondLastColumn: 5,
  smoothScrolling: true,
  mouseWheelScrollSensitivity: 1,
  fastScrollSensitivity: 5,
  scrollbar: {
    vertical: "visible" as const,
    horizontal: "visible" as const,
    verticalScrollbarSize: 14,
    horizontalScrollbarSize: 14,
    useShadows: true,
    verticalHasArrows: false,
    horizontalHasArrows: false,
    handleMouseWheel: true,
    arrowSize: 11,
  },

  // Bracket and Matching
  matchBrackets: "always" as const,
  autoClosingBrackets: "always" as const,
  autoClosingQuotes: "always" as const,
  autoClosingOvertype: "always" as const,
  autoSurround: "languageDefined" as const,
  bracketPairColorization: {
    enabled: true,
    independentColorPoolPerBracketType: true,
  },

  // Word and Language
  wordWrap: "on" as const,
  wordWrapColumn: 100,
  wrappingIndent: "indent" as const,
  wordBasedSuggestions: "currentDocument" as const,

  // Suggestions and IntelliSense
  suggestOnTriggerCharacters: true,
  acceptSuggestionOnCommitCharacter: true,
  acceptSuggestionOnEnter: "on" as const,
  quickSuggestions: {
    other: true,
    comments: false,
    strings: true,
  },
  quickSuggestionsDelay: 100,
  parameterHints: {
    enabled: true,
    cycle: true,
  },

  // Code Actions and Formatting
  codeLens: true,
  formatOnPaste: true,
  formatOnType: true,

  // Accessibility
  accessibilitySupport: "auto" as const,
  screenReaderAnnounceInlineSuggestion: true,

  // Advanced Features
  folding: true,
  foldingStrategy: "indentation" as const,
  foldingHighlight: true,
  foldingImportsByDefault: true,
  showFoldingControls: "always" as const,

  // Context Menu and Actions
  contextmenu: true,
  links: true,
  detectIndentation: true,
  insertSpaces: true,
  tabSize: 2,

  // Performance
  automaticLayout: true,
  disableLayerHinting: false,

  // Experimental Features
  experimentalWhitespaceRendering: "font" as const,
  stickyScroll: {
    enabled: true,
    defaultModel: "indentationModel" as const,
    maxLineCount: 5,
  },
};
