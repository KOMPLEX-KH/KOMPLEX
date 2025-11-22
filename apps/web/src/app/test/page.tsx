import AiRating from "@/components/pages/ai/AiRating";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import { deserializeTopicContentV3 } from "@/components/pages/docs/utils/ContentSerializerV2";

export default function TestPage() {
    const markdownContent = `[
        {
          "type": "graph",
          "props": {
            "expressions": [
              {
                "id": "1",
                "latex": "y = \\ln(x + 1)",
                "color": "#1f77b4"
              }
            ],
            "options": {
              "xAxisLabel": "x",
              "yAxisLabel": "f(x)",
              "showGrid": true,
              "xAxisMin": -2,
              "xAxisMax": 10,
              "yAxisMin": -5,
              "yAxisMax": 5
            }
          }
        }
      ]`;
    const deserialized = deserializeTopicContentV3(markdownContent);
    return (
        <div className="bg-white min-h-screen p-20 flex items-center justify-center">
            <div className="max-w-6xl"><ContentRendererV3 content={deserialized} /></div >
            {/* <AiRating responseId={1} /> */}
        </div>
    );
}