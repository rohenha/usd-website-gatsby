import React from "react";
import { graphql } from "gatsby";
import { CoverComponent, LayoutComponent } from "Components";
import { IPageCurrent } from "Interfaces";

// interface IMediasPageProps {
//     data: {
//         page: IPageCurrent
//     }
// }

export const query = graphql`
    query ErrorPage {
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

export default function Error({ data }: any) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="404">
            <React.Fragment>
                <CoverComponent big title={data.page.title} image={data.page.cover.sizes} />
                <p>Page : {JSON.stringify(data.page, null, 2)}</p>
            </React.Fragment>
        </LayoutComponent>
    );
};