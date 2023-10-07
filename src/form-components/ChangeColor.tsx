import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <p>
                    <span>
                        The current color is{" "}
                        <span
                            data-testid="colored-box"
                            style={{
                                backgroundColor: chosenColor,
                                color: "white"
                            }}
                        >
                            {chosenColor}
                        </span>
                    </span>
                </p>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChosenColor(event.target.value)}
                        id={"colors-choice-" + color}
                        label={color}
                        style={{ backgroundColor: color }}
                        value={color}
                        checked={chosenColor === color}
                    />
                ))}
            </div>
        </div>
    );
}
