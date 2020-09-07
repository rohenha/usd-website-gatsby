import React from "react";
import { graphql } from "gatsby";

export default function Contact({ data }: any) {
    return (
        <React.Fragment>
            <p>Page : {JSON.stringify(data.page, null, 2)}</p>
        </React.Fragment>
    );
};

export const query = graphql`
    query ContactPage {
        page: datoCmsContactPage {
            title
            cover {
                ...coverFragment
            }
            seo {
                title
                description
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