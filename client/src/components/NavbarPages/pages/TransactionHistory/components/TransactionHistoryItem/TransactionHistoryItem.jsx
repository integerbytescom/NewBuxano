import React from 'react';
import {Button} from "react-bootstrap";
import "./TransactionHistoryItem.css";

const TransactionHistoryItem = ({data}) => {
    return (
        <tr className={"TransactionHistoryItem small"}>
            <td className={"date"}>
                {data.date.slice(0,10)}<br />
                {data.date.slice(11,data.date.length)}
            </td>
            <td className={"amount"}>
                {data.amount.slice(0,7)}
            </td>
            <td className={"tradeId"}>
                {data.tradeId.slice(0,10) + "..."}
            </td>
            <td className={"st"}>
                Details
            </td>
        </tr>
    );
};

export default TransactionHistoryItem;
