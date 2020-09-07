import React from "react";
import { graphql } from "gatsby";
import { LayoutComponent } from "Components";

export default function Contact({ data }: any) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags}>
            <React.Fragment>
                <p>Page : {JSON.stringify(data.page, null, 2)}</p>
            </React.Fragment>
        </LayoutComponent>
    );
};

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