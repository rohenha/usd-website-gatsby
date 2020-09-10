import * as React from 'react';
import { TitleComponent } from "Components";

import "./cover.component.sass";

interface ICoverComponentProps {
    title: string,
    big: boolean,
    image: {
        srcSet: string,
        sizes: string,
        width: string,
        height: string,
        aspectRatio: string,
        base64: string,
        src: string
    }
}

export function CoverComponent({ big, title, image }: ICoverComponentProps) {
    
    return (
        <section className={big ? "cover cover--big" : "cover"} style={{ backgroundImage: "url(" + image.src + ")" }}>
            <div className="cover__decoration"></div>
            <div className="container">
                <TitleComponent balise="h1" text={title} />
            </div>
            <div className="cover__scroller"></div>
        </section>
    );
}