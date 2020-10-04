import React from "react";
import { graphql } from "gatsby";
import { AsideComponent, CoverComponent, ImageComponent, LayoutComponent, ManagerComponent, TitleComponent } from "Components";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { IImage, IManager, ISEOTag } from "Interfaces";
import { LatLngExpression, Icon } from "leaflet";

import 'leaflet/dist/leaflet.css';

interface IContactPageProps {
    data: {
        page: {
            title: string,
            description: string,
            cover: {
                sizes: IImage,
            },
            seoMetaTags: {
                tags: ISEOTag[]
            },
            email: string,
            coversStade: {
                sizes: IImage,
            }[],
            president: IManager,
            presidentJeunes: IManager,
            localisation: {
                latitude: number,
                longitude: number
            },
            adresse: string
        },
    }
}


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

export default function Contact({ data }: IContactPageProps) {
    const position: LatLngExpression = [data.page.localisation.latitude, data.page.localisation.longitude];
    // const position: LatLngExpression = [51.5, -0.09];
    return (
        <LayoutComponent seo={data.page.seoMetaTags} name="contact">
            <React.Fragment>
                <CoverComponent title={data.page.title} image={data.page.cover.sizes} subtitle="" />
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
                                        {data.page.coversStade.map((image: { sizes: IImage}, index: number) => (
                                            <ImageComponent key={index} className="" image={image.sizes} />
                                        ))}
                                    </Slider>
                                    <address>
                                        <ReactMarkdown source={data.page.adresse} />
                                    </address>
                                    { typeof window !== 'undefined' ?
                                        <Map center={position} zoom={13}>
                                            <TileLayer
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                            />
                                            <Marker position={position} icon={pointerIcon} />
                                        </Map>
                                    : null }
                                </React.Fragment>
                            </AsideComponent>
                        </aside>
                    </div>
                </div>
            </React.Fragment>
        </LayoutComponent>
    );
};

const pointerIcon = new Icon({
    iconUrl: '/icons/pin.svg',
    iconRetinaUrl: '/icons/pin.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowAnchor: [20, 92],
  })
