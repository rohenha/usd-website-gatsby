import * as React from 'react';
import { IPartner, IPartnersComponentProps } from "Interfaces";
import { ImageComponent } from "Components";

import "./partners.component.sass";

export function PartnersComponent({ partners }: IPartnersComponentProps) {
    return (
        <div className="partners">
            <div className="container">
                <h3>Partenaires</h3>
                <ul>
                    {partners.map((partner: IPartner, index: number) => (
                        <li key={index}>
                            {partner.website !== "" ?
                                <a href={partner.website} target="_blank">
                                    <ImageComponent className="" image={partner.logo.sizes} />
                                </a> :
                                <ImageComponent className="" image={partner.logo.sizes} />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}