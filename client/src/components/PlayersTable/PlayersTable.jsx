import React from 'react';
import "./PlayersTable.css";
import PlayersHeader from "./components/PlayersHeader/PlayersHeader.jsx";
import PlayersTr from "./components/PlayersTr/PlayersTr.jsx";

const PlayersTable = () => {
    return (
        <div className={"PlayersTable"} style={{overflowY:"auto"}}>
            <PlayersHeader />

            <table className={"w-100 my-2"}>
                <tbody>
                    <PlayersTr />
                    <PlayersTr />
                    <PlayersTr />
                    <PlayersTr />
                    <PlayersTr />
                    <PlayersTr />
                    <PlayersTr />
                </tbody>
            </table>
        </div>
    );
};

export default PlayersTable;
