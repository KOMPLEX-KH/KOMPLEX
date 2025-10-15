"use client";

import React from "react";
import { InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
  deserializeTopicContentV3ToTree,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { Calculator } from "lucide-react";

// Stage 1: Original authoring shape (TopicContent_V3)
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
  {
    type: "tip",
    title: "ចំណាំ",
    content: (
      <div>
        i គឺ <InlineMath math="i^2 = -1" />
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <span>
        គណនា <InlineMath math="(2+3i) + (1-2i)" />
      </span>
    ),
    steps: [
      { title: "បូកផ្នែកពិត", content: <InlineMath math="2+1=3" /> },
      { title: "បូកផ្នែកនិមិត្ត", content: <InlineMath math="3i+(-2i)=i" /> },
    ],
    answer: <InlineMath math="3 + i" />,
  },
  {
    type: "exercise",
    questions: [
      {
        id: "q1",
        question: (
          <span>
            តើ <InlineMath math="i^2" /> ស្មើអ្វី?
          </span>
        ),
        options: ["1", "-1", "i", "2i"],
        correctAnswer: 1,
      },
    ],
  },
  {
    type: "hint",
    content: (
      <div>
        ចងចាំថា <InlineMath math="\\overline{a+bi}=a-bi" />
        <Calculator size={16} color="red"></Calculator>
        <Calculator size={16} color="red"></Calculator>
        <Calculator size={16} color="red"></Calculator>
      </div>
    ),
  },
  { type: "warning", content: "កុំបន្លំ a និង b ជាមួយគ្នា" },
  {
    type: "custom",
    title: "ប្លុកផ្ទាល់ខ្លួន",
    content: <div>ខ្លឹមសារតាមតម្រូវការ</div>,
    backgroundColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    type: "threeD",
    src: "/test.glb",
    title: "គំរូ 3D",
    content: "ការពន្យល់អំពីរូបភាព 3D",
    height: 300,
  },
  {
    type: "graph",
    expressions: [
      { id: "1", latex: "y=x^2", color: "#2563eb" },
      { id: "2", latex: "y=2x+1", color: "#dc2626" },
    ],
  },
  {
    type: "imageExplanation",
    src: "/triangle.png",
    imageAlt: "រូបភាព",
    explanation: "នេះជាការពន្យល់អំពីរូបភាព",
    title: "រូបភាព",
  },
  {
    type: "videoExplanation",
    src: "/test.mp4",
    videoTitle: "វីដេអូ",
    explanation: "ពន្យល់អំពីវីដេអូ",
  },
  {
    type: "graphExplanation",
    expressions: [{ id: "1", latex: "y=\\sin(x)", color: "#16a34a" }],
    explanation: (
      <div>
        ក្រាប <InlineMath math="y=\\sin(x)" /> មានរយៈពេល <InlineMath math="2\\pi" />
      </div>
    ),
  },
  {
    type: "threeDExplanation",
    src: "/plant-cell.glb",
    explanation: "ការពន្យល់អំពីគំរូ 3D",
    height: 600,
  },
];

