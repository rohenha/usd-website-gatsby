import * as React from 'react';
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

interface IHeaderComponentState {
    navState: boolean
}

export class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState> {
    private teamsByCategorie: IteamsByCategorie[];
    private constructor(props: IHeaderComponentProps) {
        super(props);
        this.teamsByCategorie = getTeamsInCategories(this.props.data.categoriesOrder.categories, this.props.data.teams.nodes);
        this.state = {
            navState: false
        };
    };

    private toggleNav = () => {
        this.setState({
            navState: !this.state.navState
        });
    };
    
    public render(): React.ReactElement<any> {
        return (
            <header className="header">
                <div className="container">
                    <nav className={this.state.navState ? "header__nav header__nav--open" : "header__nav"}>
                        <ul className="header__list">
                            <li className="header__title header__mobile">
                                <h3>Menu</h3>
                                <button className="header__mobile header__close" onClick={this.toggleNav}><span/></button>
                            </li>
                            <li>
                                <Link className="text_menu" to="/equipes" activeClassName="active">Équipes</Link>
                                <ul className="header__dropdown">
                                   {this.teamsByCategorie.map((element: IteamsByCategorie, index: number) => {
                                       if (element.teams.length > 0) {
                                           return (
                                               <li key={index}>
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
                                       } else {
                                           return null;
                                       }
                                   })} 
                                </ul>
                            </li>
                            <li><Link className="text_menu" to="/medias" activeClassName="active">Médias</Link></li>
                            <li className="header__el_left"><Link className="text_menu" to="/boutique" activeClassName="active">Boutique</Link></li>
                            <li><Link className="text_menu" to="/contact" activeClassName="active">Contact</Link></li>
                            {/* <li><Link className="text_menu" to="/mon-club" activeClassName="active">Mon club</Link></li> */}
                        </ul>
                    </nav>
                    <Link to="/" className="header__logo"><img src={this.props.data.logo.sizes.src} srcSet={this.props.data.logo.sizes.srcSet} sizes={this.props.data.logo.sizes.sizes} alt="" title={this.props.data.site.siteName} /></Link>
                    <button className="header__mobile header__burger" onClick={this.toggleNav}><span/></button>
                </div>
            </header>
        );
    }
}