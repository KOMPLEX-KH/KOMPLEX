import { TopicContent_V2 } from "@/types/docs/topic";

import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { CustomBox } from "@/components/pages/docs/boxes/CustomBox";
import { ThreeDBox } from "@/components/pages/docs/boxes/3DBox";
import { GraphBox } from "@/components/pages/docs/boxes/GraphBox";

export default function ContentRenderer({
  content,
}: {
  content: TopicContent_V2[];
}) {
  return content.map((item, index) => (
    <div key={index}>
      {item.definition?.map((definition, index) => (
        <DefinitionBox title={definition.title} content={definition.content} key={index} />
      ))}
      {item.tip?.map((tip, index) => (
        <TipBox title={tip.title} content={tip.content} key={index} />
      ))}
      {item.example?.map((example, index) => (
        <ExampleBox question={example.question} steps={example.steps} answer={example.answer} key={index} />
      ))}
      {item.exercise?.map((exercise, index) => (
        <ExerciseBox questions={exercise.questions} key={index} />
      ))}
      {item.hint?.map((hint, index) => (
        <HintBox content={hint.content} key={index} />
      ))}
      {item.warning?.map((warning, index) => (
        <WarningBox content={warning.content} key={index} />
      ))}
      {item.custom?.map((custom, index) => (
        <CustomBox content={custom.content} key={index} />
      ))}
      {item.threeD?.map((threeD, index) => (
        <ThreeDBox content={threeD.content} key={index} />
      ))}
      {item.graph?.map((graph, index) => (
        <GraphBox expressions={graph.expressions} key={index} />
      ))}
    </div>
  ));
}
