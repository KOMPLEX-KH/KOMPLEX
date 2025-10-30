# Refactoring Prompt for SummaryBox and TopicPracticeBox

Use this prompt with any LLM to convert old format to TopicContent_V3 format:

---

**PROMPT:**

Refactor the following file to convert from the old component-based format to the new TopicContent_V3 array format.

## Conversion Rules:

### SummaryBox:

**OLD FORMAT:**

```typescript
const summary: SummarySection[] = [
  {
    key: "...",
    title: "...",
    icon: SomeIcon,
    content: <div>...</div>,
  },
];

return <SummaryBox title="..." sections={summary} />;
```

**NEW FORMAT:**

```typescript
const content: TopicContent_V3[] = [
  {
    type: "summary",
    title: "...",
    sections: [
      {
        key: "...",
        title: "...",
        icon: SomeIcon,
        content: <div>...</div>,
      },
    ],
  },
];
```

### TopicPracticeBox:

**OLD FORMAT:**

```typescript
const practiceExercises: PracticeExercise[] = [
  {
    id: "ex1",
    title: "...",
    description: "...",
    problemType: "...",
    problems: [<BlockMath math="..." />],
    answers: [<div>...</div>],
  },
];

return <TopicPracticeBox exercises={practiceExercises} />;
```

**NEW FORMAT:**

```typescript
const content: TopicContent_V3[] = [
  {
    type: "practice",
    exercises: [
      {
        id: "ex1",
        title: "...",
        description: "...",
        problemType: "...",
        problems: [<BlockMath math="..." />],
        answers: [<div>...</div>],
      },
    ],
  },
];
```

## Requirements:

1. Remove the function component wrapper (if it exists)
2. Remove separate variable declarations for `summary` and `practiceExercises`
3. Combine everything into a single `content` array of type `TopicContent_V3[]`
4. Each box becomes an object with `{ type: "summary" }` or `{ type: "practice" }` plus its props
5. Keep ALL nested data inline (don't extract to variables)
6. Preserve all ReactNode content exactly as-is (divs, InlineMath, BlockMath, etc.)
7. Add the import for `TopicContent_V3` from `@/types/docs/topic` if not present
8. If the file was a component that rendered the boxes, export a `content` constant instead and include example rendering code using ContentRendererV3

## Output Format:

Please provide the complete refactored file with:

- All necessary imports (including `TopicContent_V3` from `@/types/docs/topic` and `ContentRendererV3` from `@/components/pages/docs/utils/ContentRendererV2` if rendering)
- The `content` constant with type `TopicContent_V3[]` containing ALL data inline
- If the original file was a component, replace it with:
  1. Export the `content` constant
  2. Include example usage showing how to render: `import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2"; export default function SomeComponent() { return <ContentRendererV3 content={content} />; }`
- Preserve all comments, formatting, and nested ReactNode structures exactly as they were

## Example Complete Output:

```typescript
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";

export const content: TopicContent_V3[] = [
  {
    type: "summary",
    title: "...",
    sections: [...]
  },
  {
    type: "practice",
    exercises: [...]
  }
];

// Example rendering (if needed):
export default function SomeTopic() {
  return <ContentRendererV3 content={content} />;
}
```

---

**PASTE YOUR FILE BELOW THIS LINE:**

[Your file content here]
