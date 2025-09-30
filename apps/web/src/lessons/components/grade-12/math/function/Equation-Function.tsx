import { TopicContent } from "@/types/docs/topic";
import { InlineMath } from "react-katex";

const TOPIC_CONTENT: TopicContent = {
	definition: {
		title: "១១. ភាពផត ប៉ោង និង ចំណុចរបត់",
		content: (
			<div className="space-y-6">
				<div className="space-y-4 bg-green-50 ">
					<div className="font-semibold text-lg"> អនុគមន៍ផត-ប៉ោង</div>
					<div className="space-y-3 ">
						<div className="flex items-start gap-2">
							<span className="text-black">♦</span>
							<span>បើគ្រប់ <InlineMath math="x \in I" /> គេមាន <InlineMath math="f''(x) < 0" /> នោះគេថា <InlineMath math="f" /> ជាអនុគមន៍ <strong>ប៉ោង</strong> (Convex function) លើចន្លោះ <InlineMath math="I" />។</span>
						</div>
						<div className="flex items-start gap-2">
							<span className="text-black">♦</span>
							<span>បើគ្រប់ <InlineMath math="x \in I" /> គេមាន <InlineMath math="f''(x) > 0" /> នោះគេថា <InlineMath math="f" /> ជាអនុគមន៍ <strong>ផត</strong> (Concave function) លើចន្លោះ <InlineMath math="I" />។</span>
						</div>
					</div>
				</div>

				<div className=" border-t pt-3 mb-5 bg-blue-50">
					<div className="font-semibold text-lg">ខ ចំណុចរបត់នៃខ្សែកោង</div>
					<div className="space-y-3">
						<div className="flex items-start gap-2">
							<span className="text-black">♦</span>
							<span>គេថាចំណុច <InlineMath math="I(x_0, y_0)" /> ជាចំណុចរបត់នៃខ្សែកោងតាងអនុគមន៍ <InlineMath math="y = f(x)" /> កាលណាខ្សែកោងប៉ោង(ឬផត) នៅលើ <InlineMath math="[a, x_0]" /> ហើយផត (ឬប៉ោង)នៅលើ <InlineMath math="[x_0, b]" />។</span>
						</div>

						<div className="mt-4">
							<div className="font-semibold mb-2">របៀបរកចំណុចរបត់របស់ខ្សែកោងតាង <InlineMath math="y = f(x)" /> គេត្រូវ៖</div>
							<div className="space-y-2 ml-4">
								<div className="flex items-start gap-2">
									<span className="text-green-600">☞</span>
									<span>គណនាដេរីវេទីពីរ <InlineMath math="y'' = f''(x)" /></span>
								</div>
								<div className="flex items-start gap-2">
									<span className="text-green-600">☞</span>
									<span>ដោះស្រាយសមីការ <InlineMath math="f''(x) = 0" /></span>
								</div>
								<div className="flex items-start gap-2">
									<span className="text-green-600">☞</span>
									<span>សិក្សាសញ្ញានៃ <InlineMath math="f''(x)" /></span>
								</div>
								<div className="flex items-start gap-2">
									<span className="text-red-600">-</span>
									<span>បើ <InlineMath math="f''(x)" /> ប្ដូរសញ្ញានៅសងខាងនៃឬស <InlineMath math="x_0" /> នោះខ្សែកោង មានចំណុចរបត់ <InlineMath math="I(x_0, f(x_0))" />។</span>
								</div>
								<div className="flex items-start gap-2">
									<span className="text-red-600">-</span>
									<span>បើ <InlineMath math="f''(x)" /> មិនប្ដូរសញ្ញានោះខ្សែកោងគ្មានចំណុចរបត់ទេ។</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},

	tip: {
		title: "២. ទីតាំងនៃខ្សែកោងធៀបនឹងអាស៊ីមតូត",
		content: (
			<div>
				<div className="border-t pt-3 space-y-2 mb-5 bg-pink-50">
					<div className="font-semibold text-lg">២.១. ទីតាំងនៃខ្សែកោងធៀបនឹងអាស៊ីមតូតដេក</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /> និងបន្ទាត់ <InlineMath math="(d): y = b" /> ជាអាស៊ីមតូតដេកនៃក្រាប <InlineMath math="(C)" />។</div>
						<div>ដើម្បីសិក្សាទីតាំងនៃខ្សែកោង<InlineMath math="(C)" />ធៀបទៅនឹងអាស៊ីមតូតដេករបស់វាគេត្រូវ៖</div>

						<div className="space-y-2 ml-4">
							<div className="flex items-start gap-2">
								<span className="text-black">◆</span>
								<span>គណនាផលដក <InlineMath math="f(x) - y_d = f(x) - b" /> រួចសិក្សាសញ្ញារបស់វា។</span>
							</div>
						</div>

						<div>
							<div className="font-semibold ">សន្និដ្ឋានលទ្ឋផល៖</div>
							<div className="space-y-2 ml-4">
								<div className="flex items-start gap-2">
									<span className="text-black">•</span>
									<span>បើ <InlineMath math="f(x) - y_d < 0" /> នោះខ្សែកោង <InlineMath math="(C)" /> ស្ថិតនៅខាងក្រោមបន្ទាត់<InlineMath math="(d)" />។</span>
								</div>
								<div className="flex items-start gap-2">
									<span className="text-black">•</span>
									<span>បើ <InlineMath math="f(x) - y_d = 0" /> នោះខ្សែកោង <InlineMath math="(C)" /> ប្រសព្វជាមួយបន្ទាត់ <InlineMath math="(d)" />។</span>
								</div>
								<div className="flex items-start gap-2">
									<span className="text-black">•</span>
									<span>បើ <InlineMath math="f(x) - y_d > 0" /> នោះខ្សែកោង <InlineMath math="(C)" /> ស្ថិតនៅខាងលើបន្ទាត់<InlineMath math="(d)" />។</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t pt-3 mb-5 space-y-4 bg-amber-50">
					<div className="font-semibold text-lg">២.២. ទីតាំងនៃខ្សែកោងធៀបនឹងអាស៊ីមតូតទ្រេត</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /> និងបន្ទាត់ <InlineMath math="(d): y = ax + b" /> ជាអាស៊ីមតូតទ្រេតនៃក្រាប <InlineMath math="(C)" />។</div>
						<div>ដើម្បីសិក្សាទីតាំងនៃខ្សែកោង <InlineMath math="(C)" />ធៀបទៅនឹងអាស៊ីមតូតទ្រេតរបស់វាគេត្រូវ៖</div>

						<div className="space-y-2 ml-4">
							<div className="flex items-start gap-2">
								<span className="text-black">◆</span>
								<span>គណនាផលដក <InlineMath math="f(x) - y_d = f(x) - (ax + b)" /> រួចសិក្សាសញ្ញារបស់វា។</span>
							</div>
						</div>

						<div>
							<div className="font-semibold mb-2">សន្និដ្ឋានលទ្ឋផល៖</div>
							<div className="space-y-2 ml-4">
								<div className="flex items-start gap-2">
									<span className="text-black">•</span>
									<span>បើ <InlineMath math="f(x) - y_d < 0" /> នោះខ្សែកោង <InlineMath math="(C)" /> ស្ថិតនៅខាងក្រោមបន្ទាត់<InlineMath math="(d)" />។</span>
								</div>
								<div className="flex items-start gap-2">
									<span className="text-black">•</span>
									<span>បើ <InlineMath math="f(x) - y_d = 0" /> នោះខ្សែកោង <InlineMath math="(C)" /> ប្រសព្វជាមួយបន្ទាត់ <InlineMath math="(d)" />។</span>
								</div>
								<div className="flex items-start gap-2">
									<span className="text-black">•</span>
									<span>បើ <InlineMath math="f(x) - y_d > 0" /> នោះខ្សែកោង <InlineMath math="(C)" /> ស្ថិតនៅខាងលើបន្ទាត់<InlineMath math="(d)" />។</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},

	example: {
		question: "៣. ភាពឆ្លុះនៃខ្សែកោង",
		content: (
			<div className="space-y-6">
				<div className="space-y-4 border-t pt-3 bg-blue-50 mb-5">
					<div className="font-semibold text-lg">៣.១. ផ្ចិតឆ្លុះ</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /> និងចំណុច <InlineMath math="I(a,b)" /></div>
						<div>ដើម្បីស្រាយបញ្ជាក់ថាចំណុច <InlineMath math="I(a,b)" /> ជាផ្ចិតឆ្លុះនៃខ្សែកោង<InlineMath math="(C)" /> គេត្រូវស្រាយឲ្យឃើញថាចំពោះគ្រប់ <InlineMath math="x_0 \in D_f" />៖</div>
						<div className="text-center text-lg font-semibold text-black">
							<InlineMath math="f(x_0) + f(2a - x_0) = 2b" />
						</div>
					</div>
				</div>

				<div className="space-y-2 border-t pt-3 mb-5 bg-green-50">
					<div className="font-semibold text-lg">៣.២. អ័ក្សឆ្លុះ</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /> និងបន្ទាត់ <InlineMath math="(d): x = a" /></div>
						<div>ដើម្បីស្រាយបញ្ជាក់ថាបន្ទាត់<InlineMath math="(d)" /> ជាអ័ក្សឆ្លុះនៃខ្សែកោង<InlineMath math="(C)" /> គេត្រូវស្រាយឲ្យឃើញថាចំពោះគ្រប់ <InlineMath math="x_0 \in D_f" />៖</div>
						<div className="text-center text-lg font-semibold text-black">
							<InlineMath math="f(x_0) = f(2a - x_0)" />
						</div>
					</div>
				</div>
			</div>
		)
	},

	example2: {
		question: "៥. សមីការបន្ទាត់ប៉ះ",
		content: (
			<div className="space-y-6">
				<div className="space-y-4 border-t pt-3 mb-5 bg-pink-50">
					<div className="font-semibold text-lg">៤.១. សមីការបន្ទាត់ប៉ះទៅនឹងខ្សែកោងត្រង់ចំណុចមួយ</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /></div>
						<div>ដើម្បីរកសមីការនៃបន្ទាត់<InlineMath math="(T)" /> ដែលប៉ះទៅនឹងក្រាប<InlineMath math="(C)" /> ត្រង់ចំណុចមានអាប់ស៊ីស <InlineMath math="x = x_0" /> គេត្រូវ៖</div>

						<div className="space-y-2 ml-4">
							<div className="flex items-start gap-2">
								<span className="text-black">•</span>
								<span>ប្រើរូបមន្តសមីការបន្ទាត់ប៉ះ <InlineMath math="(T): y = f'(x_0)(x - x_0) + y_0" /></span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-black">•</span>
								<span>គណនាដេរីវេ <InlineMath math="y' = f'(x)" /> រួចទាញរក <InlineMath math="f'(x_0)" /></span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-black">•</span>
								<span>គណនាអរដោនេនៃចំណុចប៉ះគឺ <InlineMath math="y_0 = f(x_0)" /></span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-black">•</span>
								<span>យកតម្លៃ <InlineMath math="x_0, y_0" /> និង <InlineMath math="f'(x_0)" /> ជំនួសក្នុងរូបមន្តសមីការខាងលើ។</span>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4 border-t pt-3 mb-5 bg-amber-50">
					<div className="font-semibold text-lg">៤.២. សមីការបន្ទាត់ប៉ះទៅខ្សែកោងហើយកែងនឹងបន្ទាត់មួយ</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /></div>
						<div>ដើម្បីរកសមីការនៃបន្ទាត់<InlineMath math="(T)" /> ប៉ះទៅនិងខ្សែកោង<InlineMath math="(C)" /> ហើយកែងនឹង បន្ទាត់ <InlineMath math="(d)" /> មានសមីការ: <InlineMath math="y = ax + b" /> គេត្រូវ៖</div>

						<div className="space-y-2 ml-4">
							<div className="flex items-start gap-2">
								<span className="text-black">•</span>
								<span>តាង <InlineMath math="M_0(x_0, y_0)" /> ជាចំណុចប៉ះរវាងបន្ទាត់ <InlineMath math="(T)" /> និងខ្សែកោង <InlineMath math="(C)" /></span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-black">•</span>
								<span>សមីការបន្ទាត់ប៉ះអាចសរសេរតាមរូបមន្ត <InlineMath math="(T): y = f'(x_0)(x - x_0) + y_0" /></span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-black">•</span>
								<span>ដោយបន្ទាត់ <InlineMath math="(T) \perp (d): y = ax + b" /> នោះគេបាន <InlineMath math="a \times f'(x_0) = -1" /></span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-black">•</span>
								<span>រួចដោះស្រាយរក <InlineMath math="x_0" /> បន្ទាប់មកយកតម្លៃនៃ<InlineMath math="x_0" /> ដែលបានរកឃើញទៅជំនួស ក្នុងសមីការនៃ <InlineMath math="(T)" /> នោះគេទទួលបានសមីការនៃបន្ទាត់ប៉ះដែលត្រូវរក។</span>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4 mb-5 border-t pt-3 bg-green-50">
					<div className="font-semibold text-lg">៤.៣. លក្ខខណ្ឌបន្ទាត់និងខ្សែកោងប៉ះគ្នាត្រង់ចំណុចមួយ</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /> និងបន្ទាត់ <InlineMath math="(d): y = \alpha x + \beta" /></div>
						<div>ខ្សែកោង <InlineMath math="(C)" /> និងបន្ទាត់ <InlineMath math="(d)" /> ប៉ះគ្នាត្រង់ចំណុច <InlineMath math="M_0(x_0, y_0)" /> លុះត្រាតែ៖</div>

						<div className="space-y-2 ml-4">
							<div className="flex items-start gap-2">
								<span className="text-black">♦</span>
								<span>
									<InlineMath math="\begin{cases}
									f'(x_0) = \alpha \\
									f(x_0) = \alpha x_0 + \beta = y_0
									\end{cases}" /></span>

							</div>

						</div>
					</div>
				</div>
			</div>
		)
	},

	exercise: {
		questions: [
			{
				id: "1",
				question: "៦. កូអរដោនេចំណុចប្រសព្វ",
				options: [
					"៦.១. កូអរដោនេចំណុចប្រសព្វរវាងខ្សែកោងជាមួយអ័ក្សកូអរដោនេ (xoy)",
					"៦.២. កូអរដោនេនៃចំណុចប្រសព្វរវាងខ្សែកោងនិងបន្ទាត់"
				],
				correctAnswer: 0
			}
		]
	},

	custom: {
		title: "៦. កូអរដោនេចំណុចប្រសព្វ",
		content: (
			<div className="space-y-6">
				<div className="space-y-4 border-t pt-3 mb-5 bg-pink-50">
					<div className="font-semibold text-lg">៥. កូអរដោនេចំណុចប្រសព្វរវាងខ្សែកោងជាមួយអ័ក្សកូអរដោនេ (xoy)</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /></div>

						<div className="space-y-2 ml-4">
							<div className="flex items-start gap-2">
								<span className="text-black">♦</span>
								<span>សម្រាប់ចំណុចប្រសព្វរវាង <InlineMath math="(C)" /> និងអ័ក្ស <InlineMath math="x'ox" />៖ <InlineMath math="y = f(x) = 0" /></span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-black">♦</span>
								<span>សម្រាប់ចំណុចប្រសព្វរវាង <InlineMath math="(C)" /> និងអ័ក្ស <InlineMath math="y'oy" />៖ <InlineMath math="x = 0" /> និង <InlineMath math="y = f(0)" /></span>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4 border-t pt-3 bg-blue-50">
					<div className="font-semibold text-lg">៥.១. កូអរដោនេនៃចំណុចប្រសព្វរវាងខ្សែកោងនិងបន្ទាត់</div>
					<div className="space-y-3">
						<div>ឧបមាថាគេមានខ្សែកោង <InlineMath math="(C): y = f(x)" /> និងបន្ទាត់ <InlineMath math="(d): y = \alpha x + \beta" /></div>
						<div>ដើម្បីរកចំណុចប្រសព្វរវាង (C) និង (d) គេត្រូវ៖</div>

						<div className="space-y-2 ml-4">
							<div className="flex items-start gap-2">
								<span className="text-black">♦</span>
								<span>សរសេរសមីការអាប់ស៊ីសដោយផ្ទឹមតម្លៃ <InlineMath math="y" /> គឺ <InlineMath math="f(x) = \alpha x + \beta" /></span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-black">♦</span>
								<span>ដោះស្រាយសមីការខាងលើរកអាប់ស៊ីស <InlineMath math="x" /> រួចទាញរកអរដោនេ <InlineMath math="y = \alpha x + \beta" /></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default function EquationFunction() {
	return (
		<>
			{TOPIC_CONTENT.definition?.content}
			{TOPIC_CONTENT.tip?.content}
			{TOPIC_CONTENT.example?.content}
			{TOPIC_CONTENT.example2?.content}
			{TOPIC_CONTENT.custom?.content}
		</>
	);
}
