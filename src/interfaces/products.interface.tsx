import { IImage } from 'Interfaces';

export interface IProduct {
    name: string,
    price: number,
    cover: IImage,
    slug: string,
    sizes: {
        name: string
    }
}