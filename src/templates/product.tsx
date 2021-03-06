import React from "react";
import { graphql } from "gatsby";
import { LayoutComponent } from "Components";

// interface IHomePageProps {
//   data: {
//       page: IPageCurrent,
//       teamsPage: IPage,
//       shopPage: IPage,
//       mediasPage: IPage,
//       products: {
//           nodes: IProduct[]
//       },
//       teams: {
//           nodes: ITeam[]
//       }
//   }
// }

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

export default function Product({ data }: any) {
  return (
    <LayoutComponent seo={data.product.seoMetaTags} name="product">
      <React.Fragment>
        <p>Team : {JSON.stringify(data.product, null, 2)}</p>
      </React.Fragment>
    </LayoutComponent>
  )
}

