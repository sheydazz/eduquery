export const formatQuestion = (questionData) => {
	const {
		title,
		type,
		correctAnswer,
		options
	} = questionData;

	let questionItem;

	if (type === 'RADIO') {
		questionItem = {
			title: title || "Untitled Question",
			questionItem: {
				question: {
					grading: {
						pointValue: 1,
						correctAnswers: {
							answers: [{
								value: correctAnswer || "N"
							}]
						}
					},
					choiceQuestion: {
						type: "RADIO",
						options: options || [
							{ value: "N" },
							{ value: "N" },
							{ value: "N" },
							{ value: "N" }
						]
					}
				}
			}
		};
	}
	return questionItem
}

export const formatformInfo = (formInfo) => {
	const {
		formTitle,
		formDescription,
	} = formInfo;
	const info = {
		title: formTitle,
		description: formDescription,
		documentTitle: formTitle
	}
	return info;
}
