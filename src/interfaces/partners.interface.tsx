import { IImage } from "Interfaces";

export interface IPartner {
    name: string,
    website: string,
    logo: {
        sizes: IImage
    }
}


export interface IPartnersComponentProps {
    partners: IPartner[]
}
