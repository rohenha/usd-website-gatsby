import { IImage, IManager, IProduct, ISEOTag, ITeam } from 'Interfaces';

export interface IPage {
    title: string,
    description: string
}

export interface IPageCurrent extends IPage {
    seoMetaTags: {
        tags: ISEOTag[]
    },
    cover: {
        sizes: IImage
    }
}

export interface IContact extends IPageCurrent {
    email: string,
    coversStade: IImage,
    president: IManager,
    presidentJeunes: IManager,
    adresse: {
        latitude: number,
        longitude: number
    }
}

export interface IShop extends IPageCurrent {
    shopFile: {
        url: string
    }
}

export interface IMediasPage {
    page: IPageCurrent
}

export interface IMonClubPage {
    convocations: {
        file: {
            url: string
        },
        updatedAt: string
    }[],
    page: IPageCurrent
}

export interface IEquipesPage {
    page: IPageCurrent,
    teams: ITeam[]
}

export interface IContactPage {
    page: IContact
}

export interface IBoutiquePage {
    page: IShop,
    products: IProduct[]
}

export interface IEquipePage {
    team: ITeam
}