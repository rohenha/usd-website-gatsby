import React from "react";
import { graphql } from "gatsby";

export default function Medias({ data }: any) {
    return (
        <React.Fragment>
            <p>Page : {JSON.stringify(data.page, null, 2)}</p>
        </React.Fragment>
    );
};

export const query = graphql`
    query MediasPage {
        page: datoCmsMediasPage {
            title
            cover {
                ...coverFragment
            }
            seo {
                title
                description
            }
        }
    }
`;