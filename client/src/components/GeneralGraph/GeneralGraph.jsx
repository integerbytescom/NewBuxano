import React, {useEffect} from 'react';
import "./GeneralGraph.css";
import axios from "axios";

const GeneralGraph = () => {


    // console.log(new Date(1392595200000))
    console.log(new Date(1670850000000))

    const config = {

        method: 'get',
        url: 'https://pro-api.coinmarketcap.com/v2/tools/price-conversion?symbol=ADK&amount=1',
        headers: {
            'X-CMC_PRO_API_KEY': 'd1722719-fa9a-4195-afbd-589780f11d96',
        }
    };

    useEffect(() => {
        axios(config)
            .then(res => (console.log(res)))
            .catch(err => (console.log(err)))
    },[])

    return (
        <div className={"GeneralGraph"}>

        </div>
    );
};

export default GeneralGraph;
