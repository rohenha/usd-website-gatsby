import * as React from 'react';
import { IImageComponentProps } from "Interfaces";

export function ImageComponent({ className, image }: IImageComponentProps) {
    
    return (
        <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} className={className} alt=""/>
    );

};