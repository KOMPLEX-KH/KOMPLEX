import { TopicContent } from "@/types/docs/topic";

import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
const TOPIC_CONTENT: TopicContent = {
    imageExplanation: [
        {
            title: "រូបភាពនៃវដ្តជីវិតនៃស៊ីមណូស្ពែម",
            src: "/docs/grade-12/biology/gymnosperms/lifecycle.png",
            imageAlt: "ដ្យាក្រាមវដ្តជីវិតស៊ីមណូស្ពៃម",
            explanation:
                <div className="space-y-1">
                    <div className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">+</span>
                        <span><strong>វដ្តជីវិតស៊ីមណូស្ពែមចែកជាពីរដំណាក់កាល៖</strong></span>
                    </div>

                    <div className="ml-6 space-y-3">
                        <div className="flex items-start">
                            <span className="text-blue-600 font-bold mr-2">•</span>
                            <div>
                                <span><strong>ដំណាក់កាលទី១:</strong> ចាប់ផ្តើមពីការលូតលាស់របស់អំប្រ៊ីយ៉ុងនៅក្នុងគ្រាប់។ អំប្រ៊ីយ៉ុងលូតលាស់បានជាស្បៃរ៉ូភីត ដោយក្រោយមកបង្កើតជាកោនញី និងកោនឈ្មោល។ កោនញីមានអូវុលដែលផ្ទុកមេហ្កាស្បៃរ៉ូស៊ីត ឯកោនឈ្មោល មានផ្ទុកមីក្រូស្ស៊ីរ៉ូស៊ីត។</span>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="text-blue-600 font-bold mr-2">•</span>
                            <div>
                                <span><strong>ដំណាក់កាលទី២:</strong> ចាប់ផ្តើមពីមីក្រូស្ស៊ីរ៉ូស៊ីត និងមេហ្កាស្បៃរ៉ូស៊ីត ធ្វើមេយ៉ូស រហូតបង្កើតបានជាស្ពៃម៉ាតូ សូអ៊ុត និងអូអូស្វ៊ែសម្រាប់បង្កកំណើត។</span>
                            </div>
                        </div>
                    </div>
                </div>

        }
    ],
}
export default function GymnospermLifeCycle() {
    return (
        <>
            {TOPIC_CONTENT.imageExplanation &&
                Array.isArray(TOPIC_CONTENT.imageExplanation) &&
                TOPIC_CONTENT.imageExplanation.map((image: ImageBoxProps, index: number) => (
                    <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
                ))}
        </>
    )
}