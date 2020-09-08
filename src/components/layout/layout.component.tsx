import { FooterComponent, HeaderComponent } from "Components";
import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { ILayoutComponentProps } from "Interfaces";

export function LayoutComponent({ children, seo, name }: ILayoutComponentProps) {
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
                                facebookPageUrl
                            }
                        }
                        logo: datoCmsAsset(basename: {eq: "logo"}) {
                            sizes(sizes: "(max-width: 768px) 60px, 60px", imgixParams: {fit: "clip", auto: "compress"}) {
                                srcSet
                                src
                                sizes
                            }
                        }
                    }
                `}
                render={data => {
                    return (
                        <React.Fragment>
                            <HelmetDatoCms seo={seo} favicon={data.site.faviconMetaTags} />
                            <HeaderComponent data={data} />
                            <main className={`page page_${name}`}>
                                {children}
                            </main>
                            <FooterComponent data={data} />
                        </React.Fragment>
                    );
                }}
            />
        </React.Fragment>
    );
}