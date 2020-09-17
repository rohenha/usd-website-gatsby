import * as React from 'react';
import { Link } from "gatsby";
import { ICategory, ITeam, IPartner } from "Interfaces";
import { getNavTeams } from "Services";
import { PartnersComponent } from "Components";

import "./footer.component.sass";

interface IFooterComponentProps {
    data: {
        categoriesOrder: {
            categories: ICategory[]
        },
        teams: {
            nodes: ITeam[]
        },
        logo: {
            sizes: {
                srcSet: string,
                src: string,
                sizes: string
            }
        },
        site: {
            siteName: string,
            facebookPageUrl: string
        }
        partners: {
            partenaires : IPartner[]
        }
    }
}

export function FooterComponent({ data }: IFooterComponentProps) {
    return (
        <React.Fragment>
            <PartnersComponent partners={data.partners.partenaires} />
            <footer className="footer">
                <div className="container">
                    <div className="footer__nav row">
                        <nav className="col-md-7">
                            <h3>Plan du site</h3>
                            <ul>
                                <li><Link className="text_menu" to="/">Accueil</Link></li>
                                <li><Link className="text_menu" to="/equipes">Équipes</Link></li>
                                <li><Link className="text_menu" to="/medias">Médias</Link></li>
                                <li><Link className="text_menu" to="/boutique">Boutique</Link></li>
                                <li><Link className="text_menu" to="/contact">Contact</Link></li>
                            </ul>
                            <ul>
                                <li>
                                    <ul>
                                        {getNavTeams(data.categoriesOrder.categories, data.teams.nodes)}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="col-md-5 footer__socials">
                            <h3>Réseaux sociaux</h3>
                            <ul>
                                <li><a className="text_menu" href={data.site.facebookPageUrl} target="_blank">
                                    <img src={'/socials/facebook--white.png'} alt=""/>
                                </a></li>
                                <li><a className="text_menu" href={data.site.facebookPageUrl} target="_blank">
                                    <img src={'/socials/instagram--white.png'} alt=""/>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__more">
                    <div className="container">
                        <p className="text_menu">@2020 - Créé par <a href="https://www.romain-breton.com" className="text_menu" target="_blank">Romain Breton</a></p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}