import React from 'react';
import "./UserProfile.css";
import {Button, Form} from "react-bootstrap";

const UserProfile = () => {
    return (
        <div className={"UserProfile"}>
            <header>
                <img src="/general/test-td/user-circle.svg" alt="user"/>
                <span>
                    <h5>User name</h5>
                    <p className="small m-0">userEmail@gmail.com</p>
                </span>
            </header>

            <Form>
                <Form.Group className={"w-100 form-group"}>
                    <Form.Label className={"small"}>Change photo</Form.Label>
                    <Form.Control className={"inp-blue"} size={"sm"} type="file" />
                </Form.Group>

                <Form.Group className={"form-group"}>
                    <Form.Label className={"small"}>First name</Form.Label>
                    <Form.Control className={"inp-blue"} size={"sm"} type="text" />
                </Form.Group>

                <Form.Group className={"form-group"}>
                    <Form.Label className={"small"}>Last name</Form.Label>
                    <Form.Control className={"inp-blue"} size={"sm"} type="text" />
                </Form.Group>

                <Form.Group className={"form-group"}>
                    <Form.Label className={"small"}>Nickname</Form.Label>
                    <Form.Control className={"inp-blue"} size={"sm"} type="text" />
                </Form.Group>

                <Form.Group className={"form-group"}>
                    <Form.Label className={"small"}>Email</Form.Label>
                    <Form.Control className={"inp-blue"} size={"sm"} type="email" />
                </Form.Group>

                <Form.Group className={"form-group"}>
                    <Form.Label className={"small"}>Phone number</Form.Label>
                    <Form.Control className={"inp-blue"} size={"sm"} type="phone" />
                </Form.Group>

                <Form.Group className={"form-group"}>
                    <Form.Label className={"small"}>Select your timezone</Form.Label>
                    <Form.Select className={"inp-blue"} size={"sm"}  aria-label="Default select example">
                        <option>Click to show</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <div className="check-container">
                    <Form.Check
                        type="switch"
                        className={"w-100 small"}
                        label="Enable helping tooltips."
                    />

                    <Form.Check
                        type="switch"
                        className={"w-100 small"}
                        label="Public username (displayed in the Leaderboards.)"
                    />
                </div>

                <Button className={"green-but"} size={"sm"}>Save</Button>
            </Form>
        </div>
    );
};

export default UserProfile;
