import * as React from 'react';
import { Link } from "gatsby";
import { IHeaderComponentProps, IHeaderComponentState } from "Interfaces";
import { getNavTeams } from "Services";

import "./header.component.sass";

export class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState> {
    private constructor(props: IHeaderComponentProps) {
        super(props);
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
            <header id="header">
                <div className="container">
                    <nav className={this.state.navState ? "header__list--open" : ""}>
                        <ul className="header__list">
                            <li className="header__title header__mobile"><h3>Menu</h3></li>
                            <li>
                                <Link className="text_menu" to="/equipes">Équipes</Link>
                                <ul className="header__dropdown">
                                    {getNavTeams(this.props.data.categoriesOrder.categories, this.props.data.teams.nodes)}
                                </ul>
                            </li>
                            <li><Link className="text_menu" to="/medias">Médias</Link></li>
                            <li><Link className="text_menu" to="/contact">Contact</Link></li>
                            <li className="header__el_left"><Link className="text_menu" to="/boutique">Boutique</Link></li>
                            <li><Link className="text_menu" to="/mon-club">Mon club</Link></li>
                        </ul>
                    </nav>
                    <Link to="/" className="header__logo"><img src={this.props.data.logo.sizes.src} srcSet={this.props.data.logo.sizes.srcSet} sizes={this.props.data.logo.sizes.sizes} alt="" title={this.props.data.site.siteName} /></Link>
                    <button className="header__mobile header__burger" onClick={this.toggleNav}>burger</button>
                </div>
            </header>
        );
    }
}