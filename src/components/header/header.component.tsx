import * as React from 'react';
import { Link } from "gatsby";
import { IHeaderComponentProps } from "Interfaces";
import { getNavTeams } from "Services";

import "./header.component.sass";

export function HeaderComponent({ data }: IHeaderComponentProps) {
    
    return (
        <header id="header">
            <div className="container">
                <nav>
                    <Link to="/"><img src={data.logo.sizes.src} alt="" title={data.site.siteName} /></Link>
                    <ul>
                        <li>
                            <Link className="text_menu" to="/equipes">Équipes</Link>
                            <ul>
                                {getNavTeams(data.categoriesOrder.categories, data.teams.nodes)}
                            </ul>
                        </li>
                        <li><Link className="text_menu" to="/medias">Médias</Link></li>
                        <li><Link className="text_menu" to="/contact">Contact</Link></li>
                        <li><Link className="text_menu" to="/boutique">Boutique</Link></li>
                        <li><Link className="text_menu" to="/mon-club">Mon club</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}