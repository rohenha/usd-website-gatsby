import { IImage } from "Interfaces";

export interface IPartner {
    name: string,
    logo: {
        size: IImage
    }
}


export interface IPartnersComponentProps {
    partners: IPartner[]
}
