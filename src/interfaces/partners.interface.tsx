import { IImage } from "Interfaces";

export interface IPartner {
    name: string,
    website: string,
    logo: {
        sizes: IImage
    }
}
