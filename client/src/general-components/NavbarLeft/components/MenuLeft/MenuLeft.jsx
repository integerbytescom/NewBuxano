import React from 'react';
import {menuLeftData} from "./MenuLeftData.js";
import {Link} from "react-router-dom";
import "./MenuLeft.css";
import MenuLeftHeader from "../MenuLeftHeader/MenuLeftHeader.jsx";
import MenuLeftFooter from "../MenuLeftFooter/MenuLeftFooter.jsx";

const MenuLeft = ({open}) => {
    return (
        <div className={`MenuLeft ${open}`}>

            <MenuLeftHeader open={open} />

            <div className="menu">
                {//LINKS
                    menuLeftData.map(link => (
                        <Link to={link.link} key={link.id}>
                            <img src={link.icon} alt={link.link} />
                            {open && <p>{link.text}</p>}
                        </Link>
                    ))
                }
            </div>

            <MenuLeftFooter open={open} />
        </div>
    );
};

export default MenuLeft;
