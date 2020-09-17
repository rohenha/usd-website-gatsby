import React from "react";
import { graphql } from "gatsby";
import { AsideComponent, CoverComponent, LayoutComponent, ProductComponent } from "Components";
import ReactMarkdown from "react-markdown";
import { IImage, IProduct, ISEOTag } from "Interfaces";

interface IShopPageProps {
  data: {
      page: {
        seoMetaTags: {
          tags: ISEOTag[]
        },
        title: string,
        shopFile: {
            url: string
        }
        description: string,
        cover: {
            sizes: IImage
        }
      },
      products: {
          nodes: IProduct[]
      }
  }
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
      description
      seoMetaTags {
        tags
      }
      cover {
          ...coverFragment
      }
    }
  }
`;

export default function Shop({ data }: IShopPageProps) {
  return (
    <LayoutComponent seo={data.page.seoMetaTags} name="shop">
      <React.Fragment>
        <CoverComponent title={data.page.title} image={data.page.cover.sizes} subtitle="" />
        <div className="page__container container">
            <div className="row">
                <div className="col-md-8 page__main">
                  <div className="page__section">
                    <ReactMarkdown source={data.page.description} />
                  </div>
                  <ul className="row">
                    {data.products.nodes.map((product: IProduct, index: number) => (
                        <li className="col-6 col-md-3" key={index}>
                          <ProductComponent product={product} text price sizes />
                        </li>
                    )) }
                  </ul>
                </div>
                <aside className="col-md-4">
                    <AsideComponent text="Bon de commande" link="" className="shop">
                        <a className="button button--primary" href={data.page.shopFile.url} target="_blank" download><span>télécharger le bon</span></a>
                    </AsideComponent>
                </aside>
            </div>
        </div>
      </React.Fragment>
    </LayoutComponent>
  )
}