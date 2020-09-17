import * as React from 'react';
import { Link } from "gatsby";

import "./button.component.sass";

interface IButtonProps {
    active: boolean,
    link?: string,
    className?: string,
    type: number,
    event?: () => void | null,
    children: React.ReactElement<any>
}

export function ButtonComponent({ active, className, event, link, type, children }: IButtonProps) {
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
        <button className={setClassName()} disabled={!active} onClick={event}>{renderContent()}</button>
    ;
}