# Topic Content Editor Guide

## Overview

This guide explains how the Topic Content Editor works - specifically how user-typed text in the Monaco editor gets transformed into rendered React components using Option 1 (Code Editor with Live Evaluation).

## The Core Question: Is Editor Content Text or Code?

**Answer: It's ALWAYS text until we execute it!**

Even though you see this in the editor:

```typescript
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "តើចំនួនកុំផ្លិចជាអ្វី?",
    content: (
      <div>
        ចំនួនកុំផ្លិចមានរាង <InlineMath math="z = a + bi" />
      </div>
    ),
  },
];
```

**This is just a STRING of characters.** The Monaco editor is essentially a fancy textarea - it only knows about text, not TypeScript objects.

## The Translation Process

### Step 1: User Types Code

```
User Types: "const content: TopicContent_V3[] = [...]"
↓
Monaco Editor: Stores as STRING
```

**What Monaco sees:** A sequence of characters: `"c", "o", "n", "s", "t", " ", "c", "o", "n", "t", "e", "n", "t", ...`

### Step 2: Extract String from Editor

```typescript
const editorText = monacoEditor.getValue();
// Returns: "const content: TopicContent_V3[] = [\n  {\n    type: \"definition\",..."
```

**Still just a string!** No magic has happened yet.

### Step 3: Execute String as JavaScript Code

This is where the magic happens:

```typescript
const evaluateCode = (codeString: string) => {
  // Create a function that will execute the user's string as code
  const userFunction = new Function(`
    // Provide dependencies the user's code needs
    const React = arguments[0];
    const InlineMath = arguments[1];
    const Calculator = arguments[2];
    
    // Insert the user's string and execute it
    ${codeString}
    
    // Return the 'content' variable they defined
    return content;
  `);

  // Execute with required dependencies
  const result = userFunction(React, InlineMath, Calculator);
  return result; // NOW it's a JavaScript object!
};
```

**What happens here:**

1. `new Function()` creates a function from the string
2. The string gets executed as JavaScript code
3. The `content` variable becomes a real JavaScript object
4. We return that object

### Step 4: Use the JavaScript Object

```typescript
// Now we have a real TopicContent_V3[] object
const topicContent = [
  {
    type: "definition",
    title: "តើចំនួនកុំផ្លិចជាអ្វី?",
    content: React.createElement("div", null, [
      "ចំនួនកុំផ្លិចមានរាង ",
      React.createElement(InlineMath, { math: "z = a + bi" }),
    ]),
  },
];
```

## Two Use Cases

### Use Case 1: Live Preview (Render Immediately)

```
Editor String → Execute → JavaScript Object → Pass to Renderer → React Components
     ↓              ↓            ↓               ↓                ↓
  "const..."    new Function()  [object]    ContentRendererV3   <div>...</div>
```

**Flow:**

1. User types → String in editor
2. String gets executed → Real JavaScript object
3. Object gets passed to `<ContentRendererV3 content={result} />`
4. React renders the components

### Use Case 2: Save to Database (Serialize First)

```
Editor String → Execute → JavaScript Object → Serialize → JSON String → Database
     ↓              ↓            ↓              ↓            ↓           ↓
  "const..."    new Function()  [object]   serializeTopicContentV3()  "{\"type\":..."  DB
```

**Flow:**

1. User types → String in editor
2. String gets executed → Real JavaScript object
3. Object gets serialized with `serializeTopicContentV3(object)`
4. JSON string gets saved to database

## Visual Flow Diagram

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Types    │    │   String Exec    │    │  JavaScript     │
│   in Editor     │───▶│   as Code        │───▶│  Object         │
│                 │    │                  │    │                 │
│ "const content  │    │ new Function()   │    │ [{ type: "def", │
│ = [...]"        │    │ executes string  │    │  title: "...",  │
│                 │    │                  │    │  content: <div> │
└─────────────────┘    └──────────────────┘    └─────────────────┘
        │                        │                        │
        ▼                        ▼                        ▼
   Still just text!         Magic happens!           Real object!
```

## Key Insight: The Transformation

```typescript
// BEFORE execution (just a string):
"const content = [{ type: 'definition', content: <div>Hello</div> }]"[
  // AFTER execution (real JavaScript object):
  {
    type: "definition",
    content: React.createElement("div", null, "Hello"),
  }
];
```

## What Dependencies Are Needed?

When executing the user's code, we need to provide:

```typescript
const dependencies = {
  React: React, // For JSX like <div>
  InlineMath: InlineMath, // For <InlineMath math="..." />
  Calculator: Calculator, // For <Calculator />
  // Add other components as needed
};
```

## Error Handling

### Syntax Errors

```typescript
// User types invalid syntax:
"const content = [{ type: 'definition', content: <div> }]"; // Missing closing tag

// new Function() throws: "SyntaxError: Unexpected token"
```

### Runtime Errors

```typescript
// User types valid syntax but wrong logic:
"const content = [{ content: <InlineMath math={undefinedVar} /> }]";

// Execution throws: "ReferenceError: undefinedVar is not defined"
```

## Security: Why Not Just Use eval()?

```typescript
// ❌ DANGEROUS:
eval(userCode); // Can access window, document, fetch, localStorage, etc.

// ✅ SAFE:
new Function(`
  const React = arguments[0];
  const InlineMath = arguments[1];
  ${userCode}
`)(React, InlineMath); // Only passes controlled dependencies
```

## Summary

The editor works by treating user input as executable code:

1. **Input:** String of TypeScript/JavaScript code (just text!)
2. **Process:** Execute the string in a controlled environment using `new Function()`
3. **Output:** Real JavaScript object with React elements
4. **Usage:**
   - For preview: Pass object directly to renderer
   - For saving: Serialize object to JSON first

**The key insight:** Monaco editor content is always just text until we execute it as JavaScript code. The execution step transforms the string into a real object that can be rendered or serialized.
