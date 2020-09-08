import * as React from 'react';
import { Link } from "gatsby";
import { IButtonProps } from "Interfaces";

import "./button.component.sass";

export function ButtonComponent({ className, event, link, type, children }: IButtonProps) {
    const classNames = ["primary", "secondary"];

    const setClassName = () => {
        return `button button--${classNames[type - 1]} ${className}`;
    }

    const renderContent = () => {
        return (
            <React.Fragment>
                <span>{children}</span>
                <span className="button__arrow"></span>
            </React.Fragment>
        );
    };
    return link !== "" ?
        <Link className={setClassName()} to={link}>{renderContent()}</Link> :
        <button className={setClassName()} onClick={event}>{renderContent()}</button>
    ;
}