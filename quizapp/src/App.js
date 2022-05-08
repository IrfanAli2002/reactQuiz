import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'HTML stands for?',
			answerOptions: [
				{ answerText: 'hyperlinks and markup language', isCorrect: false },
				{ answerText: 'hyperlink text markup language', isCorrect: false },
				{ answerText: 'hyper text markup language', isCorrect: true },
				{ answerText: 'homelink markup language', isCorrect: false },
			],
		},
		{
			questionText: 'Choose the correct HTML element to define emphasized text?',
			answerOptions: [
				{ answerText: '<i>', isCorrect: false },
				{ answerText: '<em>', isCorrect: true },
				{ answerText: '<bold>', isCorrect: false },
				{ answerText: '<e>', isCorrect: false },
			],
		},
		{
			questionText: 'Choose the correct HTML element for the largest heading?',
			answerOptions: [
				{ answerText: '<h1>', isCorrect: true },
				{ answerText: '<head>', isCorrect: false },
				{ answerText: '<h3>', isCorrect: false },
				{ answerText: '<body>', isCorrect: false },
			],
		},
		{
			questionText: 'What is the correct HTML element for inserting a line break?',
			answerOptions: [
				{ answerText: '<break>', isCorrect: false },
				{ answerText: '<hr>', isCorrect: false },
				{ answerText: '<iframe>', isCorrect: false },
				{ answerText: '<br>', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}