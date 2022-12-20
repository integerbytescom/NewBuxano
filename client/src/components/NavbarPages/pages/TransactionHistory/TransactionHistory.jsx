import React from 'react';
import "./TransactionHistory.css";
import {TransactionHistoryData} from "./TransactionHistoryData.js";
import TransactionHistoryItem from "./components/TransactionHistoryItem/TransactionHistoryItem.jsx";

const TransactionHistory = () => {

    // const TransactionHistoryData = undefined;

    if (TransactionHistoryData && TransactionHistoryData.length){
        return (
            <div className={"TransactionHistory"}>
                <table className={"w-100"}>
                    <tr className={"TransactionHistoryItem small head"}>
                        <td className={"date clear"}>
                            Date
                        </td>
                        <td className={"amount clear"}>
                            Amount
                        </td>
                        <td className={"tradeId clear"}>
                            Trade Id
                        </td>
                        <td className={"st clear"} />
                    </tr>

                    <tbody className={"w-100"}>
                    {
                        TransactionHistoryData.map(trans => (
                            <TransactionHistoryItem
                                key={trans.tradeId}
                                data={trans}
                            />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }else {
        return (
            <div className={"TransactionHistory noData"}>
                <p className={"m-0"}>
                    No transactions
                </p>
            </div>
        );
    }
};

export default TransactionHistory;
