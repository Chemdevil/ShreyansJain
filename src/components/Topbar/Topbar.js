import React from 'react';
import "./Topbar.css"
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

export default function Topbar() {
    return (
        <div className={"top-bar"}>
            <div className={"wrapper"}>
                <div className={"left"}>
                    <a href={"#home"} className={"logo"}><AllInclusiveIcon fontSize={'large'}/></a>
                    <div className={"itemContainer"}>

                    </div>
                </div>
                <div className={"right"}>
                    this is right
                </div>

            </div>

        </div>
    );
}

