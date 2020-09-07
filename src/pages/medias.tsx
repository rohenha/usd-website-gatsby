import React from "react";
import { graphql } from "gatsby";
import { LayoutComponent } from "Components";

export default function Medias({ data }: any) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags}>
            <React.Fragment>
                <p>Page : {JSON.stringify(data.page, null, 2)}</p>
            </React.Fragment>
        </LayoutComponent>
    );
};

export const query = graphql`
    query MediasPage {
        page: datoCmsMediasPage {
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