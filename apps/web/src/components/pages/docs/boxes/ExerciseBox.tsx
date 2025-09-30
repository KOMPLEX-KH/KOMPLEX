"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, BookAIcon } from "lucide-react";
import { ExerciseQuestion } from "@/types/docs/topic";
import { InlineMath } from "react-katex";

export interface ExerciseBoxProps {
	questions: ExerciseQuestion[];
}

export default function ExerciseBox({ questions }: ExerciseBoxProps) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [showResult, setShowResult] = useState(false);

	const currentQuestion = questions[currentQuestionIndex];

	const handleAnswerSelect = (optionIndex: number) => {
		setSelectedAnswer(optionIndex);
		setShowResult(true);
	};

	const nextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer(null);
			setShowResult(false);
		}
	};

	const prevQuestion = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
			setSelectedAnswer(null);
			setShowResult(false);
		}
	};

	const goToQuestion = (index: number) => {
		setCurrentQuestionIndex(index);
		setSelectedAnswer(null);
		setShowResult(false);
	};

	return (
		<div className="bg-white/95 backdrop-blur-sm border-2 border-indigo-500/20 rounded-3xl p-6 my-6 shadow-lg shadow-indigo-500/15">
			{/* Header */}
			<div className="flex items-center justify-between mb-6 pb-4 border-b border-indigo-500/20">
				<div className="text-indigo-600 font-semibold text-lg flex gap-2 items-center">
					<BookAIcon className="text-indigo-600" />
					លំហាត់អនុវត្តន៍
				</div>
				<div className="text-gray-600 text-sm">
					សំណួរ {currentQuestionIndex + 1}/{questions.length}
				</div>
			</div>

			{/* Question */}
			<div className="mb-6">
				<h4 className="text-gray-800 font-semibold text-lg mb-4">{currentQuestion.question}</h4>

				{/* Options */}
				<div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
					{currentQuestion.options.map((option, index) => {
						const isSelected = selectedAnswer === index;
						const isCorrectAnswer = index === currentQuestion.correctAnswer;
						const showCorrect = showResult && isCorrectAnswer;
						const showIncorrect = showResult && isSelected && !isCorrectAnswer;
						const showCorrectAnswer = showResult && isCorrectAnswer && !isSelected;

						return (
							<button
								key={index}
								onClick={() => handleAnswerSelect(index)}
								disabled={showResult}
								className={`w-full text-left p-4 rounded-full border-2 border-gray-200 transition-all duration-300 font-medium ${isSelected && !showResult
									? "border-indigo-500 bg-indigo-50/80 text-indigo-700"
									: !showResult
										? "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/40 text-gray-700"
										: ""
									} ${showCorrect ? "border-green-500 bg-green-50/80 text-green-700" : ""} ${showIncorrect ? "border-red-500 bg-red-50/80 text-red-700" : ""
									} ${showCorrectAnswer ? "border-green-500 bg-green-50/60 text-green-700" : ""}`}
							>
								<div className="flex items-center gap-3">
									<span className="text-lg font-semibold">
										{String.fromCharCode(0x1780 + index)} {/* Khmer letters: ក, ខ, គ, ឃ */}
									</span>
									<span>
										{typeof option === "string" &&
											(option.startsWith("\\") || option.includes("{")) ? (
											<InlineMath math={option} />
										) : (
											option
										)}
									</span>
									{showResult && (
										<div className="ml-auto">
											{showCorrect ? (
												<CheckCircle size={20} className="text-green-600" />
											) : showIncorrect ? (
												<XCircle size={20} className="text-red-600" />
											) : showCorrectAnswer ? (
												<CheckCircle size={20} className="text-green-600" />
											) : null}
										</div>
									)}
								</div>
							</button>
						);
					})}
				</div>
			</div>

			{/* Navigation */}
			<div className="flex items-center justify-between mt-6 pt-4 border-t border-indigo-500/20">
				<button
					onClick={prevQuestion}
					disabled={currentQuestionIndex === 0}
					className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-50 disabled:text-gray-400 text-white px-4 py-2 rounded-3xl transition-all duration-300"
				>
					<ChevronLeft size={18} />
					មុន
				</button>

				{/* Question Dots */}
				<div className="flex gap-2">
					{questions.map((_, index) => (
						<button
							key={index}
							onClick={() => goToQuestion(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentQuestionIndex ? "bg-indigo-600" : "bg-gray-100 hover:bg-gray-200"
								}`}
						/>
					))}
				</div>

				<button
					onClick={nextQuestion}
					disabled={currentQuestionIndex === questions.length - 1}
					className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-50 disabled:text-gray-400 text-white px-4 py-2 rounded-3xl transition-all duration-300"
				>
					បន្ទាប់
					<ChevronRight size={18} />
				</button>
			</div>
		</div>
	);
}
