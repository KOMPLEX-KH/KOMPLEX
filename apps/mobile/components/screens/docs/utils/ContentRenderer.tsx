import React from "react";
import { View } from "react-native";
import { TopicContent_V3 } from "@core-types/docs/topic";

// Import all box components
import DefinitionBox from "@/components/screens/docs/boxes/DefinitionBox";
import TipBox from "@/components/screens/docs/boxes/TipBox";
import ExampleBox from "@/components/screens/docs/boxes/ExampleBox";
import ExerciseBox from "@/components/screens/docs/boxes/ExerciseBox";
import HintBox from "@/components/screens/docs/boxes/HintBox";
import WarningBox from "@/components/screens/docs/boxes/WarningBox";
import CustomBox from "@/components/screens/docs/boxes/CustomBox";
import ThreeDBox from "@/components/screens/docs/boxes/3DBox";
import GraphBox from "@/components/screens/docs/boxes/GraphBox";
import SummaryBox from "@/components/screens/docs/boxes/SummaryBox";
import TopicPracticeBox from "@/components/screens/docs/boxes/TopicPracticeBox";
import ImageExplanationBox from "@/components/screens/docs/boxes/explanation-box/ImageExplanationBox";
import VideoExplanationBox from "@/components/screens/docs/boxes/explanation-box/VideoExplanationBox";
import GraphExplanationBox from "@/components/screens/docs/boxes/explanation-box/GraphExplanationBox";
import ThreeDExplanationBox from "@/components/screens/docs/boxes/explanation-box/3DExplanationBox";

export default function ContentRenderer({ content }: { content: TopicContent_V3[] }) {
  return (
    <View>
      {content.map((item, index) => {
        const key = `content-${index}-${item.type}`;
        
        switch (item.type) {
          case "definition":
            return <DefinitionBox key={key} {...item} />;
          case "tip":
            return <TipBox key={key} {...item} />;
          case "example":
            return <ExampleBox key={key} {...item} />;
          case "exercise":
            return <ExerciseBox key={key} {...item} />;
          case "hint":
            return <HintBox key={key} {...item} />;
          case "warning":
            return <WarningBox key={key} {...item} />;
          case "custom":
            return <CustomBox key={key} {...item} />;
          case "threeD":
            return <ThreeDBox key={key} {...item} />;
          case "graph":
            return <GraphBox key={key} {...item} />;
          case "imageExplanation":
            return <ImageExplanationBox key={key} {...item} />;
          case "videoExplanation":
            return <VideoExplanationBox key={key} {...item} />;
          case "graphExplanation":
            return <GraphExplanationBox key={key} {...item} />;
          case "threeDExplanation":
            return <ThreeDExplanationBox key={key} {...item} />;
          case "summary":
            return <SummaryBox key={key} {...item} />;
          case "practice":
            return <TopicPracticeBox key={key} {...item} />;
          default:
            return null;
        }
      })}
    </View>
  );
}

