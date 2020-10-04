import * as React from 'react';
import { IFacebookImage, IFacebookPhoto } from "Interfaces";

interface IFacebookMediaProps {
    media: IFacebookPhoto
}

export function FacebookMediaComponent({ media }: IFacebookMediaProps) {

    const setSrcSet = function () {
        let content = "";
        media.webp_images.map((webpImage: IFacebookImage, index: number) => {
            if (index !== 0) {
                content += ",";
            }
            content += `${webpImage.source} ${webpImage.width}w`;
        })
        return content;
    };

    return (
        <article className="fb_media">
            <a href={media.link} target="_blank">
                <img src={media.webp_images[0].source} srcSet={setSrcSet()} alt={media.name}/>
            </a>
        </article>
    );
}