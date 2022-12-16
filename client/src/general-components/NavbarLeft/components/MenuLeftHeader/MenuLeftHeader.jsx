import React from 'react';
import "./MenuLeftHeader.css";

const MenuLeftHeader = ({open}) => {
    return (
        <header className={`MenuLeftHeader ${open}`}>
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
                        <h6>User</h6>
                        <p className="small">
                            buxano@gmail.com
                        </p>
                    </div>
                }
            </div>
        </header>
    );
};

export default MenuLeftHeader;
