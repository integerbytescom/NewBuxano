import React from 'react';
import {menuLeftData} from "./MenuLeftData.js";
import "./MenuLeft.css";
import MenuLeftHeader from "../MenuLeftHeader/MenuLeftHeader.jsx";
import MenuLeftFooter from "../MenuLeftFooter/MenuLeftFooter.jsx";
import NavbarPages from "../../../../components/NavbarPages/NavbarPages.jsx";
import {useDispatch} from "react-redux";
import {setPage} from "../../../../redux-features/selectNavbarPageSlice.js";
import MenuLeftItem from "./MenuLeftItem.jsx";

const MenuLeft = ({open,showPage}) => {

    const dispatch = useDispatch();
    //переходим на нужную нам страницу
    const setNavPage = data => {
        dispatch(setPage({
            link:data.link,
            title:data.text,
        }));
    }

    return (
        <div className={`MenuLeft ${open}`}>

            {
                !showPage.link &&
                <MenuLeftHeader open={open} />
            }

            {/*pages inner container*/}
            {showPage.link && <NavbarPages page={showPage} setNavPage={setNavPage} />}

            {//LINKS
                !showPage.link &&
                <div className="menu">
                    {//LINKS
                        menuLeftData.map(link => (
                            <MenuLeftItem key={link.id} open={open} link={link} setNavPage={setNavPage} />
                        ))
                    }
                </div>
            }

            {
                !showPage.link &&
                <MenuLeftFooter open={open} />
            }
        </div>
    );
};

export default MenuLeft;
