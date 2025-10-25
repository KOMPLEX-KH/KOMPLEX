# Lesson Refactoring Prompt - TopicContent_V3

## Objective

Refactor lesson components from the old `TopicContent` format to the new `TopicContent_V3` format with proper serialization/deserialization to simulate database fetching.

## Pattern Overview

### Old Format (TopicContent)

```typescript
const TOPIC_CONTENT: TopicContent = {
  definition: { title: "...", content: "..." },
  tip: { title: "...", content: "..." },
  example: { question: "...", steps: [...], answer: "..." },
  // etc...
};

// Render
return (
  <>
    {TOPIC_CONTENT.definition && <DefinitionBox {...TOPIC_CONTENT.definition} />}
    {TOPIC_CONTENT.tip && <TipBox {...TOPIC_CONTENT.tip} />}
    // etc...
  </>
);
```

### New Format (TopicContent_V3)

```typescript
// Stage 1: Original authoring shape (TopicContent_V3)
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "...",
    content: "..."
  },
  {
    type: "tip",
    title: "...",
    content: "..."
  },
  {
    type: "example",
    question: "...",
    steps: [...],
    answer: "..."
  },
  // etc...
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes (renderable)
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

// Render
return <ContentRendererV3 content={restoredContent} />;
```

## Import Changes

### Remove old imports

```typescript
import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
// etc...
```

### Add new imports

```typescript
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
```

## Key Rules

1. **Always name the array `content`** (not `TOPIC_CONTENT` or similar)
2. **Add "use client" directive** at the top
3. **Convert nested objects to flat array** with `type` field
4. **Maintain all content** - no loss of information
5. **Use proper type discriminator** in each array item (`type: "definition"`, `type: "tip"`, etc.)
6. **Include serializer/deserializer pattern** to simulate DB fetching

## Type Mapping

| Old Property        | New Type                             | Notes                                      |
| ------------------- | ------------------------------------ | ------------------------------------------ |
| `definition`        | `{ type: "definition", ... }`        | Single or multiple definitions go in array |
| `tip`               | `{ type: "tip", ... }`               | Multiple tips = multiple array items       |
| `example`           | `{ type: "example", ... }`           | Includes question, steps, answer           |
| `exercise`          | `{ type: "exercise", ... }`          | Includes questions array                   |
| `warning`           | `{ type: "warning", ... }`           | Just content prop                          |
| `hint`              | `{ type: "hint", ... }`              | Just content prop                          |
| `custom`            | `{ type: "custom", ... }`            | Custom content with styling                |
| `threeD`            | `{ type: "threeD", ... }`            | 3D model wrapper                           |
| `graph`             | `{ type: "graph", ... }`             | Desmos graph                               |
| `imageExplanation`  | `{ type: "imageExplanation", ... }`  | Image with explanation                     |
| `videoExplanation`  | `{ type: "videoExplanation", ... }`  | Video with explanation                     |
| `graphExplanation`  | `{ type: "graphExplanation", ... }`  | Graph with explanation                     |
| `threeDExplanation` | `{ type: "threeDExplanation", ... }` | 3D with explanation                        |
