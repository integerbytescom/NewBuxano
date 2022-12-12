import React from 'react';
import "./PlayersTable.css";
import PlayersHeader from "./components/PlayersHeader/PlayersHeader.jsx";
import PlayersTr from "./components/PlayersTr/PlayersTr.jsx";

const PlayersTable = ({showNav}) => {

    return (
        <div
            className={`PlayersTable ${showNav}`}
            // style={{overflowY:"auto"}}
        >
            <PlayersHeader />

            <div className="table-container" style={{overflowY:"auto"}}>
                <table className={"w-100 my-2"}>
                    <tbody>
                        <PlayersTr />
                        <PlayersTr />
                        <PlayersTr />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlayersTable;
