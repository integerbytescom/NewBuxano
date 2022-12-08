import React from 'react';
import {menuLeftData} from "./MenuLeftData.js";
import {Link} from "react-router-dom";
import "./MenuLeft.css";

const MenuLeft = ({open}) => {
    return (
        <div className={`MenuLeft ${open}`}>
            <header>
                <div className="logo">
                    {
                        open ?
                            <img src="/general/logo-big.svg" alt=""/>:
                            <img src="/general/logo.svg" alt=""/>
                    }
                </div>

                <div className={`user ${open}`}>
                    <img src="/components/NavbarLeft/avatar.svg" alt=""/>
                    {
                        open &&
                        <div className="content">
                            <h6>Nickname</h6>
                            <p className="small">
                                someemail@integerbytes.com
                            </p>
                        </div>
                    }
                </div>
            </header>

            <div className="menu">
                {
                    menuLeftData.map(link => (
                        <Link to={link.link} key={link.id}>
                            <img src={link.icon} alt={link.link} />
                            {open && <p>{link.text}</p>}
                        </Link>
                    ))
                }
            </div>

            <footer className={open}>
                <button>
                    <img src="/components/NavbarLeft/icons/but-vopros.svg" alt=""/>
                    {open && <p>Help</p>}
                </button>
                <button>
                    <img src="/components/NavbarLeft/icons/but-chat.svg" alt=""/>
                    {open && <p>Chat</p>}
                </button>
            </footer>
        </div>
    );
};

export default MenuLeft;
