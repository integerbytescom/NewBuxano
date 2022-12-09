import React from 'react';
import "./FooterBottom.css";
import {Link} from "react-router-dom";
import {FooterBottomLinks} from "./FooterBottomLinks.js";

const FooterBottom = () => {
    return (
        <footer className={"FooterBottom"}>
            {
                FooterBottomLinks.map((link,ids) => (
                    <Link key={ids} to={link.link}>{link.text}</Link>
                ))
            }
        </footer>
    );
};

export default FooterBottom;
