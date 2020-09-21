import React from "react";
import { graphql } from "gatsby";
import { CoverComponent, LayoutComponent, FacebookMediasContainerComponent } from "Components";
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
                <CoverComponent title={data.page.title} image={data.page.cover.sizes} />
                <FacebookMediasContainerComponent number={4} loadMore columns={{ mobile: 3, desktop: 3}} />
            </React.Fragment>
        </LayoutComponent>
    );
};