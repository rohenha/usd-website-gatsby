import * as React from 'react';
import { Link } from "gatsby"
import { IHeaderComponentProps, ITeamMenu } from "Interfaces";

import "./header.component.sass";

export function HeaderComponent({ data }: IHeaderComponentProps) {
    return (
        <header>
            <div className="container">
                <nav>
                    {/* <Link href="/"><a><img src={menu.site.logo.url} alt="" title={menu.site.globalSeo.siteName} /></a></Link> */}
                    <ul>
                        <li>
                            <Link className="text_menu" to="/equipes">Équipes</Link>
                            <ul>
                                {data.teams.map((team: ITeamMenu, index: number) => (
                                    <li key={index}>
                                        <Link className="text_menu" to={"/equipes/" + team.slug}>
                                            {team.name}
                                        </Link>
                                    </li>
                                ))}
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