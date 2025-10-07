import { TopicContent } from "@/types/docs/topic";

function encodeJSX(jsx: string) {
  return btoa(unescape(encodeURIComponent(jsx)));
}

const lesson : TopicContent = {
  definition: {
    title: "តេីសមីការឌីផែរ៉ង់ស្សែលគឺជាអ្វី?",
    content:
      "សមីការឌីផែរ៉ង់ស្សែលគឺជាជាសមីការដែលមានអនុគមន៍និងដេរីវេមួយឬច្រេីននៃអនុគមន៍នោះ។",
  },
  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content:
      "ដើម្បីសម្គាល់សមីការឌីផែរ៉ង់ស្សែល សូមពិនិត្យមើលថាតើវាមានដេរីវេ (Derivative) របស់អនុគមន៍ឬទេ។",
  },
  example: {
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>សមីការ​ :</p>
        <div className="flex items-center gap-2 flex-wrap">
          <BlockMath math="y' + y = 3" />,
          <BlockMath math="y'' - 4y' + 6y = 0" />,
          <BlockMath math="xy' - 5y = x^2" />,
          <BlockMath math="\frac{dy}{dx} + 7y = 8x + 2" />,
          <BlockMath math="\frac{d^2y}{dx^2} + 2 \frac{dy}{dx} - 3y = \cos{x}" />
          <span>,... សុទ្ធតែជាសមីការឌីផែរ៉ង់ស្សែល។</span>
        </div>
      </div>
    ),
  },
  exercise: {
    questions: [
      {
        id: "q1",
        question: "y' + y = x  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
        options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
        correctAnswer: 0,
      },
      {
        id: "q2",
        question: "x² + y² = 25  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
        options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: "dy/dx = 3x²  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
        options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
        correctAnswer: 0,
      },
      {
        id: "q4",
        question: "y = mx + b  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
        options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
        correctAnswer: 1,
      },
    ],
  },
  warning: {
    content:
      "កុំច្រឡំសមីការដែលមានអថេរច្រើនជាសមីការឌីផែរ៉ង់ស្សែល បើសិនវាមិនមានដេរីវេទេ។",
  },
};


