import React from "react";
import { graphql } from "gatsby";
import { LayoutComponent } from "Components";

export default function Product({ data }: any) {
  return (
    <LayoutComponent seo={data.product.seoMetaTags}>
      <React.Fragment>
        <p>Team : {JSON.stringify(data.product, null, 2)}</p>
      </React.Fragment>
    </LayoutComponent>
  )
}


export const query = graphql`
    query ProductPage($slug: String!) {
        product: datoCmsProduct(slug: {eq: $slug}) {
            ...productWithImageFragment
            sizes {
                name
            }
            seoMetaTags {
              tags
            }
        }
    }
`;