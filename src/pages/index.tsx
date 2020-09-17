import React from "react";
import { graphql, Link } from "gatsby";
import { 
    AsideComponent,
    ButtonComponent,
    CoverComponent,
    FacebookMediasContainerComponent,
    FacebookPostsContainerComponent,
    LayoutComponent,
    TitleComponent,
    ProductComponent
} from "Components";
import { IProduct, ITeamHome, IPage, ISEOTag, IImage } from "Interfaces";

interface IHomePageProps {
    data: {
        page: {
            seoMetaTags: {
                tags: ISEOTag[]
            },
            title: string,
            cover: {
                sizes: IImage
            }
        },
        teamsPage: IPage,
        shopPage: {
            title: string,
            homeDescription: string,
            shopFile: {
                url: string
            }
        },
        mediasPage: IPage,
        products: {
            nodes: IProduct[]
        },
        teams: {
            nodes: ITeamHome[]
        }
    }
}

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
            homeDescription
            shopFile {
                url
            }
        }
        mediasPage: datoCmsShopPage {
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

export default function Home({ data }: IHomePageProps) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="home" >
            <React.Fragment>
                <CoverComponent big title={data.page.title} image={data.page.cover.sizes} />
                <div className="page__container container">
                    <div className="row">
                        <div className="col-md-8 page__main">
                            <TitleComponent balise="h2" text="Actualité" />
                            <FacebookPostsContainerComponent />
                        </div>
                        <aside className="col-md-4">
                            <AsideComponent text="Équipes" link="/equipes" className="teams">
                                <ul>
                                    {data.teams.nodes.map((team: ITeamHome, index: number) => (
                                        <li key={index}><Link to={"equipes/" + team.slug}><h3>{team.name}</h3></Link></li>
                                    )) }
                                </ul>
                            </AsideComponent>
                            <AsideComponent text="Médias" link="/medias" className="medias">
                                <React.Fragment>
                                    {/* <FacebookMediasContainerComponent number={16} loadMore={false} /> */}
                                    <ButtonComponent active className="aside_section__link" link="/medias" type={2}><React.Fragment>Voir plus de médias</React.Fragment></ButtonComponent>
                                </React.Fragment>
                            </AsideComponent>
                            <AsideComponent text="Boutique" link="" className="shop">
                                    <React.Fragment>
                                        <p>{data.shopPage.homeDescription}</p>
                                        <a className="button button--primary" href={data.shopPage.shopFile.url} download><span>Bon de commande</span></a>
                                        <ul className="row">
                                            {data.products.nodes.map((product: IProduct, index: number) => (
                                                <li key={index} className="col-4">
                                                    <ProductComponent product={product} />
                                                </li>
                                            )) }
                                        </ul>
                                        <ButtonComponent active className="aside_section__link" link="/boutique" type={2} ><React.Fragment>Voir la boutique</React.Fragment></ButtonComponent>
                                    </React.Fragment>
                            </AsideComponent>
                        </aside>
                    </div>
                </div>
            </React.Fragment>
        </LayoutComponent>
    );
};