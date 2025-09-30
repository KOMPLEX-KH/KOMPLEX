import React from 'react'
import { TopicContent } from '@/types/docs/topic'
import DefinitionBox from '@/components/pages/docs/boxes/DefinitionBox'
import TipBox from '@/components/pages/docs/boxes/TipBox'
import { BlockMath, InlineMath } from 'react-katex';
import ExampleBox from '@/components/pages/docs/boxes/ExampleBox';


const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "តើកុំផ្លិចជាអ្វី?",
    content: "ចំនួនកុំផ្លិច គឺជាចំនួនដែលមានរាង a + bi ដែល a និង b ជាចំនួនពិត "
  },
  tip: {
    title: "ចំណាំ !",
    content: <div>
      i ហៅថាតម្លៃនិមិត្ត ដែល <InlineMath math="i^2 = -1" /> និង <InlineMath math="i = \sqrt{-1}" />
      <br />
      សំណុំចំនួនកុំផ្លិចតាងដោយ​​ C
      <br />
      a ហៅថាផ្នែកពិតដែលគេកំណត់តាងដោយ​ <InlineMath math="Re(z) = a" />
      <br />
      b ហៅថាផ្នែកនិមិត្តដែលគេកំណត់តាងដោយ​ <InlineMath math="Im(z) = b" />
    </div>
  },

}

const TOPIC_CONTENT_OPOSITE: TopicContent = {
  definition: {
    title: "កុំផ្លិចឆ្លាស់ជាអ្វី?",
    content: <div>
      កុំផ្លិចឆ្លាស់​នៃកុំផ្លិចជាចំនួនកុំផ្លិចដែលតាងដោយ  : <InlineMath math="\bar{z} = a - bi" />
    </div>
  },
  tip: {
    title: "ទម្រង់នៃចំនួនកុំផ្លិចឆ្លាស់",
    content: <div className="text-center">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-start">
          <BlockMath math="\overline{(z_1 + z_2)} = \overline{z_1} + \overline{z_2}" />
        </div>
        <div className="flex justify-start">
          <BlockMath math="\overline{(z_1 - z_2)} = \overline{z_1} - \overline{z_2}" />
        </div>
        <div className="flex justify-start">
          <BlockMath math="\overline{(z_1 \cdot z_2)} = \overline{z_1} \cdot \overline{z_2}" />
        </div>
        <div className="flex justify-start">
          <BlockMath math="\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\overline{z_1}}{\overline{z_2}}" />
        </div>
      </div>
    </div>
  }
}
const TOPIC_CONTENT_COMPLEX: TopicContent = {
  definition: {
    title: "កុំផ្លិចពីរស្មើគ្នា",
    content: "កាលណាកុំផ្លិចពីរស្មើគ្នាគេបានផ្នែកពិតនៃកុំផ្លិចទាំងពីរស្មើគ្នា និងផ្នែកនិមិត្តនៃកុំផ្លិចទាំងពីរស្មើគ្នា"
  },
  tip: {
    title: "ជាទូទៅបើ",
    content: <div className='flex justify-start text-sm gap-2'>
      <BlockMath math={`
      A + i.B = a + i.b \\Leftrightarrow \\begin{cases}
      A = a \\\\
      B = b
      \\end{cases} \\text{ដែល} a, b, A, B \\in \\mathbb{R}
      `} />
    </div>
  },
  example: {
    question: <div className='flex flex-col gap-2'>
      <div className='flex flex-row text-[14px] gap-2'>
        <div>គេមានកុំផ្លិច <InlineMath math="z = (3a + 1) + i(2b - 5)" /> </div>
        <div>និង <InlineMath math="w = 7 + 3i" /> </div>
      </div>
      <div>ដែល ​a និង b ជាចំនួនពិត​​ ។</div>
      <div>កំណត់តម្លៃ a និង b ដើម្បីឲ្យ <InlineMath math="z = w" /></div>


    </div>,
    steps: [
      {
        title: "កំណត់ផ្នែកពិត និងផ្នែកនិមិត្ត",
        content: <div>
          ចំពោះ​ <InlineMath math="z = (3a + 1) + i(2b - 5)" /><br />
          ផ្នែកពិតគឺ <InlineMath math="3a + 1" /><br />
          ផ្នែកនិមិត្តគឺ <InlineMath math="2b - 5" /><br /><br />
          ចំពោះ​ <InlineMath math="w = 7 + 3i" /><br />
          ផ្នែកពិតគឺ <InlineMath math="7" /><br />
          ផ្នែកនិមិត្តគឺ <InlineMath math="3" /><br /><br />
        </div>
      },
      {
        title: "អោយកុំផ្លិចពីរស្មើគ្នា",
        content: <div className='flex justify-start gap-2'>
          <BlockMath math={`
          \\text{ ដោយ } z = w \\text{ គេបាន}
                  \\begin{cases}
                  3a + 1 = 7 \\\\
                  2b - 5 = 3 \\\\
                  \\end{cases}
                      `} />
        </div>
      },
      {
        title: "ទាញរកតម្លៃនៃ a និង b",
        content: <div className='flex justify-start text-sm gap-1'>
          <BlockMath math={`
                  \\begin{cases}
                  3a + 1 = 7 \\\\
                  2b - 5 = 3 \\\\
                  \\end{cases}
                  \\Leftrightarrow
                  \\begin{cases}
                  3a = 6 \\Leftrightarrow a = 2 \\\\
                  2b = 8 \\Leftrightarrow b = 4
                  \\end{cases}
                      `} />
        </div>
      }
    ],
    answer: <div>ដូច្នេះ <InlineMath math="a = 2" /> និង <InlineMath math="b = 4" /></div>
  },
}


const ComplexDefinition = () => {
  return (
    <>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
      )}

      {TOPIC_CONTENT.tip && (
        <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
      )}
      {TOPIC_CONTENT_OPOSITE.definition && (
        <DefinitionBox title={TOPIC_CONTENT_OPOSITE.definition.title} content={TOPIC_CONTENT_OPOSITE.definition.content} />
      )}
      {TOPIC_CONTENT_OPOSITE.tip && (
        <TipBox title={TOPIC_CONTENT_OPOSITE.tip.title} content={TOPIC_CONTENT_OPOSITE.tip.content} />
      )}

      {TOPIC_CONTENT_COMPLEX.definition && (
        <DefinitionBox title={TOPIC_CONTENT_COMPLEX.definition.title} content={TOPIC_CONTENT_COMPLEX.definition.content} />
      )}
      {TOPIC_CONTENT_COMPLEX.tip && (
        <TipBox title={TOPIC_CONTENT_COMPLEX.tip.title} content={TOPIC_CONTENT_COMPLEX.tip.content} />
      )}
      {TOPIC_CONTENT_COMPLEX.example && (
        <ExampleBox question={TOPIC_CONTENT_COMPLEX.example.question} steps={TOPIC_CONTENT_COMPLEX.example.steps} answer={TOPIC_CONTENT_COMPLEX.example.answer} />
      )}
    </>
  )
}

export default ComplexDefinition
