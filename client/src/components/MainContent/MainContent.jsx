import React from 'react';
import "./MainContent.css";
import GeneralGraph from "../GeneralGraph/GeneralGraph.jsx";
import PlayersTable from "../PlayersTable/PlayersTable.jsx";
import BetsGroup from "../BetsGroup/BetsGroup.jsx";
import FooterBottom from "../../general-components/FooterBottom/FooterBottom.jsx";
import {useSelector} from "react-redux";

const MainContent = () => {

    //show navbar value from redux
    const showNav = useSelector(state => state.navbarLeft.show);

    return (
        <div className={`MainContent ${showNav}`}>
            <GeneralGraph />

            <div className="players-bets">
                <PlayersTable showNav={showNav} />
                {!showNav && <BetsGroup />}
            </div>

            <FooterBottom />
        </div>
    );
};

export default MainContent;
