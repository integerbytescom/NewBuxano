import React from 'react';
import "./NavbarPages.css";
import HeaderBack from "./components/HeaderBack/HeaderBack.jsx";
import WithdrawFunds from "./pages/WithdrawFunds/WithdrawFunds.jsx";
import DepositFunds from "./pages/DepositFunds/DepositFunds.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
import TwoFaAuth from "./pages/TwoFaAuth/TwoFaAuth.jsx";

const NavbarPages = ({page,setNavPage}) => {
    return (
        <div className={"NavbarPages"}>
            <HeaderBack page={page} setNavPage={setNavPage} />

            {page.link === "withdraw" && <WithdrawFunds />}
            {page.link === "deposit" && <DepositFunds />}
            {page.link === "userProfile" && <UserProfile />}
            {page.link === "resetPassword" && <ResetPassword />}
            {page.link === "2faAuth" && <TwoFaAuth />}
        </div>
    );
};

export default NavbarPages;
