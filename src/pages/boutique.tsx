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
        seoMetaTags {
          tags
        }
        cover {
            ...coverFragment
        }
    }
  }
`;

export default function Shop({ data }: any) {
  return (
    <LayoutComponent seo={data.page.seoMetaTags} name="shop">
      <React.Fragment>
        <p>Page : {JSON.stringify(data.page, null, 2)}</p>
        <br/>
        <p>Produits : {JSON.stringify(data.products, null, 2)}</p>
      </React.Fragment>
    </LayoutComponent>
  )
}