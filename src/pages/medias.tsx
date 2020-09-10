import React from "react";
import { graphql } from "gatsby";
import { LayoutComponent } from "Components";
import { IPageCurrent } from "Interfaces";

interface IMediasPageProps {
    data: {
        page: IPageCurrent
    }
}

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

export default function Medias({ data }: IMediasPageProps) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="medias">
            <React.Fragment>
                <p>Page : {JSON.stringify(data.page, null, 2)}</p>
            </React.Fragment>
        </LayoutComponent>
    );
};