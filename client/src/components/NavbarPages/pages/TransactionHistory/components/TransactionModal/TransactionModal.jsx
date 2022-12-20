import React from 'react';
import {CloseButton, Modal} from "react-bootstrap";
import "./TransactionModal.css";

const TransactionModal = ({onHide,show,data}) => {

    console.log(data,"data for TransactionModal");

    return (
        <Modal
            onHide={onHide}
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={"TransactionModal"}
        >
            <Modal.Header>
                <h5 className={"m-0"}>Transaction details</h5>
                <CloseButton variant="white" onClick={onHide} />
            </Modal.Header>

            <Modal.Body>
                <div className="block">
                    <div className="inner">
                        <img src="/general/test-td/coin-logo1.svg" alt=""/>
                        <div className="line" />
                        <img src="/general/test-td/coin-logo1.svg" alt=""/>
                    </div>
                    <div className="inner">
                        <p className={"small"}>
                            {data.type}
                        </p>
                    </div>
                </div>

                <div className="block">
                    <div className="cont-inner">
                        <p className={"title"}>Date</p>
                        <div className="inner">
                            <p className={"small"}>
                                {data.date}
                            </p>
                        </div>
                    </div>

                    <div className="cont-inner">
                        <p className={"title"}>Trade ID</p>
                        <div className="inner">
                            <p className={"small"}>
                                {data.tradeId}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="cont-inner">
                        <p className={"title"}>Amount</p>
                        <div className="inner amount">
                            <img
                                style={{marginRight:5}}
                                src="/general/btc-icon.svg"
                                alt=""
                            />
                            <p className={
                                data.amount.startsWith("-") ?
                                    "amount small red" : "amount small"
                                }
                            >
                                {data.amount}
                            </p>
                        </div>
                    </div>

                    <div className="cont-inner">
                        <p className={"title"}>Final Balance</p>
                        <div className="inner amount">
                            <img
                                style={{marginRight:5}}
                                src="/general/btc-icon.svg"
                                alt=""
                            />
                            <p className={"small dark"}>{data.balance}</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default TransactionModal;
