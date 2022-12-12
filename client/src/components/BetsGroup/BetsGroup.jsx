import React from 'react';
import "./BetsGroup.css";
import BetsGroupLeft from "./components/BetsGroupLeft/BetsGroupLeft.jsx";
import BetsGroupRight from "./components/BetsGroupRight/BetsGroupRight.jsx";

const BetsGroup = () => {
    return (
        <div className={"BetsGroup"}>

            {/*left content*/}
            <BetsGroupLeft />

            {/*right content*/}
            <BetsGroupRight />
        </div>
    );
};

export default BetsGroup;
