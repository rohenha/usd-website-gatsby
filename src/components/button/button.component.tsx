import * as React from 'react';
// import { Link } from "gatsby";
import { IButtonProps } from "Interfaces";

import "./button.component.sass";

export function ButtonComponent({ component, type, children }: IButtonProps) {
    const element = React.createElement(
        component.name,
        {
            class: "button button__" + type,
            href: component.href,
            target: component.target
        }, 
        children);
    return (
        <React.Fragment>
            {element}
        </React.Fragment>
    );
}