import React from "react";
import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ImageExplanationBox } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { BlockMath, InlineMath } from "react-katex";

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ម៉ូឌុលនៃចំនួនកុំផ្លិច",
    content: (
      <div>
        ម៉ូឌុលនៃចំនួនកុំផ្លិច​ <InlineMath math="z = a + bi" /> គឺ{" "}
        <InlineMath math="|z| = \sqrt{a^2 + b^2}" />
      </div>
    ),
  },
  tip: {
    title: "ស្វ័យគុណនៃ i",
    content: (
      <div>
        គ្រប់​ k ជាចំនួនគត់ គេមានស្វ័យគុណនៃ​ i គឺ <br />
        <InlineMath math="i^{4k} = 1" /> <br />
        <InlineMath math="i^{4k+1} = i" /> <br />
        <InlineMath math="i^{4k+2}= -1" /> <br />
        <InlineMath math="i^{4k+3} = -i" />
      </div>
    ),
  },
};
const TOPIC_CONTENT_ARGUMENT: TopicContent = {
  definition: {
    title: "អាគុយម៉ង់",
    content: (
      <div>
        អាគុយម៉ង់នៃចំនួនកុំផ្លិច គឺជាមុំ <InlineMath math="\theta" />{" "}
        ដែលផ្គុំដោយវ៉ិចទ័រ <InlineMath math="\overrightarrow{OM}" /> និង(ox)
        <br />
        <br />
      </div>
    ),
  },
};

const ComplexModulus = () => {
  return (
    <>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox
          title={TOPIC_CONTENT.definition.title}
          content={TOPIC_CONTENT.definition.content}
        />
      )}

      {TOPIC_CONTENT.tip && (
        <TipBox
          title={TOPIC_CONTENT.tip.title}
          content={TOPIC_CONTENT.tip.content}
        />
      )}

      {TOPIC_CONTENT_ARGUMENT.definition && (
        <DefinitionBox
          title={TOPIC_CONTENT_ARGUMENT.definition.title}
          content={TOPIC_CONTENT_ARGUMENT.definition.content}
        />
      )}

      <ImageExplanationBox
        src="/argument.png" // Remove 'public' since Next.js serves from public by default
        imageAlt="ក្រាប"
        explanation={
          <div>
            ក្នុងក្រាបខាងឆ្វេងនេះ ៖
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>ចំណុច M តំណាងឱ្យចំនួនកុំផ្លិច z = a + bi</li>
              <li>r = |z| គឺជាម៉ូឌុល (ចម្ងាយពីចំណុចកណ្តាល)</li>
              <li>θ = arg(z) គឺជាអាគុយម៉ង់ (មុំរវាង r ជាមួយអ័ក្ស ox)</li>
              <li>
                គេសរសេរ <InlineMath math="\arg(z) = \theta" /> ដែល{" "}
                <InlineMath math="\cos(\theta) = \frac{a}{r}" /> និង​{" "}
                <InlineMath math="sin(\theta) = \frac{b}{r}" />
              </li>
            </ul>
          </div>
        }
      />
    </>
  );
};

export default ComplexModulus;
