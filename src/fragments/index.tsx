import { graphql } from "gatsby"

export const teamFragment = graphql`
    fragment teamFragment on DatoCmsTeam {
        name
        slug
        category {
            name
        }
    }
`;

export const teamHomeFragment = graphql`
    fragment teamHomeFragment on DatoCmsTeam {
        name
        slug
    }
`;

export const productFragment = graphql`
    fragment productFragment on DatoCmsProduct {
        name
        slug
        price
    }
`;

export const productWithImageFragment = graphql`
    fragment productWithImageFragment on DatoCmsProduct {
        ...productFragment
        cover {
            ...coverFragment
        }
    }
`;


export const responsiveImageFragment = graphql`
fragment responsiveImageFragment on DatoCmsFluid {
    srcSet
    sizes
    width
    height
    aspectRatio
    base64
    src
}
`;

export const coverFragment = graphql`
fragment coverFragment on DatoCmsFileField {
    sizes(sizes: "100vw", imgixParams: {w: "1440", maxW: 1440, fit: "clip", dpr: 1, auto: "compress"}) {
        ...responsiveImageFragment
    }
}
`;

export const managerFragment = graphql`
fragment managerFragment on DatoCmsManager {
    surname
    name
    email
    phone
    portrait {
        sizes(sizes: "100vw", imgixParams: {w: "1440", maxW: 1440, fit: "clip", dpr: 1, auto: "compress"}) {
            ...responsiveImageFragment
        }
    }
}
`;