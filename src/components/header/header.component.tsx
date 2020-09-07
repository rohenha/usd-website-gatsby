import * as React from 'react';
import { Link } from "gatsby"
import { ICategory, IHeaderComponentProps, ITeam, ITeamMenu } from "Interfaces";

import "./header.component.sass";

export function HeaderComponent({ data }: IHeaderComponentProps) {
    const setTeamsByCategories = () => {
        return data.categoriesOrder.categories.map(getTeamsByCategories)
    };

    const getTeamsByCategories = (category: ICategory) => {
        const teams = data.teams.nodes.filter((team: ITeamMenu) => {
            return team.category.id == category.id;
        });
        teams.sort((a: ITeam, b: ITeam) => {
            return a.team.localeCompare(b.team);
        });
        return teams.map((team: ITeam, index: number) => {
            return (
                <li key={index}>
                    <Link className="text_menu" to={"/equipes/" + team.slug}>
                        {team.name}
                    </Link>
                </li>
            );
        })
    };
    return (
        <header>
            <div className="container">
                <nav>
                    {/* <Link href="/"><a><img src={menu.site.logo.url} alt="" title={menu.site.globalSeo.siteName} /></a></Link> */}
                    <ul>
                        <li>
                            <Link className="text_menu" to="/equipes">Équipes</Link>
                            <ul>
                                {setTeamsByCategories()}
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