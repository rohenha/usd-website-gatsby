import React from "react";
import { graphql } from "gatsby";

export default function Shop({ data }: any) {
  return (
    <React.Fragment>
      <p>Page : {JSON.stringify(data.page, null, 2)}</p>
      <br/>
      <p>Produits : {JSON.stringify(data.products, null, 2)}</p>
    </React.Fragment>
  )
}


export const query = graphql`
    query ShopPage {
    products: allDatoCmsProduct {
        nodes {
            ...productWithImageFragment
            sizes {
                name
            }
        }
    }
    page: datoCmsShopPage {
        title
        shopFile {
            url
        }
        seo {
          title
          description
        }
        cover {
            ...coverFragment
        }
    }
  }
`;