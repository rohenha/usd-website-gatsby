import * as React from 'react';
import { Link } from "gatsby"
import { IFooterComponentProps } from "Interfaces";
import { getNavTeams } from "Services";

import "./footer.component.sass";

export function FooterComponent({ data }: IFooterComponentProps) {
    
    return (
        <footer id="footer">
            <div className="container">
                <nav>
                    <h3>Plan du site</h3>
                    <ul>
                        <li><Link className="text_menu" to="/">Accueil</Link></li>
                        <li><Link className="text_menu" to="/equipes">Équipes</Link></li>
                        <li><Link className="text_menu" to="/medias">Médias</Link></li>
                        <li><Link className="text_menu" to="/contact">Contact</Link></li>
                        <li><Link className="text_menu" to="/boutique">Boutique</Link></li>
                        <li><Link className="text_menu" to="/mon-club">Mon club</Link></li>
                    </ul>
                    <ul>
                        <li>
                            <ul>
                                {getNavTeams(data.categoriesOrder.categories, data.teams.nodes)}
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="footer__socials">
                    <h3>Réseaux sociaux</h3>
                    <ul>
                        <li><Link className="text_menu" to={data.site.facebookPageUrl}>Facebook</Link></li>
                        <li><Link className="text_menu" to={data.site.facebookPageUrl}>Instagram</Link></li>
                    </ul>
                </div>
                <div className="footer__more">
                    <p>@2020 - Créé par <Link to="https://www.romain-breton.com">Romain Breton</Link></p>
                </div>
            </div>
        </footer>
    );
}