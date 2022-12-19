import React, {useState} from 'react';
import {menuLeftData} from "./MenuLeftData.js";
import "./MenuLeft.css";
import MenuLeftHeader from "../MenuLeftHeader/MenuLeftHeader.jsx";
import MenuLeftFooter from "../MenuLeftFooter/MenuLeftFooter.jsx";
import NavbarPages from "../../../../components/NavbarPages/NavbarPages.jsx";
import {useDispatch} from "react-redux";
import {setPage} from "../../../../redux-features/selectNavbarPageSlice.js";
import MenuLeftItem from "./MenuLeftItem.jsx";
import CircleCheck from "../../../CircleCheck/CircleCheck.jsx";

const MenuLeft = ({open,showPage}) => {

    const dispatch = useDispatch();
    //переходим на нужную нам страницу
    const setNavPage = data => {
        dispatch(setPage({
            link:data.link,
            title:data.text,
        }));
    }

    const [showTheme,setShowTheme] = useState(false);
    const [showNotif,setShowNotif] = useState(false);

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
                            <MenuLeftItem
                                key={link.id}
                                open={open}
                                link={link}
                                setNavPage={setNavPage}
                            />
                        ))
                    }

                    {/*theme*/}
                    <div className={"MenuLeftItem more"}>
                        <p onClick={() => setShowTheme(!showTheme)}>
                            <img
                                hidden={!open}
                                src="/components/NavbarLeft/arrow.svg"
                                alt="arrow"
                                className={`arrow ${showTheme ? "open" : ""}`}
                            />
                            <img src={"/components/NavbarLeft/icons/4.svg"} alt={""} />
                            {open && "Theme"}
                        </p>
                        {
                            (showTheme && open) &&
                            <ul className={"theme-notif-ul"}>
                                <li>
                                    <CircleCheck checked={true} />
                                    <p className="small">Dark blue</p>
                                </li>
                                <li>
                                    <CircleCheck checked={false} />
                                    <p className="small">Light</p>
                                </li>
                            </ul>
                        }
                    </div>

                    {/*notifications*/}
                    <div className={"MenuLeftItem more"}>
                        <p onClick={() => setShowNotif(!showNotif)}>
                            <img
                                hidden={!open}
                                src="/components/NavbarLeft/arrow.svg"
                                alt="arrow"
                                className={`arrow ${showNotif ? "open" : ""}`}
                            />
                            <img src={"/components/NavbarLeft/icons/9.svg"} alt={""} />
                            {open && "Notifications"}
                        </p>
                        {
                            (showNotif && open) &&
                            <ul className={"theme-notif-ul"}>
                                <li>
                                    <CircleCheck checked={true} />
                                    <p className="small">
                                        Enable notifications
                                    </p>
                                </li>
                            </ul>
                        }
                    </div>
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
