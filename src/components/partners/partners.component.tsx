import * as React from 'react';
import { IPartner } from "Interfaces";
import { ImageComponent } from "Components";

import "./partners.component.sass";

interface IPartnersComponentProps {
    partners: IPartner[]
}

export function PartnersComponent({ partners }: IPartnersComponentProps) {

    const renderContent = (partner: IPartner) => {
        if (partner.logo.sizes) {
            return <ImageComponent className="" image={partner.logo.sizes} />
        }
        return <h4>{partner.name}</h4>;
    };

    return (
        <div className="partners">
            <div className="container">
                <h3>Partenaires</h3>
                <ul>
                    {partners.map((partner: IPartner, index: number) => (
                        <li key={index}>
                            <div className="partners__box">
                                {partner.website !== "" ?
                                    <a href={partner.website} target="_blank">
                                        {renderContent(partner)}
                                    </a> :
                                    <React.Fragment>{renderContent(partner)}</React.Fragment>
                                }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}