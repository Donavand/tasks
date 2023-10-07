import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const handleChoiceChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedChoice(event.target.value);
    };
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleChoiceChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
