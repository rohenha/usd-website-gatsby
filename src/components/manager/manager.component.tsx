import * as React from 'react';
import { IManager } from 'Interfaces';
import { ImageComponent } from "Components";

import "./manager.component.sass";


interface IManagerComponentProps {
    manager: IManager
}

export function ManagerComponent({ manager }: IManagerComponentProps) {
    
    return (
        <section className="manager">
            <div className="manager__portrait">
                <ImageComponent className="" image={manager.portrait.sizes} />
            </div>
            <h3>{`${manager.surname} ${manager.name}`}</h3>
            <h4>Adresse email</h4>
            <p>{manager.email}</p>
            <h4>Numéro de téléphone</h4>
            <p>{manager.phone}</p>
        </section>
    );
}