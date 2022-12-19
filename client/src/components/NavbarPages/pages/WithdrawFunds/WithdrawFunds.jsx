import React from 'react';
import "./WithdrawFunds.css";
import {Button, FormControl} from "react-bootstrap";

const WithdrawFunds = () => {
    return (
        <div className={"WithdrawFunds"}>
            <p className="small">
                Withdrawals are manually processed once every 24 hours.
                <br/><br/>
                ⚠ We strongly recommend that you copy + paste
                the address to help avoid errors.
                Please note that we are not responsible for coins
                mistakenly sent to the wrong address.
            </p>

            <div className={"inp-container"}>
                <label>Address</label>
                <FormControl className={"inp-blue"} type={"number"} size={"sm"} />
            </div>

            <div className={"inp-container"}>
                <label>Amount in BTC currency</label>
                <FormControl className={"inp-blue"} type={"number"} size={"sm"} />
                <p className="small m-0">
                    Minimum 0.0006 BTC
                </p>
            </div>

            <Button className={"green-but"} size={"sm"}>Confirm</Button>
        </div>
    );
};

export default WithdrawFunds;
