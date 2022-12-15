import React from 'react';
import {menuLeftData} from "./MenuLeftData.js";
import {Link} from "react-router-dom";
import "./MenuLeft.css";
import MenuLeftHeader from "../MenuLeftHeader/MenuLeftHeader.jsx";
import MenuLeftFooter from "../MenuLeftFooter/MenuLeftFooter.jsx";
import NavbarPages from "../../../../components/NavbarPages/NavbarPages.jsx";
import {useDispatch} from "react-redux";
import {setPair} from "../../../../redux-features/selectPairsSlice.js";
import {setPage} from "../../../../redux-features/selectNavbarPageSlice.js";

const MenuLeft = ({open,showPage}) => {

    const dispatch = useDispatch();
    //переходим на нужную нам страницу
    const setNavPage = value => {
        dispatch(setPage(value));
    }

    return (
        <div className={`MenuLeft ${open}`}>

            <MenuLeftHeader open={open} />

            {/*pages inner container*/}
            {showPage && <NavbarPages page={showPage} setNavPage={setNavPage} />}

            {//LINKS
                !showPage &&
                <div className="menu">
                    {//LINKS
                        menuLeftData.map(link => (
                            <p key={link.id} onClick={() => setNavPage(link.link)}>
                                <img src={link.icon} alt={link.link} />
                                {open && link.text}
                            </p>
                        ))
                    }
                </div>
            }

            <MenuLeftFooter open={open} />
        </div>
    );
};

export default MenuLeft;
