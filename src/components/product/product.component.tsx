import * as React from 'react';
import { IProduct } from "Interfaces";
import { ImageComponent } from 'Components';

import './product.component.sass';
import { Link } from 'gatsby';

interface IProductComponentProps {
    product: IProduct,
    className?: string,
    link?: boolean,
    text?: boolean,
    price?: boolean,
    sizes?: boolean
}

export function ProductComponent({ className, link, price, text, product, sizes }: IProductComponentProps) {

    const renderContent = (): React.ReactElement<any> => {
        return <React.Fragment>
            <div className="product__image">
                <ImageComponent className="" image={product.cover.sizes} />
            </div>
            {text ?
                <h4>{product.name}</h4>
                : null}
            {sizes ?
                <p className="text_product_sizes product__sizes">{product.sizes.map((size: { name: string}, index: number) => (
                    <span key={index}>{size.name}</span>
                ))}</p>
                : null}
            {price ?
                <p className="text_product_price product__price"><span>{product.price}€</span></p>
                : null}
        </React.Fragment>
    };
    return (<div className={`product ${className && className !== "" ? ` ${className}` : null}`}>
        {link ?
            <Link to={"boutique/" + product.slug}>{renderContent()}</Link>
            : renderContent()
        }
    </div>);
};