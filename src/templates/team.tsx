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
            seoMetaTags {
              tags
            }
        }
    }
`;

export default function Team({ data }: any) {
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
                        <h4>2ème rang de Gauche à droite</h4>
                        <p>Jean Noel Roinet, Jean-Christophe Tricot, Alain Chauvin, MAxime Chevreux, Jean-Philippe Bruant, Julien Godrefroy, Antoine Chevreux, François Martineau, Valentin Geslin, Jean-Luc Gaulin</p>
                        <h4>1er rang de Gauche à droite</h4>
                        <p>Jean Noel Roinet, Jean-Christophe Tricot, Alain Chauvin, MAxime Chevreux, Jean-Philippe Bruant, Julien Godrefroy, Antoine Chevreux, François Martineau, Valentin Geslin, Jean-Luc Gaulin</p>
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
  )
}