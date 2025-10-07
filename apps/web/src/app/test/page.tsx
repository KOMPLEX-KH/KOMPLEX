import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath } from "react-katex";

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "តេីសមីការឌីផែរ៉ង់ស្សែលគឺជាអ្វី?",
        content: <div className="flex flex-col items-start gap-3">
            <p>សមីការ​ :</p>
            <div className="flex items-center gap-2 flex-wrap">
                <BlockMath math="y' + y = 3" />,
                <BlockMath math="y'' - 4y' + 6y = 0" />,
                <BlockMath math="xy' - 5y = x^2" />,
                <BlockMath math="\frac{dy}{dx} + 7y = 8x + 2" />,
                <BlockMath math="\frac{d^2y}{dx^2} + 2 \frac{dy}{dx} - 3y = \cos{x}" />
                <span>,... សុទ្ធតែជាសមីការឌីផែរ៉ង់ស្សែល។</span>
            </div>
            <TipBox title="ចំណុចសំខាន់ៗ" content={<>
                <p className="font-bold">ដើម្បីសម្គាល់សមីការឌីផែរ៉ង់ស្សែល សូមពិនិត្យមើលថាតើវាមានដេរីវេ (Derivative) របស់អនុគមន៍ឬទេ។</p>
            </>} />
        </div>,
    },
    tip: {
        title: "ចំណុចសំខាន់ៗ",
        content: "ដើម្បីសម្គាល់សមីការឌីផែរ៉ង់ស្សែល សូមពិនិត្យមើលថាតើវាមានដេរីវេ (Derivative) របស់អនុគមន៍ឬទេ។",
    },
    example: {
        question:
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
            </div>,
    },
    exercise: {
        questions: [
            {
                id: "q1",
                question: "y' + y = x  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 0
            },
            {
                id: "q2",
                question: "x² + y² = 25  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 1
            },
            {
                id: "q3",
                question: "dy/dx = 3x²  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 0
            },
            {
                id: "q4",
                question: "y = mx + b  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 1
            }
        ]
    },
    warning: {
        content: "កុំច្រឡំសមីការដែលមានអថេរច្រើនជាសមីការឌីផែរ៉ង់ស្សែល បើសិនវាមិនមានដេរីវេទេ។"
    },
}

const lol = `
{
   "definition":{
      "title":"តេីសមីការឌីផែរ៉ង់ស្សែលគឺជាអ្វី?",
      "content":"សមីការឌីផែរ៉ង់ស្សែលគឺជាជាសមីការដែលមានអនុគមន៍និងដេរីវេមួយឬច្រេីននៃអនុគមន៍នោះ។"
   },
   "tip":{
      "title":"ចំណុចសំខាន់ៗ",
      "content":"ដើម្បីសម្គាល់សមីការឌីផែរ៉ង់ស្សែល សូមពិនិត្យមើលថាតើវាមានដេរីវេ (Derivative) របស់អនុគមន៍ឬទេ។"
   },
   "example":{
      "question":{
         "type":"div",
         "key":null,
         "props":{
            "className":"flex flex-col items-start gap-3",
            "children":[
               {
                  "type":"p",
                  "key":null,
                  "props":{
                     "children":"សមីការ​ :"
                  },
                  "_owner":null,
                  "_store":{
                     
                  }
               },
               {
                  "type":"div",
                  "key":null,
                  "props":{
                     "className":"flex items-center gap-2 flex-wrap",
                     "children":[
                        {
                           "key":null,
                           "props":{
                              "math":"y' + y = 3"
                           },
                           "_owner":null,
                           "_store":{
                              
                           }
                        },
                        ",",
                        {
                           "key":null,
                           "props":{
                              "math":"y'' - 4y' + 6y = 0"
                           },
                           "_owner":null,
                           "_store":{
                              
                           }
                        },
                        ",",
                        {
                           "key":null,
                           "props":{
                              "math":"xy' - 5y = x^2"
                           },
                           "_owner":null,
                           "_store":{
                              
                           }
                        },
                        ",",
                        {
                           "key":null,
                           "props":{
                              "math":"\\frac{dy}{dx} + 7y = 8x + 2"
                           },
                           "_owner":null,
                           "_store":{
                              
                           }
                        },
                        ",",
                        {
                           "key":null,
                           "props":{
                              "math":"\\frac{d^2y}{dx^2} + 2 \\frac{dy}{dx} - 3y = \\cos{x}"
                           },
                           "_owner":null,
                           "_store":{
                              
                           }
                        },
                        {
                           "type":"span",
                           "key":null,
                           "props":{
                              "children":",... សុទ្ធតែជាសមីការឌីផែរ៉ង់ស្សែល។"
                           },
                           "_owner":null,
                           "_store":{
                              
                           }
                        }
                     ]
                  },
                  "_owner":null,
                  "_store":{
                     
                  }
               }
            ]
         },
         "_owner":null,
         "_store":{
            
         }
      }
   },
   "exercise":{
      "questions":[
         {
            "id":"q1",
            "question":"y' + y = x តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
            "options":[
               "ត្រឹមត្រូវ",
               "មិនត្រឹមត្រូវ"
            ],
            "correctAnswer":0
         },
         {
            "id":"q2",
            "question":"x² + y² = 25 តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
            "options":[
               "ត្រឹមត្រូវ",
               "មិនត្រឹមត្រូវ"
            ],
            "correctAnswer":1
         },
         {
            "id":"q3",
            "question":"dy/dx = 3x² តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
            "options":[
               "ត្រឹមត្រូវ",
               "មិនត្រឹមត្រូវ"
            ],
            "correctAnswer":0
         },
         {
            "id":"q4",
            "question":"y = mx + b តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
            "options":[
               "ត្រឹមត្រូវ",
               "មិនត្រឹមត្រូវ"
            ],
            "correctAnswer":1
         }
      ]
   },
   "warning":{
      "content":"កុំច្រឡំសមីការដែលមានអថេរច្រើនជាសមីការឌីផែរ៉ង់ស្សែល បើសិនវាមិនមានដេរីវេទេ។"
   }
}";"`

export default function Test() {
    function formatJson(jsonString: string, spaces: number = 2): string {
        try {
            const obj = JSON.parse(jsonString);
            return JSON.stringify(obj, null, spaces);
        } catch (error) {
            console.error("Invalid JSON:", error);
            return jsonString; // return original if it fails
        }
    }
    function encodeJSX(jsx: string) {
        return btoa(unescape(encodeURIComponent(jsx)));
    }
    function decodeJSX(encoded: string) {
        return decodeURIComponent(escape(atob(encoded)));
    }
    const encodedText = encodeJSX(JSON.stringify(TOPIC_CONTENT));
    const decodedText = formatJson(decodeJSX(encodedText));
    return <div className="pt-20 px-4">
        {"encodedText: " + encodedText};
        <br />
        <br />
        {"decodedText: " + decodedText};
        <br />
        <br />
        {"decodedText (formated): " + formatJson(decodedText)};
        <DefinitionBox title="តេីសមីការឌីផែរ៉ង់ស្សែលគឺជាអ្វី?" content={TOPIC_CONTENT.definition?.content} />
    </div>
}