import React from "react";
import { graphql } from "gatsby";
import { CoverComponent, LayoutComponent, TeamArticleComponent, TitleComponent } from "Components";
import { getTeamsInCategories } from "Services";
import { IteamsByCategorie, ITeam } from "Interfaces";
// import { IPageCurrent, ITeam } from "Interfaces";

// interface ITeamsPageProps {
//     data: {
//         page: IPageCurrent,
//         teams: {
//             nodes: {
//                 name: string,
//                 slug: string,
//                 category: ICategory,
//                 team: string,
//                 managers: {
//                     name: string,
//                     surname: string
//                 }
//             }
//         }
//     }
// }


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

export default function Teams({ data }: any) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="teams">
            <React.Fragment>
                <CoverComponent big={false} title={data.page.title} image={data.page.cover.sizes} />
                <div className="page__content container">
                    {getTeamsInCategories(data.categoriesOrder.categories, data.teams.nodes).map((element: IteamsByCategorie, index: number) => {
                        if (element.teams.length > 0) {
                            return (
                                <React.Fragment key={index}>
                                    <TitleComponent balise="h2" text={element.category.name} />
                                    <ul className="row">
                                        {element.teams.map((team: ITeam, index: number) => (
                                            <div className="col-md-4" key={index}>
                                                <TeamArticleComponent team={team} />
                                            </div>
                                        ))}
                                    </ul>
                                </React.Fragment>
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
{/* <React.Fragment>
    <p>Teams : {JSON.stringify(data.teams, null, 2)}</p>
    <br/>
    <p>Page : {JSON.stringify(data.page, null, 2)}</p>
</React.Fragment> */}