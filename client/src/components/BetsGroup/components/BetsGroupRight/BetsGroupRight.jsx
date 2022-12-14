import React from 'react';
import "./BetsGroupRight.css";
import {Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setPair} from "../../../../redux-features/selectPairsSlice.js";

const BetsGroupRight = () => {

    const dispatch = useDispatch();
    const pairs = ["BTCUSD","ETHUSD","EOSUSD","XMRUSD","ETHBTC","ADKUSD"];

    return (
        <div className={"BetsGroupRight right"}>
            <header className={"w-100"}>
                <Form.Select
                    onChange={e => {dispatch(setPair(e.target.value))}}
                    size={"sm"}
                >
                    {
                        pairs.map(elem => (
                            <option key={elem} value={elem}>
                                {elem}
                            </option>
                        ))
                    }
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
