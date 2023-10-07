import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };
    const handleGainAttempt = () => {
        const requested = parseInt(requestedAttempts, 10);

        if (!isNaN(requested) && requested > 0) {
            setAttemptsLeft(attemptsLeft + requested);
            setRequestedAttempts("");
        }
    };
    const isOutOfAttempts = attemptsLeft === 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            {/* Step 4: Numeric input box */}
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
                placeholder="Enter attempts to gain"
            />

            <button onClick={handleUseAttempt} disabled={isOutOfAttempts}>
                Use Attempt
            </button>
            <button onClick={handleGainAttempt}>Gain Attempts</button>
        </div>
    );
}
