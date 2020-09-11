import React from "react";
import { graphql } from "gatsby";
import { AsideComponent, ButtonComponent, CoverComponent, LayoutComponent, ImageComponent, TitleComponent } from "Components";

// interface IHomePageProps {
//   data: {
//       page: IPageCurrent,
//       teamsPage: IPage,
//       shopPage: IPage,
//       mediasPage: IPage,
//       products: {
//           nodes: IProduct[]
//       },
//       teams: {
//           nodes: ITeam[]
//       }
//   }
// }

export const query = graphql`
    query TeamPage($slug: String!) {
        team: datoCmsTeam(slug: {eq: $slug}) {
            ...teamFragment
            cover {
                ...coverFragment
            }
            manager {
                ...managerFragment
            }
            managers {
                ...managerFragment
            }
            firstLine
            secondLine
            seoMetaTags {
              tags
            }
        }
    }
`;

export default function Team({ data }: any) {

    const renderLine = (text: string, title: string) : React.ReactElement<any> => {
        if (text) {
            return (
                <React.Fragment>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </React.Fragment>
            );
        }

        return (<React.Fragment></React.Fragment>);
    };

    return (
        <LayoutComponent seo={data.team.seoMetaTags} name="team">
            <React.Fragment>
                <CoverComponent big={false} title={data.team.name} image={data.team.cover.sizes} />
                <div className="page__content container">
                    <div className="row">
                        <div className="col-md-8 mb-5 mb-md-0">
                            <div className="page_team__images">
                                <ImageComponent className="" image={data.team.cover.sizes} />
                            </div>
                            <TitleComponent balise="h2" text="Effectif" />
                            {renderLine(data.team.firstLine, "Rang debout de gauche à droite")}
                            {renderLine(data.team.secondLine, "Rang assis de gauche à droite")}
                        </div>
                        <aside className="col-md-3 offset-md-1">
                            <AsideComponent text="Dirigeant" link="" className="manager">
                                <React.Fragment />
                            </AsideComponent>
                            <AsideComponent text="Classement" link="" className="classement">
                                <ButtonComponent active={true} className="" link="/" type={1} event={() => {}}><React.Fragment>Voir le classement</React.Fragment></ButtonComponent>
                            </AsideComponent>
                        </aside>
                    </div>
                </div>
            </React.Fragment>
        </LayoutComponent>
    );
}