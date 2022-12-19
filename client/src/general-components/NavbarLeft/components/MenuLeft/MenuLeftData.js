export const menuLeftData = [
    // {
    //     id:1,
    //     icon:"/components/NavbarLeft/icons/1.svg",
    //     text:"Trading",
    //     link:"trading",
    // },
    {
        id:2,
        icon:"/components/NavbarLeft/icons/2.svg",
        text:"Billing",
        link:false,
        innerLinks:[
            {
                id:21,
                text:"Deposit funds",
                link:"deposit",
            },
            {
                id:22,
                text:"Withdraw funds",
                link:"withdraw",
            },
            {
                id:23,
                text:"Transaction history",
                link:"transHistory",
            },
        ],
    },
    {
        id:3,
        icon:"/components/NavbarLeft/icons/3.svg",
        text:"Settings",
        link:false,
        innerLinks:[
            {
                id:31,
                text:"Profile",
                link:"userProfile",
            },
            {
                id:32,
                text:"Reset password",
                link:"resetPassword",
            },
            {
                id:33,
                text:"2FA Authentication",
                link:"2faAuth",
            },
            {
                id:35,
                text:"API Keys",
                link:"apiKeys",
            },
        ],
    },
    {
        id:4,
        icon:"/components/NavbarLeft/icons/6.svg",
        text:"Funds",
        link:"funds",
    },
    {
        id:5,
        icon:"/components/NavbarLeft/icons/7.svg",
        text:"Tour",
        link:"tour",
    },
]
