import React from "react";
import { graphql } from "gatsby";
import { AsideComponent, CoverComponent, ImageComponent, LayoutComponent, ManagerComponent, TitleComponent } from "Components";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { IImage } from "Interfaces";

// interface IHomePageProps {
//     data: {
//         page: IPageCurrent,
//         teamsPage: IPage,
//         shopPage: IPage,
//         mediasPage: IPage,
//         products: {
//             nodes: IProduct[]
//         },
//         teams: {
//             nodes: ITeam[]
//         }
//     }
// }


export const query = graphql`
    query ContactPage {
        page: datoCmsContactPage {
            title
            description
            cover {
                ...coverFragment
            }
            seoMetaTags {
                tags
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
            localisation {
                latitude
                longitude
            }
            adresse
        }
    }
`;

export default function Contact({ data }: any) {
    const position = [data.page.localisation.latitude, data.page.localisation.longitude];
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="contact">
            <React.Fragment>
                <CoverComponent big={false} title={data.page.title} image={data.page.cover.sizes} subtitle="" />
                <div className="page__container container">
                    <div className="row">
                        <div className="col-md-8 page__main">
                            <div className="page_contact__description page__section">
                                <ReactMarkdown source={data.page.description} />
                                <a className="page_contact__email" href={`mailto:${data.page.email}`}><h3>{data.page.email}</h3></a>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <TitleComponent balise="h2" text="Président général" />
                                    <ManagerComponent manager={data.page.president} />
                                </div>
                                <div className="col-md-6">
                                    <TitleComponent balise="h2" text="Président jeunes" />
                                    <ManagerComponent manager={data.page.presidentJeunes} />
                                </div>
                            </div>
                        </div>
                        <aside className="col-md-4">
                            <AsideComponent text="Stade" link="" className="stadium">
                                <React.Fragment>
                                    <Slider {...{
                                        dots: true,
                                        infinite: true,
                                        speed: 500,
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }}>
                                        {data.page.coversStade.map((image: IImage, index: number) => (
                                            <ImageComponent key={index} className="" image={image.sizes} />
                                        ))}
                                    </Slider>
                                    <address>
                                        <ReactMarkdown source={data.page.adresse} />
                                    </address>
                                    {/* <Map center={position} zoom={13}>
                                        <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                        />
                                        <Marker position={position}>
                                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                                        </Marker>
                                    </Map> */}
                                </React.Fragment>
                            </AsideComponent>
                        </aside>
                    </div>
                </div>
            </React.Fragment>
        </LayoutComponent>
    );
};
