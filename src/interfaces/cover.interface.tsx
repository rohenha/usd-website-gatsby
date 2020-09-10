export interface ICoverComponentProps {
    title: string,
    big: boolean,
    image: {
        srcSet: string,
        sizes: string,
        width: string,
        height: string,
        aspectRatio: string,
        base64: string,
        src: string
    }
}