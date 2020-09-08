import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { 
    AsideComponent,
    CoverComponent,
    FacebookMediasContainerComponent,
    FacebookPostsContainerComponent,
    LayoutComponent,
    TitleComponent,
    ImageComponent
} from "Components";
import { IProduct, ITeam } from "Interfaces";

export default function Home({ data }: any) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="home" >
            <React.Fragment>
                <CoverComponent title={data.page.title} image={data.page.cover.sizes} />
                <div className="page__content container">
                    <div className="row">
                        <div className="col-md-8">
                            <TitleComponent balise="h2" text="Actualité" />
                            <FacebookPostsContainerComponent />
                            {/* <p>Teams : {JSON.stringify(data.teams, null, 2)}</p>
                            <br/>
                            <p>Page : {JSON.stringify(data.page, null, 2)}</p>
                            <br/>
                            <p>Produits : {JSON.stringify(data.products, null, 2)}</p> 
                            */}
                        </div>
                        <aside className="col-md-3 offset-md-1">
                            <AsideComponent text="Équipes" link="/equipes" className="teams">
                                <ul>
                                    {data.teams.nodes.map((team: ITeam, index: number) => (
                                        <li key={index}><Link to={"equipes/" + team.slug}><h3>{team.name}</h3></Link></li>
                                    )) }
                                </ul>
                            </AsideComponent>
                            <AsideComponent text="Médias" link="/medias" className="medias">
                                <React.Fragment>
                                    {/* <FacebookMediasContainerComponent number={16} loadMore={false} /> */}
                                    <Link className="aside_section__link" to="/medias">Voir plus de médias</Link>
                                </React.Fragment>
                            </AsideComponent>
                            <AsideComponent text="Boutique" link="/boutique" className="shop">
                                    <React.Fragment>
                                        <p>{data.shopPage.description}</p>
                                        <ul>
                                        {data.products.nodes.map((product: IProduct, index: number) => (
                                            <li key={index}><Link to={"boutique/" + product.slug}>
                                                <ImageComponent image={product.cover.sizes} /></Link>
                                            </li>
                                        )) }
                                        </ul>
                                        <Link className="aside_section__link" to="/boutique">Voir la boutique</Link>
                                    </React.Fragment>
                            </AsideComponent>
                        </aside>
                    </div>
                </div>
            </React.Fragment>
        </LayoutComponent>
    );
};

export const query = graphql`
    query HomePage {
        teams: allDatoCmsTeam {
            nodes {
                ...teamFragment
            }
        }
        page: datoCmsHomePage {
            title
            cover {
                ...coverFragment
            }
            seoMetaTags {
                tags
            }
        }
        teamsPage: datoCmsTeamsPage {
            title
        }
        shopPage: datoCmsShopPage {
            title
            description
        }
        products: allDatoCmsProduct(limit: 3) {
            nodes {
                ...productFragment
                cover {
                    sizes(sizes: "500px", imgixParams: {w: "500", maxW: 500, fit: "clip", dpr: 1, auto: "compress"}) {
                        ...responsiveImageFragment
                    }
                }
            }
        }
    }
`;