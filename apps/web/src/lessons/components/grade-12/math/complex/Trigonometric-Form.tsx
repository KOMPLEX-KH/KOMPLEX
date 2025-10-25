"use client";

import React from "react";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath } from "react-katex";

// Stage 1: Original authoring shape (TopicContent_V3)
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "ទម្រង់ត្រីកោណមាត្រ",
    content:
      "ទម្រង់ត្រីកោណមាត្រនៃកុំផ្លិចគឺជាការបង្ហាញដោយប្រើប្រវែង (r) និងមុំ (θ) ជំនួសការបង្ហាញជា a+bi",
  },
  {
    type: "tip",
    title: "ទម្រង់ទូទៅ",
    content: (
      <div className="text-[17.5px]">
        ចំនួនកុំផ្លិចមួយ <InlineMath math="z = a + bi" />{" "}
        អាចសរសេរជាទម្រង់ត្រីកោណមាត្រ
        <br /> <InlineMath math="z = r(\cos\theta + i\sin\theta)" />
        <br />
        ដែល <InlineMath math="r = |z|= \sqrt{a^2 + b^2}" /> ជាប្រវែង <br />
        និង <InlineMath math="\theta = \tan^{-1}\left(\frac{b}{a}\right)" />{" "}
        ជាមុំ (ក្រាបនៅទំព័រម៉ូឌុលនៃកុំផ្លិច)
      </div>
    ),
  },
  {
    type: "definition",
    title: "ប្រមាណវិធីលើទម្រង់ត្រីកោណមាត្រ",
    content: "ប្រមាណវិធីមានតែគុណ និង​ ចែកតែប៉ុណ្ណោះ",
  },
  {
    type: "tip",
    title: (
      <div className="text-base flex flex-row gap-x-2">
        <div>បើ</div>
        <div className="flex flex-row text-[15px] gap-x-1">
          <div>
            <div>
              <InlineMath math="z_1 = r_1(\cos\theta_1 + i\sin\theta_1)" />
            </div>

            <div>
              <InlineMath math="z_2 = r_2(\cos\theta_2 + i\sin\theta_2)" />
            </div>
          </div>
        </div>
      </div>
    ),
    content: (
      <div className="flex flex-col text-lg gap-y-1.5">
        <p>
          <b>គេបានរូបមន្ត</b>
        </p>
        <div>
          <InlineMath math="z_1z_2 = r_1r_2[\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)]" />
        </div>
        <div>
          <InlineMath math="\frac{z_1}{z_2} = \frac{r_1}{r_2}[\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)]" />
        </div>
        <div>
          <b>ករណីស្វ័យគុណ n</b>
        </div>
        <div>
          <InlineMath math="z^n = r^n[\cos(n\theta) + i\sin(n\theta)]" />
        </div>
        <div>
          តាមរូបមន្ត <b>ដឺម័រ</b>
        </div>
        <div>
          <InlineMath math="(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)" />
        </div>
        <div>
          <b>ចុះបើឬសទី​ n ?</b>
        </div>
        <div>ឬសទី n ដោយ k = 0,1,2,3,.....,n-1 គេបាន</div>
        <div>
          <InlineMath math="z_k =\sqrt[n]{r} [\cos(\frac{\theta + 2k\pi}{n}) + i\sin(\frac{\theta + 2k\pi}{n})]" />
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        គេមានសមីការ <InlineMath math="z= 4+\sqrt{5}i" /> <br /> សរសេរ z
        ជាទម្រង់ត្រីកោណមាត្រ និងកំណត់ម៉ូឌុលនិងអាគុយម់ង់នៃសមីការខាងលើ
      </div>
    ),
    steps: [
      {
        title: <div>ត្រូវកំណត់ a និង b រួចគណនា ម៉ូឌុលនិងអាគុយម៉ង់</div>,
        content: (
          <div>
            គេមាន <InlineMath math="r = \sqrt{1^2 + (\sqrt{3})^2} = 2" /> និង{" "}
            <InlineMath math="\theta = \tan^{-1}\left(\frac{\sqrt{3}}{1}\right) = \frac{\pi}{3}" />
          </div>
        ),
      },
      {
        title: <div>សរសេរ z ជាទម្រង់ត្រីកោណមាត្រ</div>,
        content: (
          <div>
            ដោយ r = 2 និង​ <InlineMath math="\theta = \frac{\pi}{3}" /> <br />
            គេបាន{" "}
            <InlineMath math="z = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right)" />
          </div>
        ),
      },
    ],
  },
  {
    type: "definition",
    title: "ករណីទម្រង់មុំពិសេស",
    content: "ក្នុងករណីចូលទម្រង់មុំពិសេសគេមានវិធីធ្វើលឿនដើម្បីចំណេញពេល",
  },
  {
    type: "tip",
    title: "ចំណាំ !",
    content: (
      <div>
        ទម្រង់មាន 2 គឺ a និង​ b មានតម្លៃដូចគ្នា និង មានមួយមានតម្លៃ{" "}
        <InlineMath math="\sqrt{3}" /> ដោយមិនគិតសញ្ញា
        <br />
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        ករណី a និង​ b មានតម្លៃដូចគ្នាដូចជា <InlineMath math="z = 4 - 4i" /> ឬ{" "}
        <InlineMath math="z = \sqrt{6} + \sqrt{6}i" />
      </div>
    ),
    steps: [
      {
        title: (
          <div>
            ត្រូវចាប់កត្តាទាំងនោះអោយចូលទម្រង់ <InlineMath math="z = 1 \pm 1i" />
            សិន{" "}
          </div>
        ),
        content: (
          <div>
            ឧទាហរណ៍ <InlineMath math="z = \sqrt{6} + \sqrt{6}i" />{" "}
            <InlineMath math="\Rightarrow" />{" "}
            <InlineMath math="z = \sqrt{6}(1 + i)" /> <br />
          </div>
        ),
      },
      {
        title: (
          <div>
            ចាប់
            <InlineMath math="\sqrt{2}" />
            ជាកត្តាម្ដងទៀតដើម្បីចូលករណីមុំពិសេស
          </div>
        ),
        content: (
          <div>
            ឧទាហរណ៍ <InlineMath math="z = \sqrt{6} + \sqrt{6}i" />
            <br />
            <InlineMath math="= \sqrt{6}(1 + i)" /> <br />
            <InlineMath math="= \sqrt{6}\cdot\sqrt{2}(\frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}}i)" />{" "}
            <br />
            <InlineMath math="= \sqrt{12}(\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i)" />{" "}
            <br />
            <InlineMath math="= 2\sqrt{3}(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4})" />{" "}
            <br />
          </div>
        ),
      },
    ],
  },
  {
    type: "example",
    question: (
      <div>
        ករណី a និង​ b មានតម្លៃដូចគ្នា​ ឬ​មានតម្លៃមួយមាន{" "}
        <InlineMath math="\sqrt{3}" />​ ដូចជា{" "}
        <InlineMath math="z = 2 + 2\sqrt{3}i" /> ឬ{" "}
        <InlineMath math="z = \sqrt{3} - i" />
      </div>
    ),
    steps: [
      {
        title: (
          <div>
            ត្រូវចាប់កត្តាទាំងនោះអោយចូលទម្រង់{" "}
            <InlineMath math="z = 1 \pm \sqrt{3}i" /> ឬ{" "}
            <InlineMath math="z = \sqrt{3}​ \pm i" />​ សិន{" "}
          </div>
        ),
        content: (
          <div>
            ឧទាហរណ៍ <InlineMath math="z = 2 +2\sqrt{3}i" />{" "}
            <InlineMath math="\Rightarrow" />{" "}
            <InlineMath math="z = 2(1+\sqrt{3}i)" /> <br />
          </div>
        ),
      },
      {
        title: (
          <div>
            ចាប់ <InlineMath math="2" /> ជាកត្តាម្ដងទៀតដើម្បីចូលករណីមុំពិសេស
          </div>
        ),
        content: (
          <div>
            ឧទាហរណ៍ <InlineMath math="z = 2 + 2\sqrt{3}i" />
            <br />
            <InlineMath math="= 2(1+\sqrt{3}i)" /> <br />
            <InlineMath math="= 2\cdot 2(\frac{1}{2} + \frac{\sqrt{3}}{2}i)" />{" "}
            <br />
            <InlineMath math="= 4(\frac{1}{2} + \frac{\sqrt{3}}{2}i)" /> <br />
            <InlineMath math="= 4(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3})" />{" "}
            <br />
          </div>
        ),
      },
    ],
  },
  {
    type: "warning",
    content: (
      <div>
        ទម្រង់ត្រីកោណមាត្រ <InlineMath math=" z = (\cos\theta + i\sin\theta)" />{" "}
        មិនអាចមានទម្រង់ <InlineMath math=" z = (\cos\theta - i\sin\theta)" /> ឬ{" "}
        <InlineMath math=" z = (\sin\theta + i\ cos\theta)" /> បានទេ
        <br />
        បើសិនជាករណីមានត្រូវតែប្ដូរទៅជាទម្រង់ដើមដាច់ខាត
        <br />
      </div>
    ),
  },
  {
    type: "tip",
    title: (
      <div>
        ករណី <InlineMath math=" z = (\sin\theta + i\ cos\theta)" />
      </div>
    ),
    content: (
      <div>
        យើងត្រូវបំលែងទៅទម្រង់ដើមតាមរូបមន្ត <br />
        <InlineMath math="\sin\theta = \cos(\frac{\pi}{2} - \theta)" /> <br />
        <InlineMath math="\cos\theta = \sin(\frac{\pi}{2} - \theta)" /> <br />
        <div>
          <InlineMath math="\Rightarrow" />
          <InlineMath math=" z = (\sin\theta + i\ cos\theta)" />
          <br /> <InlineMath math="\Rightarrow" />{" "}
          <InlineMath math=" z = (\cos(\frac{\pi}{2} - \theta) + i\sin(\frac{\pi}{2} - \theta))" />{" "}
          <br />
        </div>
      </div>
    ),
  },
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes (renderable)
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const TrigonometricForm = () => {
  return <ContentRendererV3 content={restoredContent} />;
};

export default TrigonometricForm;
