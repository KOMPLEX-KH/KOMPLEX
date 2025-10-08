# Content Serializer Documentation

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [How It Works](#how-it-works)
4. [Component Support](#component-support)
5. [Serialization Process](#serialization-process)
6. [Deserialization Process](#deserialization-process)
7. [Usage Examples](#usage-examples)
8. [Database Integration](#database-integration)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

## Overview

The Content Serializer is a powerful utility that converts React components into JSON format for database storage, then reconstructs them back into fully functional React components. It's specifically designed to handle our custom box system, KaTeX math rendering, and complex nested content structures.

### Why We Need This

```mermaid
graph LR
    A[React Components] --> B[Database Storage]
    B --> C[Load from DB]
    C --> D[Render Components]

    A1[Hardcoded Lessons] --> A2[Not Scalable]
    A3[Dynamic Content] --> A4[Database Required]
    A4 --> A5[Serialization Needed]
```

**Problem**: We want to store lesson content in a database for dynamic loading, but React components can't be directly stored as JSON.

**Solution**: Serialize components to JSON → Store in database → Deserialize back to components.

## Architecture

### High-Level Architecture

```mermaid
graph TB
    subgraph "Content Creation"
        A[React Components] --> B[Box System]
        B --> C[KaTeX Math]
        C --> D[Nested Content]
    end

    subgraph "Serialization Layer"
        D --> E[Content Serializer]
        E --> F[JSON Structure]
    end

    subgraph "Storage Layer"
        F --> G[Database]
        G --> H[JSON Retrieval]
    end

    subgraph "Rendering Layer"
        H --> I[Deserializer]
        I --> J[React Components]
        J --> K[Live Rendering]
    end

    style E fill:#e1f5fe
    style I fill:#e8f5e8
```

### Component Type Detection

```mermaid
flowchart TD
    A[React Element] --> B{Element Type?}

    B -->|String| C[HTML Tag]
    B -->|Function| D{Is Custom Box?}
    B -->|InlineMath| E[KaTeX Inline]
    B -->|BlockMath| F[KaTeX Block]

    D -->|Yes| G[Custom Box Component]
    D -->|No| H[Unknown Component]

    C --> I[Serialize as HTML]
    G --> J[Serialize as Custom Box]
    E --> K[Serialize as Math]
    F --> K
    H --> L[Serialize as Generic]

    style G fill:#ffeb3b
    style K fill:#4caf50
    style I fill:#2196f3
```

## How It Works

### 1. Component Recognition System

The serializer uses a **Map-based component registry** to identify custom components:

```typescript
// Component Registry
const CUSTOM_COMPONENTS = new Map<React.ComponentType<any>, string>([
  [DefinitionBox, "DefinitionBox"],
  [TipBox, "TipBox"],
  [ExampleBox, "ExampleBox"],
  // ... all 17 box components
]);
```

**Why Map instead of object?**

- Direct component reference comparison (more reliable)
- Works with default exports, arrow functions, etc.
- No dependency on `.name` property

### 2. Serialization Flow

```mermaid
sequenceDiagram
    participant C as Component
    participant S as Serializer
    participant M as Map Registry
    participant J as JSON

    C->>S: serializeContent(component)
    S->>S: Check element type

    alt Custom Box Component
        S->>M: Lookup component type
        M-->>S: Return component name
        S->>S: Extract props recursively
        S->>S: Handle nested content
    else KaTeX Component
        S->>S: Extract math prop
        S->>S: Create math structure
    else HTML Element
        S->>S: Extract tag name
        S->>S: Process children
    end

    S->>J: Convert to JSON string
    J-->>C: Return serialized JSON
```

### 3. Deserialization Flow

```mermaid
sequenceDiagram
    participant J as JSON
    participant D as Deserializer
    participant M as Component Map
    participant R as React Element

    J->>D: deserializeContent(json)
    D->>D: Parse JSON structure

    alt Custom Box Component
        D->>M: Lookup component by name
        M-->>D: Return component constructor
        D->>D: Reconstruct props
        D->>D: Handle nested deserialization
    else KaTeX Component
        D->>D: Create InlineMath/BlockMath
        D->>D: Set math prop
    else HTML Element
        D->>D: Create HTML element
        D->>D: Process children
    end

    D->>R: Create React element
    R-->>J: Return rendered component
```

## Component Support

### Supported Component Types

```mermaid
graph TB
    subgraph "Box Components"
        A[DefinitionBox]
        B[TipBox]
        C[ExampleBox]
        D[ExerciseBox]
        E[HintBox]
        F[WarningBox]
        G[CustomBox]
        H[SummaryBox]
    end

    subgraph "Media Components"
        I[GraphBox]
        J[ThreeDBox]
        K[ImageBox]
        L[VideoBox]
        M[GraphExplanationBox]
        N[ThreeDExplanationBox]
    end

    subgraph "Assessment Components"
        O[ExamQuestionBox]
        P[ExerciseCreationBox]
        Q[TopicPracticeBox]
    end

    subgraph "Math Components"
        R[InlineMath]
        S[BlockMath]
    end

    subgraph "HTML Elements"
        T[div, span, p, ul, li, etc.]
    end

    style A fill:#e3f2fd
    style I fill:#f3e5f5
    style O fill:#e8f5e8
    style R fill:#fff3e0
    style T fill:#fce4ec
```

### Component Hierarchy

```mermaid
graph TD
    A[React Element] --> B{Component Type}

    B --> C[Custom Box]
    B --> D[KaTeX Math]
    B --> E[HTML Element]

    C --> C1[DefinitionBox]
    C --> C2[TipBox]
    C --> C3[ExampleBox]
    C --> C4[ExerciseBox]
    C --> C5[GraphBox]
    C --> C6[ThreeDBox]
    C --> C7[All 17 Box Types]

    D --> D1[InlineMath]
    D --> D2[BlockMath]

    E --> E1[div, span, p]
    E --> E2[ul, ol, li]
    E --> E3[h1-h6, strong, em]
    E --> E4[a, br, etc.]

    style C fill:#ffeb3b
    style D fill:#4caf50
    style E fill:#2196f3
```

## Serialization Process

### 1. Element Analysis

```mermaid
flowchart TD
    A[Input Element] --> B{Type Check}

    B -->|String/Number| C[Text Node]
    B -->|Array| D[Array Processing]
    B -->|Object with type| E[Component Processing]
    B -->|Other| F[Fallback to String]

    C --> G[Create text structure]
    D --> H[Map each item recursively]
    E --> I{Component Type?}
    F --> G

    I -->|Custom Box| J[Box Serialization]
    I -->|KaTeX| K[Math Serialization]
    I -->|HTML| L[HTML Serialization]
    I -->|Unknown| M[Generic Serialization]

    style J fill:#ffeb3b
    style K fill:#4caf50
    style L fill:#2196f3
    style M fill:#ff9800
```

### 2. Custom Box Serialization

```typescript
// Example: TipBox serialization
const tipBox = (
  <TipBox
    title="Important Note"
    content={
      <div>
        Remember that <InlineMath math="i^2 = -1" />
      </div>
    }
  />
);

// Serialized structure:
{
  "type": "TipBox",
  "props": {
    "title": "Important Note",
    "content": {
      "type": "div",
      "props": {
        "children": [
          "Remember that ",
          {
            "type": "InlineMath",
            "props": {
              "math": "i^2 = -1"
            }
          }
        ]
      }
    }
  }
}
```

### 3. Complex Props Handling

```mermaid
graph TB
    A[Component Props] --> B{Prop Type?}

    B -->|Array| C[Array Processing]
    B -->|Object| D{Object Type?}
    B -->|Primitive| E[Direct Assignment]

    C --> C1[Map each item]
    C1 --> C2{Item Type?}
    C2 -->|React Element| C3[Recursive Serialize]
    C2 -->|Plain Object| C4[Serialize Properties]
    C2 -->|Primitive| C5[Direct Value]

    D -->|React Element| D1[Recursive Serialize]
    D -->|Plain Object| D2[Serialize Properties]

    style C3 fill:#4caf50
    style D1 fill:#4caf50
    style C4 fill:#ff9800
    style D2 fill:#ff9800
```

### 4. ExampleBox with Complex Structure

```typescript
// Complex ExampleBox
const example = (
  <ExampleBox
    question={<span>Calculate <InlineMath math="(2+3i) + (1-2i)" /></span>}
    steps={[
      { title: "Add real parts", content: <InlineMath math="2 + 1 = 3" /> },
      { title: "Add imaginary parts", content: <InlineMath math="3i + (-2i) = i" /> }
    ]}
    answer={<InlineMath math="3 + i" />}
  />
);

// Serialized structure:
{
  "type": "ExampleBox",
  "props": {
    "question": {
      "type": "span",
      "props": {
        "children": [
          "Calculate ",
          {
            "type": "InlineMath",
            "props": { "math": "(2+3i) + (1-2i)" }
          }
        ]
      }
    },
    "steps": [
      {
        "title": "Add real parts",
        "content": {
          "type": "InlineMath",
          "props": { "math": "2 + 1 = 3" }
        }
      },
      {
        "title": "Add imaginary parts",
        "content": {
          "type": "InlineMath",
          "props": { "math": "3i + (-2i) = i" }
        }
      }
    ],
    "answer": {
      "type": "InlineMath",
      "props": { "math": "3 + i" }
    }
  }
}
```

## Deserialization Process

### 1. Component Reconstruction

```mermaid
flowchart TD
    A[JSON Data] --> B{Data Type?}

    B -->|String| C[Return String]
    B -->|Array| D[Array Processing]
    B -->|Object| E{Object Type?}

    D --> D1[Map each item]
    D1 --> D2[Recursive Deserialize]
    D2 --> D3[Add React keys]

    E -->|Custom Box| F[Box Deserialization]
    E -->|KaTeX| G[Math Deserialization]
    E -->|HTML| H[HTML Deserialization]
    E -->|Text| I[Return Value]

    F --> F1[Lookup Component]
    F1 --> F2[Reconstruct Props]
    F2 --> F3[Handle Children]
    F3 --> F4[Create Element]

    G --> G1[Create InlineMath/BlockMath]
    G1 --> G2[Set Math Prop]

    H --> H1[Create HTML Element]
    H1 --> H2[Process Children]

    style F fill:#ffeb3b
    style G fill:#4caf50
    style H fill:#2196f3
```

### 2. Component Map Lookup

```typescript
// Component reconstruction map
const componentMap: Record<string, React.ComponentType<any>> = {
  DefinitionBox,
  TipBox,
  ExampleBox,
  ExerciseBox,
  // ... all 17 components
};

// Deserialization logic
if (componentMap[obj.type]) {
  const Component = componentMap[obj.type];
  const { children, ...restProps } = obj.props || {};

  // Recursively deserialize props
  const deserializedProps = deserializeProps(restProps);

  return React.createElement(
    Component,
    { key: Math.random(), ...deserializedProps },
    children ? deserialize(children) : undefined
  );
}
```

### 3. Key Management

```mermaid
graph LR
    A[Array Items] --> B{Item Type?}

    B -->|React Element| C[Clone with Key]
    B -->|Primitive| D[Wrap in Fragment]

    C --> E[React.cloneElement]
    D --> F[React.Fragment with Key]

    E --> G[Unique Key Added]
    F --> G

    style G fill:#4caf50
```

## Usage Examples

### 1. Basic Usage

```typescript
import {
  serializeContent,
  deserializeContent,
} from "@/utils/contentSerializer";

// Create content
const content = (
  <div>
    <DefinitionBox
      title="Complex Numbers"
      content={<InlineMath math="z = a + bi" />}
    />
  </div>
);

// Serialize
const json = serializeContent(content);
console.log(json);
// Output: {"type":"div","props":{"children":[...]}}

// Deserialize
const restored = deserializeContent(json);
// restored is now a fully functional React component
```

### 2. Database Integration

```typescript
// Save to database
async function saveLesson(lessonId: string, content: ReactNode) {
  const json = serializeContent(content);
  await db.lessons.insert({
    id: lessonId,
    title: "Complex Numbers",
    content: json,
    created_at: new Date(),
  });
}

// Load from database
async function loadLesson(lessonId: string) {
  const lesson = await db.lessons.findOne({ id: lessonId });
  if (!lesson) return null;

  const content = deserializeContent(lesson.content);
  return content;
}

// Usage in component
function LessonPage({ lessonId }: { lessonId: string }) {
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    loadLesson(lessonId).then(setContent);
  }, [lessonId]);

  return <div>{content}</div>;
}
```

### 3. Complex Lesson Structure

```typescript
const complexLesson = (
  <div>
    <DefinitionBox
      title="Complex Numbers"
      content={
        <div>
          A complex number has the form <InlineMath math="z = a + bi" />
          where <InlineMath math="a, b \in \mathbb{R}" /> and
          <InlineMath math="i^2 = -1" />.
        </div>
      }
    />

    <TipBox
      title="Key Properties"
      content={
        <ul>
          <li>
            Real part: <InlineMath math="\text{Re}(z) = a" />
          </li>
          <li>
            Imaginary part: <InlineMath math="\text{Im}(z) = b" />
          </li>
          <li>
            Conjugate: <InlineMath math="\overline{z} = a - bi" />
          </li>
        </ul>
      }
    />

    <ExampleBox
      question={
        <span>
          Find the sum of <InlineMath math="z_1 = 2 + 3i" /> and
          <InlineMath math="z_2 = 1 - 2i" />.
        </span>
      }
      steps={[
        {
          title: "Add real parts",
          content: <InlineMath math="2 + 1 = 3" />,
        },
        {
          title: "Add imaginary parts",
          content: <InlineMath math="3i + (-2i) = i" />,
        },
      ]}
      answer={<InlineMath math="z_1 + z_2 = 3 + i" />}
    />

    <GraphBox
      expressions={[
        { id: "1", latex: "y=x^2", color: "#2563eb" },
        { id: "2", latex: "y=2x+1", color: "#dc2626" },
      ]}
    />
  </div>
);

// Serialize entire lesson
const lessonJson = serializeContent(complexLesson);
// All components, math, and nested structures preserved
```

## Database Integration

### Database Schema Examples

#### PostgreSQL

```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  grade INTEGER NOT NULL,
  content JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for JSON queries
CREATE INDEX idx_lessons_content ON lessons USING GIN (content);

-- Insert lesson
INSERT INTO lessons (title, subject, grade, content)
VALUES (
  'Complex Numbers Introduction',
  'mathematics',
  12,
  '{"type":"div","props":{"children":[...]}}'::jsonb
);
```

#### MongoDB

```javascript
const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  grade: { type: Number, required: true },
  content: { type: Object, required: true }, // Stores serialized JSON
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Insert lesson
const lesson = new Lesson({
  title: "Complex Numbers",
  subject: "mathematics",
  grade: 12,
  content: JSON.parse(serializeContent(lessonContent)),
});
```

#### Supabase

```typescript
// Insert lesson
const { data, error } = await supabase.from("lessons").insert({
  title: "Complex Numbers",
  subject: "mathematics",
  grade: 12,
  content: serializeContent(lessonContent),
});

// Fetch lesson
const { data: lesson } = await supabase
  .from("lessons")
  .select("*")
  .eq("id", lessonId)
  .single();

const content = deserializeContent(lesson.content);
```

### Migration Strategy

```mermaid
graph TB
    A[Current Hardcoded Lessons] --> B[Extract Components]
    B --> C[Serialize Each Lesson]
    C --> D[Insert into Database]
    D --> E[Update Rendering Logic]
    E --> F[Dynamic Loading]

    subgraph "Migration Script"
        G[Read Lesson Files]
        H[Serialize Content]
        I[Batch Insert]
    end

    A --> G
    G --> H
    H --> I
    I --> D

    style A fill:#ffcdd2
    style F fill:#c8e6c9
```

```typescript
// Migration script
import { allLessons } from "./lessons";
import { serializeContent } from "@/utils/contentSerializer";

async function migrateLessons() {
  for (const lesson of allLessons) {
    const json = serializeContent(lesson.content);

    await db.lessons.insert({
      id: lesson.id,
      title: lesson.title,
      subject: lesson.subject,
      grade: lesson.grade,
      content: json,
      created_at: new Date(),
    });

    console.log(`Migrated lesson: ${lesson.title}`);
  }
}

migrateLessons().then(() => {
  console.log("Migration completed!");
});
```

## Best Practices

### 1. Content Structure

```typescript
// ✅ Good - Clean component structure
const lesson = (
  <div>
    <DefinitionBox title="..." content={<InlineMath math="..." />} />
    <TipBox content="..." />
    <ExampleBox question="..." answer="..." />
  </div>
);

// ❌ Bad - Avoid complex nested functions
const badLesson = (
  <div>
    <CustomBox onClick={() => complexFunction()} />
    <ComponentWithRef ref={myRef} />
  </div>
);
```

### 2. Math Handling

```typescript
// ✅ Good - Math as strings
<InlineMath math="x^2 + y^2 = r^2" />
<BlockMath math="\begin{align} x &= a + bi \\ y &= c + di \end{align}" />

// ❌ Bad - Dynamic math generation
<InlineMath math={generateMathExpression()} />
```

### 3. Performance Optimization

```typescript
// ✅ Good - Memoize serialization
const serializedContent = useMemo(() => serializeContent(content), [content]);

// ✅ Good - Lazy loading
const LessonComponent = lazy(() => import(`./lessons/${lessonId}`));

// ✅ Good - Split large content
const part1 = serializeContent(<Part1 />);
const part2 = serializeContent(<Part2 />);
// Load parts on demand
```

### 4. Error Handling

```typescript
function SafeDeserializer({ json }: { json: string }) {
  try {
    const content = deserializeContent(json);
    return <div>{content}</div>;
  } catch (error) {
    console.error("Deserialization failed:", error);
    return (
      <div className="error">
        <p>Failed to load content</p>
        <details>
          <summary>Error details</summary>
          <pre>{error.message}</pre>
        </details>
      </div>
    );
  }
}
```

## Troubleshooting

### Common Issues

#### 1. KaTeX Not Rendering

```typescript
// ✅ Ensure KaTeX CSS is imported
import 'katex/dist/katex.min.css';

// ✅ Check math prop format
<InlineMath math="x^2" /> // Correct
<InlineMath math={x^2} /> // Wrong - missing quotes

// ✅ Verify math expressions
<InlineMath math="\frac{a}{b}" /> // Correct
<InlineMath math="\frac{a}{b" />   // Wrong - missing closing brace
```

#### 2. Component Not Deserializing

```typescript
// Check if component is registered
// In contentSerializer.tsx:
const CUSTOM_COMPONENTS = new Map([
  [YourCustomBox, "YourCustomBox"], // ✅ Add here
  // ...
]);

const componentMap = {
  YourCustomBox, // ✅ Add here too
  // ...
};
```

#### 3. Props Lost After Deserialization

```typescript
// ✅ Serializable props
const goodProps = {
  title: "String",
  count: 42,
  items: ["array", "of", "strings"],
  config: { option: "value" },
};

// ❌ Non-serializable props
const badProps = {
  onClick: () => {}, // Function
  ref: myRef, // Ref
  element: document.getElementById("id"), // DOM node
};
```

#### 4. Performance Issues

```typescript
// ✅ Optimize large content
const optimizedContent = useMemo(() => {
  return serializeContent(largeContent);
}, [largeContent]);

// ✅ Split content
const sections = content.map((section) => serializeContent(section));

// ✅ Cache deserialized content
const cachedContent = useMemo(() => deserializeContent(json), [json]);
```

### Debug Tools

```typescript
// Debug serialization
function debugSerialize(content: ReactNode) {
  console.log("Original content:", content);

  const serialized = serializeContent(content);
  console.log("Serialized JSON:", serialized);

  const deserialized = deserializeContent(serialized);
  console.log("Deserialized content:", deserialized);

  return { serialized, deserialized };
}

// Validate round-trip
function validateSerialization(content: ReactNode) {
  const serialized = serializeContent(content);
  const deserialized = deserializeContent(serialized);

  // Compare structure (simplified)
  const originalStr = JSON.stringify(content, null, 2);
  const deserializedStr = JSON.stringify(deserialized, null, 2);

  return originalStr === deserializedStr;
}
```

## Summary

The Content Serializer provides a complete solution for storing React components in databases:

### ✅ What Works Perfectly

- **All 17 Box Components** - DefinitionBox, TipBox, ExampleBox, etc.
- **KaTeX Math Rendering** - Both InlineMath and BlockMath
- **Complex Nested Content** - Any combination of components
- **Props Preservation** - All serializable props maintained
- **Database Integration** - Works with PostgreSQL, MongoDB, Supabase
- **Performance** - Fast serialization/deserialization
- **Type Safety** - Full TypeScript support

### ⚠️ Limitations

- **Functions** - Event handlers need to be reattached after deserialization
- **Refs** - DOM references are not preserved
- **Context** - React context values are not serialized

### 🚀 Benefits

- **Dynamic Content** - Load lessons from database
- **CMS Ready** - Edit content through admin interface
- **Scalable** - Handle thousands of lessons
- **Flexible** - Any component structure supported
- **Maintainable** - Clean separation of content and code

The serializer is production-ready and handles all your current box system requirements while being flexible enough for future enhancements.
