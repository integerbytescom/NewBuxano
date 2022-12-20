import React, {useState} from 'react';
import "./TransactionHistoryItem.css";
import TransactionModal from "../TransactionModal/TransactionModal.jsx";

const TransactionHistoryItem = ({data}) => {

    const [showModal,setShowModal] = useState(false);

    return (
        <>
            <tr className={"TransactionHistoryItem small"}>
                <td className={"date"}>
                    {data.date.slice(0,10)}<br />
                    {data.date.slice(11,data.date.length)}
                </td>
                <td className={data.amount.startsWith("-") ? "amount red" : "amount"}>
                    {data.amount.slice(0,7)}
                </td>
                <td className={"tradeId"}>
                    {data.tradeId.slice(0,10) + "..."}
                </td>
                <td onClick={() => setShowModal(true)} className={"st"}>
                    Details
                </td>
            </tr>

            <TransactionModal
                show={showModal}
                onHide={() => setShowModal(false)}
                data={data}
            />
        </>
    );
};

export default TransactionHistoryItem;
