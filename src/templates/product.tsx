import React from "react";
import { graphql } from "gatsby";

export default function Product({ data }: any) {
  return (
    <React.Fragment>
      <p>Team : {JSON.stringify(data.product, null, 2)}</p>
    </React.Fragment>
  )
}


export const query = graphql`
    query ProductPage($slug: String!) {
        product: datoCmsProduct(slug: {eq: $slug}) {
            ...productWithImageFragment
            sizes {
                name
            }
            seo {
              title
              description
            }
        }
    }
`;