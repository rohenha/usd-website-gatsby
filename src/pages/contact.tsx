import React from "react";
import { graphql } from "gatsby";
import { LayoutComponent } from "Components";

// interface IHomePageProps {
//     data: {
//         page: IPageCurrent,
//         teamsPage: IPage,
//         shopPage: IPage,
//         mediasPage: IPage,
//         products: {
//             nodes: IProduct[]
//         },
//         teams: {
//             nodes: ITeam[]
//         }
//     }
// }


export const query = graphql`
    query ContactPage {
        page: datoCmsContactPage {
            title
            cover {
                ...coverFragment
            }
            seoMetaTags {
                tags
            }
            email
            coversStade {
                sizes(sizes: "500px", imgixParams: {w: "500", maxW: 500, fit: "clip", dpr: 1, auto: "compress"}) {
                    ...responsiveImageFragment
                }
            }
            president {
                ...managerFragment
            }
            presidentJeunes {
                ...managerFragment
            }
            adresse {
                latitude
                longitude
            }
        }
    }
`;

export default function Contact({ data }: any) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="contact">
            <React.Fragment>
                <p>Page : {JSON.stringify(data.page, null, 2)}</p>
            </React.Fragment>
        </LayoutComponent>
    );
};
