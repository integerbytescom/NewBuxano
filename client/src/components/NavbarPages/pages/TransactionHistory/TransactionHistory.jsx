import React from 'react';
import {Table} from "react-bootstrap";
import "./TransactionHistory.css";
import {TransactionHistoryData} from "./TransactionHistoryData.js";
import TransactionHistoryItem from "./components/TransactionHistoryItem/TransactionHistoryItem.jsx";

const TransactionHistory = () => {
    return (
        <div className={"TransactionHistory"}>
            <table className={"w-100"}>
                {/*<thead className={"w-100"}>*/}
                {/*    <tr className={"w-100 d-table"}>*/}
                {/*        <th>Date</th>*/}
                {/*        <th>Amount</th>*/}
                {/*        <th>Trade ID</th>*/}
                {/*        <th>More Info</th>*/}
                {/*    </tr>*/}
                {/*</thead>*/}

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
};

export default TransactionHistory;
