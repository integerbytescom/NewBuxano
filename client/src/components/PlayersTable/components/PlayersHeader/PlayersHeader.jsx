import React from 'react';
import "./PlayersHeader.css";
import {Button} from "react-bootstrap";

const PlayersHeader = () => {
    return (
        <header className={"PlayersHeader"}>
            <div className={"buts-container"}>
                <Button disabled>All Types</Button>
                <Button>Call/Put</Button>
                <Button>Touch/No Touch</Button>
            </div>

            <div className={"buts-container"}>
                <Button>All Mkt</Button>
                <Button disabled>BTC/USD</Button>
                <Button>Personal</Button>
            </div>

            <div className={"buts-container"}>
                <Button>Open</Button>
                <Button>Locked</Button>
                <Button disabled>Closed</Button>
            </div>
        </header>
    );
};

export default PlayersHeader;
