import React, {useState} from 'react';
import "./DepositFunds.css";

const DepositFunds = () => {

    const [address] = useState("7FdC3V2Ed3Da7fbm8LtwWXjndiwndwoi6765354");

    return (
        <div className={"DepositFunds"}>
            <p className={"m-0"}>Your Address</p>

            <div className="address">
                <p className={"m-0"}>
                    {address.slice(0,25) + "..."}
                </p>

                <span>
                    <img src="/general/copy.svg" alt="copy"/>
                    Copy
                </span>
            </div>

            <div className="qr-container">
                <img src="/devs/qr.svg" alt=""/>
                <p>Deposits are credited within 3 confirmations.</p>
            </div>
        </div>
    );
};

export default DepositFunds;
