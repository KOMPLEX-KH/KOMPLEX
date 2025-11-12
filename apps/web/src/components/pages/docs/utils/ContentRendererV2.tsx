import { TopicContent_V3 } from "@core-types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { CustomBox } from "@/components/pages/docs/boxes/CustomBox";
import { ThreeDBox } from "@/components/pages/docs/boxes/3DBox";
import { GraphBox } from "@/components/pages/docs/boxes/GraphBox";
import { ImageExplanationBox } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { VideoExplanationBox } from "@/components/pages/docs/boxes/explanation-box/VideoExplanationBox";
import { GraphExplanationBox } from "@/components/pages/docs/boxes/explanation-box/GraphExplanationBox";
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";
import {SummaryBox} from "@/components/pages/docs/boxes/SummaryBox";
import {TopicPracticeBox} from "@/components/pages/docs/boxes/TopicPracticeBox"

export default function ContentRendererV3({ content }: { content: TopicContent_V3[] }) {
    return content.map((item, index) => (
        <div key={index}>
            {item.type === "definition" && <DefinitionBox {...item} />}
            {item.type === "tip" && <TipBox {...item} />}
            {item.type === "example" && <ExampleBox {...item} />}
            {item.type === "exercise" && <ExerciseBox {...item} />}
            {item.type === "hint" && <HintBox {...item} />}
            {item.type === "warning" && <WarningBox {...item} />}
            {item.type === "custom" && <CustomBox {...item} />}
            {item.type === "threeD" && <ThreeDBox {...item} />}
            {item.type === "graph" && <GraphBox {...item} />}
            {item.type === "imageExplanation" && <ImageExplanationBox {...item} />}
            {item.type === "videoExplanation" && <VideoExplanationBox {...item} />}
            {item.type === "graphExplanation" && <GraphExplanationBox {...item} />}
            {item.type === "threeDExplanation" && <ThreeDExplanationBox {...item} />}
            {item.type === "summary" && <SummaryBox {...item} />}
            {item.type === "practice" && <TopicPracticeBox {...item} />}
        </div>
    ));
}