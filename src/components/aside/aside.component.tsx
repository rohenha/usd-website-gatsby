import * as React from 'react';
import { TitleComponent } from "Components";
import { IAsideComponentProps } from "Interfaces";
import { Link } from "gatsby";

import "./aside.component.sass";

export function AsideComponent({ text, link, className, children }: IAsideComponentProps) {

    return (
        <section className={className !== "" ? `aside_section aside_section__${className}` : "aside_section"}>
            {link !== "" ? 
                <Link to={link}><TitleComponent balise="h2" text={text} /></Link>:
                <TitleComponent balise="h2" text={text} />
            }
            {children}
        </section>
    );
}