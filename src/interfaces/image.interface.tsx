export interface IImage {
    srcSet: string,
    sizes: string,
    src: string,
    width: string,
    height: string,
    aspectRatio: string,
    base64: string
}

export interface IImageComponentProps {
    className: string,
    image: IImage
}