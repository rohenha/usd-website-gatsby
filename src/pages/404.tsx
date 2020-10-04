import React from "react";
import { graphql } from "gatsby";
import { ButtonComponent, CoverComponent, LayoutComponent } from "Components";
import ReactMarkdown from "react-markdown";
import { IImage, ISEOTag } from "Interfaces";

interface I404PageProps {
    data: {
        page: {
            title: string,
            text: string,
            cover: {
                sizes: IImage,
            },
            seoMetaTags: {
                tags: ISEOTag[]
            }
        }
    }
}

export const query = graphql`
    query ErrorPage {
        page: datoCmsErrorPage {
            title
            cover {
                ...coverFragment
            }
            seoMetaTags {
                tags
            }
            text
        }
    }
`;

export default function Error({ data }: I404PageProps) {
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="Erreur 404">
            <React.Fragment>
                <CoverComponent title={data.page.title} image={data.page.cover.sizes} />
                <div className="page__container container">
                    <div className="row">
                        <div className="col-md-8 page__main">
                            <ReactMarkdown source={data.page.text} />
                            <ButtonComponent active link="/" type={1}><React.Fragment>Retourner à la page d'accueil</React.Fragment></ButtonComponent>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </LayoutComponent>
    );
};