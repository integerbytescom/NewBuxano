import React from 'react';
import "./GeneralGraph.css";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import {useSelector} from "react-redux";

const GeneralGraph = () => {

    //show value from redux
    const selectPair = useSelector(state => state.selectPairs.pair);
    console.log("select pair coins: ",selectPair);

    return (
        <div className={"GeneralGraph"}>
            <AdvancedRealTimeChart
                theme="dark"
                autosize
                symbol={selectPair}
                save_image={false}
            />
        </div>
    );
};

export default GeneralGraph;
