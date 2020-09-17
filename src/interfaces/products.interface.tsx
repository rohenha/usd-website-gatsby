import { IImage } from 'Interfaces';

export interface IProduct {
    name: string,
    price: number,
    cover: {
        sizes: IImage
    },
    slug: string,
    sizes: {
        name: string
    }[]
}