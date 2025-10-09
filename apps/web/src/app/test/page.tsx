import { InlineMath } from 'react-katex'
import { serializeContent, deserializeContent } from '@/components/pages/docs/utils/ContentSerializer'
import { TipBox } from '@/components/pages/docs/boxes/TipBox'
import { DefinitionBox } from '@/components/pages/docs/boxes/DefinitionBox'
import { ExampleBox } from '@/components/pages/docs/boxes/ExampleBox'
import { GraphBox } from '@/components/pages/docs/boxes/GraphBox'
import { ThreeDBox } from '@/components/pages/docs/boxes/3DBox'

export default function SerializationTest() {
    // Test 1: Simple content with KaTeX
    const simpleContent = (
        <div>
            i ហៅថាតម្លៃនិមិត្ត ដែល <InlineMath math="i^2 = -1" /> និង <InlineMath math="i = \sqrt{-1}" />
            <br />
            សំណុំចំនួនកុំផ្លិចតាងដោយ​​ C
        </div>
    )

    // Test 2: Complete TipBox component
    const tipBoxComponent = (
        <TipBox
            title="ចំណាំសំខាន់!"
            content={
                <div>
                    i ហៅថាតម្លៃនិមិត្ត ដែល <InlineMath math="i^2 = -1" />
                </div>
            }
        />
    )

    // Test 3: DefinitionBox component
    const definitionBoxComponent = (
        <DefinitionBox
            title="កុំផ្លិច"
            content={
                <div>
                    ចំនួនកុំផ្លិច គឺជាចំនួនដែលមានរាង <InlineMath math="z = a + bi" />
                </div>
            }
        />
    )

    // Test 4: ExampleBox with complex structure
    const exampleBoxComponent = (
        <ExampleBox
            question={<span>គណនារកតម្លៃនៃ <InlineMath math="(2+3i) + (1-2i)" /></span>}
            steps={[
                { title: "បូកផ្នែកពិត", content: <InlineMath math="2 + 1 = 3" /> },
                { title: "បូកផ្នែកនិមិត្ត", content: <InlineMath math="3i + (-2i) = i" /> }
            ]}
            answer={<InlineMath math="3 + i" />}
        />
    )

    // Test 5: GraphBox with expressions
    const graphBoxComponent = (
        <GraphBox
            expressions={[
                { id: '1', latex: 'y=x^2', color: '#2563eb' },
                { id: '2', latex: 'y=2x+1', color: '#dc2626' }
            ]}
        />
    )

    const threeDBoxComponent = (
        <ThreeDBox
            src="/test.glb"
            scale={0.1}
            target={[0, 0, 0]}
            title="រូបភាព 3D"
            content={<InlineMath math="x^2 + y^2 + z^2 = 1" />}
            // canvasBackground={<div>រូបភាព 3D</div>}
            canvasBackgroundColor="black"
            // threeDText={[{ content: 'x', position: [0, 0, 0], fontSize: 0.1, color: '#2563eb' }]}
            // twoDText={[{ content: 'x', position: [0, 0, 0], fontSize: 0.1, color: '#2563eb' }]}
            height={500}
        />
    )

    // Serialize all tests
    const tests = [
        { name: "Simple Content", component: simpleContent },
        { name: "TipBox Component", component: tipBoxComponent },
        { name: "DefinitionBox Component", component: definitionBoxComponent },
        { name: "ExampleBox Component", component: exampleBoxComponent },
        { name: "GraphBox Component", component: graphBoxComponent },
        { name: "ThreeDBox Component", component: threeDBoxComponent },
    ]

    return (
        <div className="p-20 space-y-12">
            <h1 className="text-3xl font-bold mb-8">Content Serialization Test</h1>

            {tests.map((test, index) => {
                try {
                    const serialized = serializeContent(test.component)
                    const deserialized = deserializeContent(serialized)

                    return (
                        <div key={index} className="border-t pt-8">
                            <h2 className="text-2xl font-bold mb-4">{test.name}</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Original:</h3>
                                    {test.component}
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Deserialized (from JSON):</h3>
                                    {deserialized}
                                </div>
                            </div>

                            <details className="mt-4">
                                <summary className="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                    Show JSON
                                </summary>
                                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-xs mt-2">
                                    {serialized}
                                </pre>
                            </details>
                        </div>
                    )
                } catch (error) {
                    return (
                        <div key={index} className="border-t pt-8 bg-red-50 p-4 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4 text-red-600">{test.name} - ERROR</h2>
                            <p className="text-red-700">
                                {error instanceof Error ? error.message : String(error)}
                            </p>
                            <details className="mt-4">
                                <summary className="cursor-pointer text-sm font-medium text-red-600">
                                    Show Stack
                                </summary>
                                <pre className="bg-red-100 p-4 rounded-lg overflow-auto text-xs mt-2">
                                    {error instanceof Error ? error.stack : String(error)}
                                </pre>
                            </details>
                        </div>
                    )
                }
            })}

            <div className="border-t pt-8">
                <h2 className="text-xl font-bold mb-4">Database Usage:</h2>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
                    {`// 1. Save to database
const content = (
  <TipBox 
    title="Example" 
    content={<div>Text with <InlineMath math="x^2" /></div>}
  />
);
const jsonString = serializeContent(content);
await db.lessons.insert({ 
  id: "lesson-1", 
  content: jsonString 
});

// 2. Load from database
const lesson = await db.lessons.findOne({ id: "lesson-1" });
const content = deserializeContent(lesson.content);

// 3. Render
return <div>{content}</div>;`}
                </pre>
            </div>
        </div>
    )
}