const test = `[
  {
    "type": "definition",
    "props": {
      "title": "តើចំនួនកុំផ្លិចជាអ្វី?",
      "content": {
        "type": "div",
        "props": {
          "children": [
            {
              "type": "text",
              "value": "ចំនួនកុំផ្លិចមានរាង "
            },
            {
              "type": "InlineMath",
              "props": {
                "math": "z = a + bi"
              }
            }
          ]
        }
      }
    }
  },
  {
    "type": "tip",
    "props": {
      "title": "ចំណាំ",
      "content": {
        "type": "div",
        "props": {
          "children": [
            {
              "type": "text",
              "value": "i គឺ "
            },
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
  },
  {
    "type": "example",
    "props": {
      "question": {
        "type": "span",
        "props": {
          "children": [
            {
              "type": "text",
              "value": "គណនា "
            },
            {
              "type": "InlineMath",
              "props": {
                "math": "(2+3i) + (1-2i)"
              }
            }
          ]
        }
      },
      "steps": [
        {
          "title": "បូកផ្នែកពិត",
          "content": {
            "type": "InlineMath",
            "props": {
              "math": "2+1=3"
            }
          }
        },
        {
          "title": "បូកផ្នែកនិមិត្ត",
          "content": {
            "type": "InlineMath",
            "props": {
              "math": "3i+(-2i)=i"
            }
          }
        }
      ],
      "answer": {
        "type": "InlineMath",
        "props": {
          "math": "3 + i"
        }
      }
    }
  },
  {
    "type": "exercise",
    "props": {
      "questions": [
        {
          "id": "q1",
          "question": {
            "type": "span",
            "props": {
              "children": [
                {
                  "type": "text",
                  "value": "តើ "
                },
                {
                  "type": "InlineMath",
                  "props": {
                    "math": "i^2"
                  }
                },
                {
                  "type": "text",
                  "value": " ស្មើអ្វី?"
                }
              ]
            }
          },
          "options": [
            {
              "type": "text",
              "value": "1"
            },
            {
              "type": "text",
              "value": "-1"
            },
            {
              "type": "text",
              "value": "i"
            },
            {
              "type": "text",
              "value": "2i"
            }
          ],
          "correctAnswer": 1
        }
      ]
    }
  },
  {
    "type": "hint",
    "props": {
      "content": {
        "type": "div",
        "props": {
          "children": [
            {
              "type": "text",
              "value": "ចងចាំថា "
            },
            {
              "type": "InlineMath",
              "props": {
                "math": "\\\\overline{a+bi}=a-bi"
              }
            },
            {
              "type": "LucideIcon",
              "props": {
                "name": "Calculator",
                "size": 16,
                "color": "red"
              }
            },
            {
              "type": "LucideIcon",
              "props": {
                "name": "Calculator",
                "size": 16,
                "color": "red"
              }
            },
            {
              "type": "LucideIcon",
              "props": {
                "name": "Calculator",
                "size": 16,
                "color": "red"
              }
            }
          ]
        }
      }
    }
  },
  {
    "type": "warning",
    "props": {
      "content": "កុំបន្លំ a និង b ជាមួយគ្នា"
    }
  },
  {
    "type": "custom",
    "props": {
      "title": "ប្លុកផ្ទាល់ខ្លួន",
      "content": {
        "type": "div",
        "props": {
          "children": {
            "type": "text",
            "value": "ខ្លឹមសារតាមតម្រូវការ"
          }
        }
      },
      "backgroundColor": "bg-white",
      "borderColor": "border-gray-200"
    }
  },
  {
    "type": "threeD",
    "props": {
      "src": "/test.glb",
      "title": "គំរូ 3D",
      "content": "ការពន្យល់អំពីរូបភាព 3D",
      "height": 300
    }
  },
  {
    "type": "graph",
    "props": {
      "expressions": [
        {
          "id": "1",
          "latex": "y=x^2",
          "color": "#2563eb"
        },
        {
          "id": "2",
          "latex": "y=2x+1",
          "color": "#dc2626"
        }
      ]
    }
  },
  {
    "type": "imageExplanation",
    "props": {
      "src": "/triangle.png",
      "imageAlt": "រូបភាព",
      "explanation": "នេះជាការពន្យល់អំពីរូបភាព",
      "title": "រូបភាព"
    }
  },
  {
    "type": "videoExplanation",
    "props": {
      "src": "/test.mp4",
      "videoTitle": "វីដេអូ",
      "explanation": "ពន្យល់អំពីវីដេអូ"
    }
  },
  {
    "type": "graphExplanation",
    "props": {
      "expressions": [
        {
          "id": "1",
          "latex": "y=\\sin(x)",
          "color": "#16a34a"
        }
      ],
      "explanation": {
        "type": "div",
        "props": {
          "children": [
            {
              "type": "text",
              "value": "ក្រាប "
            },
            {
              "type": "InlineMath",
              "props": {
                "math": "y=\\\\sin(x)"
              }
            },
            {
              "type": "text",
              "value": " មានរយៈពេល "
            },
            {
              "type": "InlineMath",
              "props": {
                "math": "2\\\\pi"
              }
            }
          ]
        }
      }
    }
  },
  {
    "type": "threeDExplanation",
    "props": {
      "src": "/plant-cell.glb",
      "explanation": "ការពន្យល់អំពីគំរូ 3D",
      "height": 600
    }
  }
]`;

// Stage 2: Serialized JSON
const jsonV2 = serializeTopicContentV3(content);

// Stage 3a: Deserialized V3 with live React nodes (renderable) - use the serialized version directly
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// If you want to test with the hardcoded string, fix the LaTeX escaping:
const fixJsonString = (jsonString: string): string => {
  return jsonString
    .replace(/\\\\\\\\/g, '\\\\')  // Fix double-escaped backslashes
    .replace(/\\\\n/g, '\\n')      // Fix escaped newlines
    .replace(/\\\\t/g, '\\t')      // Fix escaped tabs
    .replace(/\\\\"/g, '\\"')      // Fix escaped quotes
    .replace(/\\\\r/g, '\\r');     // Fix escaped carriage returns
};

const fixedTest = fixJsonString(test);
let restoredV3FromString: TopicContent_V3[] = [];

try {
  restoredV3FromString = deserializeTopicContentV3(fixedTest) as TopicContent_V3[];
} catch (error) {
  console.error('Failed to deserialize fixed test:', error);
  console.error('Fixed test string:', fixedTest);
}

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

// Helper: visualize type sequence
const originalTypes = content.map((i) => i.type);

const TestingRenderer = () => {
  console.log(jsonV2);
  return (
    <div className="p-6 space-y-10">
      {/* Stage 1: Original authoring data */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Stage 1: Original TopicContent_V3 (authoring)</h2>
        <div className="text-sm text-gray-500">Types in sequence:</div>
        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{JSON.stringify(originalTypes, null, 2)}</pre>
        <div className="text-sm text-gray-500">Rendered (authoring):</div>
        <ContentRendererV3 content={content} />
      </div>

      {/* Stage 2: Serialized JSON */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Stage 2: Serialized JSON (V2)</h2>
        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{jsonV2}</pre>
      </div>

      {/* Stage 3a: Deserialized and rendered */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Stage 3a: Deserialized TopicContent_V3 (renderable)</h2>
        <ContentRendererV3 content={restoredV3} />
      </div>

      {/* Stage 3a-fixed: Deserialized from fixed string */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Stage 3a-fixed: Deserialized from fixed hardcoded string</h2>
        <ContentRendererV3 content={restoredV3FromString} />
      </div>

      {/* Stage 3b: Deserialized raw node tree */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Stage 3b: Deserialized TopicContent_V3 (raw node tree)</h2>
        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{JSON.stringify(restoredV3Tree, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TestingRenderer;

