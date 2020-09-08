import React from "react";
import { graphql } from "gatsby";
import { 
    CoverComponent,
    LayoutComponent
} from "Components";
import { getFacebookContent } from "Services";

export default function Home({ data }: any) {
    const getFacebookPosts = () => {
        getFacebookContent("posts.limit(10).offset(0){message,full_picture,permalink_url}")
        .then((res: any) => {
            console.log(res);
        });
    };
    getFacebookPosts();
    return (
        <LayoutComponent seo={data.page.seoMetaTags}>
            <React.Fragment>
                <CoverComponent title={data.page.title} image={data.page.cover.sizes} />
                <p>Teams : {JSON.stringify(data.teams, null, 2)}</p>
                <br/>
                <p>Page : {JSON.stringify(data.page, null, 2)}</p>
                <br/>
                <p>Produits : {JSON.stringify(data.products, null, 2)}</p>
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
        products: allDatoCmsProduct {
            edges {
                node {
                    ...productFragment
                    cover {
                        sizes(sizes: "500px", imgixParams: {w: "500", maxW: 500, fit: "clip", dpr: 1, auto: "compress"}) {
                            ...responsiveImageFragment
                        }
                    }
                }
            }
        }
    }
`;