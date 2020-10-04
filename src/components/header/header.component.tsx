import React, { useState } from 'react';
import { Link } from "gatsby";
import { ITeam, IteamsByCategorie, ICategory } from "Interfaces";
import { getTeamsInCategories, renderLink } from "Services";

import "./header.component.sass";

interface IHeaderComponentProps {
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
    }
}

export function HeaderComponent ({ data }: IHeaderComponentProps) {

    const [state, setState] = useState(false);
    const teamsByCategorie = getTeamsInCategories(data.categoriesOrder.categories, data.teams.nodes);

    const toggleNav = () => {
        setState((state: boolean) => {
            return !state;
        });
    };

    return (
        <header className="header">
            <div className="container">
                <nav className={state ? "header__nav header__nav--open" : "header__nav"}>
                    <ul className="header__list">
                        <li className="header__title header__mobile">
                            <h3>Menu</h3>
                            <button className="header__mobile header__close" onClick={toggleNav}><span/></button>
                        </li>
                        <li>
                            <Link className="text_menu" to="/equipes" activeClassName="active">Équipes</Link>
                            <ul className="header__dropdown">
                               {teamsByCategorie.map((element: IteamsByCategorie, index: number) => {
                                    element.teams.length > 0 && <HeaderLiTeamsComponent key={index} element={element} />;
                               })} 
                            </ul>
                        </li>
                        <li><Link className="text_menu" to="/medias" activeClassName="active">Médias</Link></li>
                        <li className="header__el_left"><Link className="text_menu" to="/boutique" activeClassName="active">Boutique</Link></li>
                        <li><Link className="text_menu" to="/contact" activeClassName="active">Contact</Link></li>
                    </ul>
                </nav>
                <Link to="/" className="header__logo"><img src={data.logo.sizes.src} srcSet={data.logo.sizes.srcSet} sizes={data.logo.sizes.sizes} alt="" title={data.site.siteName} /></Link>
                <button className="header__mobile header__burger" onClick={toggleNav}><span/></button>
            </div>
        </header>
    );
}

interface IHeaderLiTeamsProps {
    element: IteamsByCategorie
}

function HeaderLiTeamsComponent ({ element }: IHeaderLiTeamsProps) {
    return (
        <li>
            <div className="header__dropdown__teams--container">
                <p className="text_dropdown_title">{element.category.name}</p>
                <ul className="header__dropdown__teams">
                    {element.teams.map((team: ITeam, index: number) => (
                        renderLink(team, index, 'team', 'text_dropdown')
                    ))}
                </ul>
            </div>
        </li>
    );
}