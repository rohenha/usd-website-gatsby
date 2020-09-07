import { ICategory, ITeamMenu } from 'Interfaces';
export interface IHeaderComponentProps {
    data: {
        categoriesOrder: {
            categories: ICategory[]
        },
        teams: ITeamMenu[]
    }
}

export interface IHeaderComponentState {
}
