export interface IDatocms {
    query: string,
    variables: any,
    preview: boolean
}

export interface IFacebookImage {
    height: number,
    width: number,
    source: string
}

export interface IFacebookPhoto {
    link: string,
    name: string,
    webp_images: IFacebookImage[]
}