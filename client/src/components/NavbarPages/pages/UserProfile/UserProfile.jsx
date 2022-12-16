import React from 'react';
import "./UserProfile.css";

const UserProfile = () => {
    return (
        <div className={"UserProfile"}>
            <header>
                <img src="/general/test-td/user-circle.svg" alt="user"/>
                <span>
                    <h5>User name</h5>
                    <p className="small m-0">userEmail@gmail.com</p>
                </span>
            </header>
        </div>
    );
};

export default UserProfile;
