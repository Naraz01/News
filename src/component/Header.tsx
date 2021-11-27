import React from "react";
import {Logo} from "./Logo";
import {Search} from "./Search"
export const Header: React.FC = ():React.ReactElement => {
    return (
        <header className="header">
            <div className={'container'}>
                <div className="header-wrapper">
                    <Logo />
                    <Search />
                </div>
            </div>
        </header>
    )
};
