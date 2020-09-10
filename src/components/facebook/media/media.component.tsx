import * as React from 'react';

interface IFacebookMediaProps {
    media: any
}

export function FacebookMediaComponent({ media }: IFacebookMediaProps) {
    return (
        <article className="fb_media">
            <img src={media.webp_images[0].source} alt=""/>
        </article>
    );
}