import * as React from 'react';
import { TitleComponent } from "Components";
import { Link } from "gatsby";

import "./aside.component.sass";

interface IAsideComponentProps {
    text: string,
    link?: string,
    className?: string,
    children: React.ReactElement<any>
}

export function AsideComponent({ text, link, className, children }: IAsideComponentProps) {

    return (
        <section className={className && className !== "" ? `aside_section aside_section__${className}` : "aside_section"}>
            {link && link !== "" ? 
                <Link to={link}><TitleComponent balise="h2" text={text} /></Link>:
                <TitleComponent balise="h2" text={text} />
            }
            {children}
        </section>
    );
}