import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };
    const isCorrect = userAnswer === expectedAnswer;
    return (
        <div>
            <h3>Check Answer</h3>
            {/* Step 4: Input field for user's answer */}
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Enter your answer"
            />
            {/* Step 6: Display correct/incorrect message */}
            {isCorrect ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
