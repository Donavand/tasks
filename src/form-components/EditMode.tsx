import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode() {
        setEditMode(!editMode); // Toggle the edit mode state
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value); // Update the name state
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked); // Update the isStudent state
    }

    return (
        <div>
            <div>
                {isStudent ? (
                    <span>{name} is a student </span>
                ) : (
                    <span> {name} is not a student </span>
                )}
            </div>
            <div>
                <Form.Group controlId="formInputAnswer">
                    <div>
                        <Form.Check
                            type="switch"
                            id="edit-mode-check"
                            label="Edit Mode"
                            checked={editMode}
                            onChange={updateEditMode}
                        />
                    </div>
                    {editMode && (
                        <div>
                            <div>
                                <Form.Control
                                    value={name}
                                    onChange={updateName}
                                    disabled={!editMode}
                                />
                            </div>

                            <Form.Check
                                type="switch"
                                id="is-student-check"
                                label="Is Student?"
                                checked={isStudent}
                                onChange={updateIsStudent}
                                disabled={!editMode}
                                hidden={!editMode}
                            />
                        </div>
                    )}
                </Form.Group>
            </div>
        </div>
    );
}
