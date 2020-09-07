import React from "react";
import { 
    LayoutComponent,
    TitleComponent
 } from "Components";

export default function Typography() {
    return (
        <LayoutComponent seo={{tags: []}}>
            <React.Fragment>
                <TitleComponent balise="h1" text="Titre de niveau 1" />
                <TitleComponent balise="h2" text="Titre de niveau 2" />
                <h3>Titre de niveau 3</h3>
                <h4>Titre de niveau 4</h4>
                <p className="text_team">Sénior A</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, tenetur? Quibusdam expedita labore, alias suscipit numquam a porro accusamus, iusto vel cum laborum modi at! Impedit, esse. Voluptatem, nam nostrum!</p>
                <a href="#">Lien normal vers une page</a>
                <div><a className="button" href="#">Lien / Bouton vers une page</a></div>
                <div><button>Bouton vers une page</button></div>
            </React.Fragment>
        </LayoutComponent>
    );
};