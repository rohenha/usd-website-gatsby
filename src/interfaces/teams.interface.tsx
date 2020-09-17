import { ICategory, IManager } from "Interfaces";
import { IImage, ISEOTag } from "Interfaces";

export interface ITeamHome {
    name: string,
    slug: string,
}

export interface ITeamMenu extends ITeamHome {
    team: string,
    category: ICategory
}

export interface ITeam extends ITeamMenu {
    cover: {
        sizes: IImage
    },
    manager: IManager,
    division: string
}

export interface ITeamPage extends ITeam {
    managers: IManager[],
    linkFff: string,
    firstLine: string,
    secondLine: string,
    images: {
        sizes: IImage,
    }[],
    seoMetaTags: {
        tags: ISEOTag[]
    }
}

export interface IteamsByCategorie {
    category: ICategory,
    teams: ITeam[]
}