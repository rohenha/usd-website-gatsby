import * as React from 'react';
import { IImage } from "Interfaces";

interface IImageComponentProps {
    className?: string,
    image: IImage
}

export function ImageComponent({ className, image }: IImageComponentProps) {
    
    return (
        <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} className={className} alt=""/>
    );

};