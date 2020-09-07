import React from "react";
import { graphql } from "gatsby";

export default function Team({ data }: any) {
  return (
    <React.Fragment>
      <p>Team : {JSON.stringify(data.team, null, 2)}</p>
    </React.Fragment>
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
            seo {
              title
              description
            }
        }
    }
`;