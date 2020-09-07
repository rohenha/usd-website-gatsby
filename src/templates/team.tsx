import React from "react";
import { graphql } from "gatsby";
import { LayoutComponent } from "Components";

export default function Team({ data }: any) {
  return (
    <LayoutComponent seo={data.page.seoMetaTags}>
      <React.Fragment>
        <p>Team : {JSON.stringify(data.team, null, 2)}</p>
      </React.Fragment>
    </LayoutComponent>
  )
}


export const query = graphql`
    query TeamPage($slug: String!) {
        team: datoCmsTeam(slug: {eq: $slug}) {
            ...teamFragment
            cover {
                ...coverFragment
            }
            manager {
                ...managerFragment
            }
            managers {
                ...managerFragment
            }
            seoMetaTags {
              tags
            }
        }
    }
`;