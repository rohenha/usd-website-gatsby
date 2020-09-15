import React from "react";
import { graphql } from "gatsby";
import { AsideComponent, ButtonComponent, CoverComponent, LayoutComponent, ImageComponent, TitleComponent, ManagerComponent } from "Components";
import Slider from "react-slick";
import { IImage } from "Interfaces";
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
            images {
                ...coverFragment
            }
            linkFff
            division
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
                <CoverComponent big={false} title={data.team.name} image={data.team.cover.sizes} subtitle={data.team.division} />
                <div className="page__container container">
                    <div className="row">
                        <div className="col-md-8 page__main">
                            <div className="page_team__images page__section">
                                <Slider {...{
                                    dots: true,
                                    infinite: true,
                                    speed: 500,
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }}>
                                    <ImageComponent className="" image={data.team.cover.sizes} />
                                    {data.team.images.map((image: IImage, index: number) => (
                                        <ImageComponent key={index} className="" image={image.sizes} />
                                    ))}
                                </Slider>
                            </div>
                            <TitleComponent balise="h2" text="Effectif" />
                            {renderLine(data.team.firstLine, "Rang debout de gauche à droite")}
                            {renderLine(data.team.secondLine, "Rang assis de gauche à droite")}
                        </div>
                        <aside className="col-md-4">
                            <AsideComponent text="Entraîneur" link="" className="manager">
                                <React.Fragment>
                                    <ManagerComponent manager={data.team.manager} />
                                </React.Fragment>
                            </AsideComponent>
                            {data.team.linkFff ? 
                                <AsideComponent text="Classement" link="" className="classement">
                                    <ButtonComponent active={true} className="" link={data.team.linkFff} type={1} event={() => {}}><React.Fragment>Voir le classement</React.Fragment></ButtonComponent>
                                </AsideComponent> :
                                null
                            }
                        </aside>
                    </div>
                </div>
            </React.Fragment>
        </LayoutComponent>
    );
}