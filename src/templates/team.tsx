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

export default function Team({ data }: any) {
  return (
    <LayoutComponent seo={data.team.seoMetaTags} name="team">
      <React.Fragment>
        <p>Team : {JSON.stringify(data.team, null, 2)}</p>
      </React.Fragment>
    </LayoutComponent>
  )
}