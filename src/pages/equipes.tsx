import React from "react";
import { graphql } from "gatsby";
import { LayoutComponent } from "Components";

export default function Teams({ data }: any) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags}>
            <React.Fragment>
                <p>Teams : {JSON.stringify(data.teams, null, 2)}</p>
                <br/>
                <p>Page : {JSON.stringify(data.page, null, 2)}</p>
            </React.Fragment>
        </LayoutComponent>
    );
};

export const query = graphql`
    query AboutPage {
        teams: allDatoCmsTeam {
            nodes {
                ...teamFragment
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