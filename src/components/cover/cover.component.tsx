import * as React from 'react';
import { TitleComponent } from "Components";
import { ICoverComponentProps } from "Interfaces";

import "./cover.component.sass";

export function CoverComponent({ title, image }: ICoverComponentProps) {
    
    return (
        <section className="cover" style={{ backgroundImage: "url(" + image.src + ")" }}>
            <div className="container">
                <TitleComponent balise="h1" text={title} />
            </div>
        </section>
    );
}