import React from 'react';
import "./MainContent.css";
import GeneralGraph from "../GeneralGraph/GeneralGraph.jsx";
import PlayersTable from "../PlayersTable/PlayersTable.jsx";
import BetsGroup from "../BetsGroup/BetsGroup.jsx";
import FooterBottom from "../../general-components/FooterBottom/FooterBottom.jsx";

const MainContent = () => {
    return (
        <div className={"MainContent"}>
            <GeneralGraph />

            <div className="players-bets">
                <PlayersTable />
                <BetsGroup />
            </div>

            <FooterBottom />
        </div>
    );
};

export default MainContent;
