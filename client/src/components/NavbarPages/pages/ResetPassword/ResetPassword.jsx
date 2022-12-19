import React, {useState} from 'react';
import "./ResetPassword.css";
import {Form, FormControl,Button} from "react-bootstrap";

const ResetPassword = () => {

    const [showPass,setShowPass] = useState({
        1:false,
        2:false,
        3:false,
    })
    //меняем видисоть определенного инпута
    const handleShow = num => {
        const copy = Object.assign({},showPass);
        copy[num] = !copy[num];
        setShowPass(copy);
    }

    return (
        <div className={"ResetPassword"}>

            <p className={"mb-3"}>
                Set a new password for your account
            </p>

            <Form>
                <div className={"inp-container"}>
                    <label>Current password</label>
                    <FormControl
                        type={showPass[1] ? "text" : "password"}
                        className={"inp-blue"}
                        size={"sm"}
                    />
                    <img onClick={() => handleShow(1)} src="/general/eye.svg" alt="show"/>
                </div>

                <div className={"inp-container"}>
                    <label>New password</label>
                    <FormControl
                        type={showPass[2] ? "text" : "password"}
                        className={"inp-blue"}
                        size={"sm"}
                    />
                    <img onClick={() => handleShow(2)} src="/general/eye.svg" alt="show"/>
                </div>

                <div className={"inp-container"}>
                    <label>Confirm new password</label>
                    <FormControl
                        type={showPass[3] ? "text" : "password"}
                        className={"inp-blue"}
                        size={"sm"}
                    />
                    <img onClick={() => handleShow(3)} src="/general/eye.svg" alt="show"/>
                </div>

                <Button size={"sm"} className={"green-but"}>Change password</Button>
            </Form>

        </div>
    );
};

export default ResetPassword;
