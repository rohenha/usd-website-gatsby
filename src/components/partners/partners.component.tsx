import * as React from 'react';
import { IPartner, IPartnersComponentProps } from "Interfaces";

import "./partners.component.sass";

export function PartnersComponent({ partners }: IPartnersComponentProps) {
    return (
        <div className="partners">
            <div className="container">
                <h3>Partenaires</h3>
                <ul>
                    {partners.map((partner: IPartner, index: number) => (
                        <li key={index}>{partner.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}