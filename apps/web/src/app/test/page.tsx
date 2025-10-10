import { InlineMath } from 'react-katex'
import { serializeContent, deserializeContent } from '@/components/pages/docs/utils/ContentSerializer'
import { TipBox } from '@/components/pages/docs/boxes/TipBox'
import { DefinitionBox } from '@/components/pages/docs/boxes/DefinitionBox'
import { ExampleBox } from '@/components/pages/docs/boxes/ExampleBox'
import { GraphBox } from '@/components/pages/docs/boxes/GraphBox'
import TestingRenderer from '@/lessons/components/grade-12/math/differential-equation/test'

export default function SerializationTest() {

    return (
        <TestingRenderer></TestingRenderer>
    )
}
