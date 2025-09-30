import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import { InlineMath } from "react-katex";

const FunctionPractice = () => {
	const questions = [
		{
			id: "q1",
			question: (
				<>
					តើតម្លៃ <InlineMath math="f(2)" /> ស្មើប៉ុន្មាន ប្រសិនបើ <InlineMath math="f(x) = 3x + 1" />
				</>
			),
			options: ["5", "6", "7", "8"],
			correctAnswer: 2,
		},
		{
			id: "q2",
			question: (
				<>
					អនុគមន៍ <InlineMath math="f(x) = x^2 - 4" /> មានតម្លៃ <InlineMath math="f(3)" /> យ៉ាងដូចម្តេច?
				</>
			),
			options: ["5", "9", "13", "0"],
			correctAnswer: 0,
		},
		{
			id: "q3",
			question: (
				<>
					តើអ្វីទៅជាប្លង់សិក្សារបស់អនុគមន៍ <InlineMath math="f(x) = x^2" />?
				</>
			),
			options: ["បន្ទាត់ផ្តេក", "បន្ទាត់កោង", "បន្ទាត់បញ្ឈរ", "បន្ទាត់ទ្រេត"],
			correctAnswer: 1,
		},
		{
			id: "q4",
			question: (
				<>
					តើតម្លៃ <InlineMath math="f(-1)" /> ស្មើប៉ុន្មាន ប្រសិនបើ <InlineMath math="f(x) = 2x + 3" />
				</>
			),
			options: ["1", "0", "-1", "-2"],
			correctAnswer: 0,
		},
		{
			id: "q5",
			question: (
				<>
					តម្លៃ <InlineMath math="f(0)" /> របស់អនុគមន៍ <InlineMath math="f(x) = 5" /> គឺប៉ុន្មាន?
				</>
			),
			options: ["0", "1", "5", "គ្មាន"],
			correctAnswer: 2,
		},
		{
			id: "q6",
			question: (
				<>
					តើតម្លៃ <InlineMath math="f(4)" /> ស្មើប៉ុន្មាន ប្រសិនបើ <InlineMath math="f(x) = x^3" />
				</>
			),
			options: ["16", "64", "12", "81"],
			correctAnswer: 1,
		},
		{
			id: "q7",
			question: (
				<>
					តើអនុគមន៍ <InlineMath math="f(x) = 2x" /> មានសមីការជា?
				</>
			),
			options: ["អនុគមន៍បន្ទាត់ផ្តេក", "អនុគមន៍បន្ទាត់ទ្រេត", "អនុគមន៍អិចស្ប៉ូណង់ស្យែល", "អនុគមន៍លីនេអ៊ែរ"],
			correctAnswer: 3,
		},
		{
			id: "q8",
			question: (
				<>
					តើតម្លៃ <InlineMath math="f(-2)" /> ស្មើប៉ុន្មាន ប្រសិនបើ <InlineMath math="f(x) = x^2 + 1" />
				</>
			),
			options: ["3", "5", "4", "2"],
			correctAnswer: 0,
		},
		{
			id: "q9",
			question: (
				<>
					តើដែនកំណត់ (Domain) នៃអនុគមន៍ <InlineMath math="f(x) = \sqrt{x}" /> គឺដូចម្តេច?
				</>
			),
			options: ["គ្រប់ចំនួនពិត", "<InlineMath math='x geq 0' />", "<InlineMath math='x > 0' />", "គ្មាន"],
			correctAnswer: 1,
		},
		{
			id: "q10",
			question: (
				<>
					តើតម្លៃ <InlineMath math="f(1)" /> របស់អនុគមន៍ <InlineMath math="f(x) = \frac{1}{x}" /> គឺប៉ុន្មាន?
				</>
			),
			options: ["1", "0", "មិនកំណត់", "-1"],
			correctAnswer: 0,
		},
	];
	return (
		<>
			<ExerciseBox questions={questions} />
		</>
	);
};

export default FunctionPractice;
