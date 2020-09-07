import { HeaderComponent } from "Components";
import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { ICategory, ILayoutComponentProps, ITeam } from "Interfaces";

import "../../styles/site.sass";

export function LayoutComponent({ children, seo }: ILayoutComponentProps) {
    return (
        <React.Fragment>
            <StaticQuery 
                query = {graphql`
                    query LayoutQuery {
                        categoriesOrder: datoCmsCategoriesOrder {
                            categories {
                                id
                                slug
                                name
                            }
                        }
                        teams: allDatoCmsTeam(sort: {fields: team, order: ASC}) {
                            nodes {
                                ...teamFragment
                                team
                                category {
                                    id
                                }
                            }
                        }
                        site: datoCmsSite {
                            faviconMetaTags {
                                tags
                            }
                            globalSeo {
                                siteName
                            }
                        }
                        logo: datoCmsAsset(basename: {eq: "logo"}) {
                            url
                        }
                    }
                `}
                render={data => {
                    return (
                        <React.Fragment>
                            <HelmetDatoCms seo={seo} favicon={data.site.faviconMetaTags} />
                            <HeaderComponent data={data} />
                            <main>
                                {children}
                            </main>
                        </React.Fragment>
                    );
                }}
            />
        </React.Fragment>
    );
}