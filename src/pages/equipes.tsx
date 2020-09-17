import React from "react";
import { graphql } from "gatsby";
import { CoverComponent, LayoutComponent, TeamArticleComponent, TitleComponent } from "Components";
import { getTeamsInCategories } from "Services";
import { ICategory, IteamsByCategorie, ITeam, ISEOTag, IImage } from "Interfaces";

interface ITeamsPageProps {
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
        categoriesOrder: {
            categories: ICategory[]
        },
        teams: {
            nodes: ITeam[]
        }
    }
}


export const query = graphql`
    query AboutPage {
        teams: allDatoCmsTeam {
            nodes {
                ...teamFragment
                team
                division
                category {
                    name
                    id
                }
                cover {
                    sizes(sizes: "500px", imgixParams: {w: "500", maxW: 500, fit: "clip", dpr: 1, auto: "compress"}) {
                        ...responsiveImageFragment
                    }
                }
                manager {
                    name
                    surname
                }
            }
        }
        categoriesOrder: datoCmsCategoriesOrder {
            categories {
                id
                slug
                name
            }
        }
        page: datoCmsTeamsPage {
            title
            cover {
                ...coverFragment
            }
            seoMetaTags {
                tags
            }
        }
    }
`;

export default function Teams({ data }: ITeamsPageProps) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="teams">
            <React.Fragment>
                <CoverComponent title={data.page.title} image={data.page.cover.sizes} subtitle="" />
                <div className="page__container container">
                    {getTeamsInCategories(data.categoriesOrder.categories, data.teams.nodes).map((element: IteamsByCategorie, index: number) => {
                        if (element.teams.length > 0) {
                            return (
                                <section className="page_teams__section page__section" key={index}>
                                    <TitleComponent balise="h2" text={element.category.name} />
                                    <ul className="row">
                                        {element.teams.map((team: ITeam, index: number) => (
                                            <div className="col-md-4" key={index}>
                                                <TeamArticleComponent team={team} />
                                            </div>
                                        ))}
                                    </ul>
                                </section>
                            );
                        } else {
                            return null;
                        }
                    })} 
                </div>
            </React.Fragment>
        </LayoutComponent>
    );
};