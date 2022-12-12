import React from 'react';
import "./BetsGroupLeft.css";
import {Form, FormControl} from "react-bootstrap";

const BetsGroupLeft = () => {
    return (
        <div className="BetsGroupLeft left">
            <div className="left-inner">
                <p className="small">Order type</p>
                <button disabled>Call / Put</button>
                <button>Touch / No Touch</button>
            </div>
            <div className="left-inner">
                <p className="small">Amount Adjust</p>
                <button>X2</button>
                <button disabled>X5</button>
                <button>MAX</button>
                <button>/2</button>
            </div>
            <div className="left-inner">
                <p className="small">Trade Amount</p>
                <FormControl size={"sm"} defaultValue={0}/>
            </div>
            <div className="left-inner">
                <header>
                    <p className="small">Trade Amount</p>
                    <p className="small">Locks in 30 sec</p>
                </header>

                <Form.Select size={"sm"}>
                    <option value="1">5 minutes</option>
                    <option value="2">15 minutes</option>
                    <option value="3">30 minutes</option>
                    <option value="3">1 hour</option>
                </Form.Select>
            </div>
        </div>
    );
};

export default BetsGroupLeft;
