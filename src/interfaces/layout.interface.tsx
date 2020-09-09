import { ICategory, IPartner, ITeam } from 'Interfaces';

export interface ILayoutComponentProps {
    seo: {
        tags: {
            tagName: string,
            content: string | undefined,
            attributes: {
                property: string | undefined,
                name: string | undefined,
                content: string
            }
        }[]
    },
    name: string,
    children: React.ReactElement<any>
}

export interface ILayoutComponentState {
}

export interface IHeaderComponentProps {
    data: {
        categoriesOrder: {
            categories: ICategory[]
        },
        teams: {
            nodes: ITeam[]
        },
        logo: {
            sizes: {
                srcSet: string,
                src: string,
                sizes: string
            }
        },
        site: {
            siteName: string,
            facebookPageUrl: string
        }
    }
}

export interface IHeaderComponentState {
    navState: boolean
}

export interface IFooterComponentProps {
    data: {
        categoriesOrder: {
            categories: ICategory[]
        },
        teams: {
            nodes: ITeam[]
        },
        logo: {
            sizes: {
                srcSet: string,
                src: string,
                sizes: string
            }
        },
        site: {
            siteName: string,
            facebookPageUrl: string
        }
        partners: {
            nodes : IPartner[]
        }
    }
}
