import React from 'react';
import "./BetsGroupRight.css";
import {Form} from "react-bootstrap";

const BetsGroupRight = () => {
    return (
        <div className={"BetsGroupRight right"}>
            <header className={"w-100"}>
                <Form.Select size={"sm"}>
                    <option value="1">BTC</option>
                    <option value="2">USD</option>
                    <option value="3">ETH</option>
                    <option value="3">ADK</option>
                </Form.Select>

                <Form.Select size={"sm"}>
                    <option value="1">USD</option>
                    <option value="2">ETH</option>
                    <option value="3">ADK</option>
                    <option value="3">BTC</option>
                </Form.Select>
            </header>

            <div className="now-price">
                <h5 className={"m-0"}>16836.04</h5>
            </div>

            <div className="w-100 buttons-container">
                <button className={"bet call"}>
                    <img src="/components/BetsGroup/call.svg" alt=""/>
                    Call
                </button>

                <button className={"bet put"}>
                    <img src="/components/BetsGroup/put.svg" alt=""/>
                    Put
                </button>
            </div>
        </div>
    );
};

export default BetsGroupRight;
