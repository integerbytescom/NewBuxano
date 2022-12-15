import React from 'react';
import "./GeneralGraph.css";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import {useSelector} from "react-redux";

const GeneralGraph = () => {

    //show value pairs from redux
    const selectPair = useSelector(state => state.selectPairs.pair);
    console.log("select pair coins: ",selectPair);

    if (Object.values(selectPair)){
        return (
            <div className={"GeneralGraph"}>
                <AdvancedRealTimeChart
                    theme="dark"
                    autosize
                    symbol={selectPair}
                    save_image={false}
                    style={"3"}
                    chart_property_page_background={false}
                />
            </div>
        );
    }
};

export default GeneralGraph;
