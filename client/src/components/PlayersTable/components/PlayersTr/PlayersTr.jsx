import React from 'react';
import "./PlayersTr.css"

const PlayersTr = () => {
    return (
        <tr className={"PlayersTr"}>
            <td className={"user"}>
                <img src="/general/test-td/user-circle.svg" alt=""/>
            </td>

            <td className={"coins-logos bg"}>
                <img src="/general/test-td/coin-logo1.svg" alt=""/>
                <div className="line" />
                <img src="/general/test-td/coin-logo1.svg" alt=""/>
            </td>

            <td className={"arrow bg"}>
                <img src="/general/test-td/arrow-top.svg" alt=""/>
            </td>

            <td className={"time"}>
               <p className={"m-0"}>1 hour</p>
            </td>

            <td className={"time-start bg"}>
                <p className="small m-0">
                    04/03/2022<br />
                    15:10:39
                </p>
            </td>

            <td className={"time-end bg"}>
                <p className="small m-0">
                    04/03/2022<br />
                    15:10:39
                </p>
            </td>

            <td className={"dots bg"}>
                <img src="/general/test-td/dots.svg" alt=""/>
            </td>
        </tr>
    );
};

export default PlayersTr;
