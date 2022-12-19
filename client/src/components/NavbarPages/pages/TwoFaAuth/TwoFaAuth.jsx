import React from 'react';
import {Button, FormControl} from "react-bootstrap";
import "./TwoFaAuth.css";

const TwoFaAuth = () => {

    const key = "LNUVWUDVKIRTCW2WOFBWCJKYG5ZWGN2ILNGCYLSIIQZHIM3JNN5A";

    return (
        <div className={"TwoFaAuth"}>
            <p className={"small mb-3"}>
                Here you can enable / disable the 2FA security code
            </p>

            <div className="block">
                <h5 className={"mb-2"}>QR for Google Authenticator</h5>

                {/*qr code img*/}
                <img
                    className={"qr-code"}
                    src="/devs/qr.svg"
                    alt="qr-code"
                />

                <h5 className={"mb-2"}>
                    Secret key (click to copy):
                </h5>
                {/*key*/}
                <p className={"key small mb-3"}>
                    {key.slice(0,30) + "..."}
                </p>
                <p className={"small"}>
                    Please write down the secret key and keep it safe.
                </p>
            </div>

            <hr />

            <div className="block">
                <h5 className={"mb-4"}>
                    Enter GAuthenticator code
                </h5>

                <FormControl
                    size={"sm"}
                    className={"inp-blue mb-2"}
                    placeholder={"Insert 2FA Code"}
                />

                <Button className={"green-but"} size={"sm"}>
                    Enable 2FA Authentication
                </Button>
            </div>
        </div>
    );
};

export default TwoFaAuth;
