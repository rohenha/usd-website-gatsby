import { ICategory, ITeam } from 'Interfaces';
export interface IHeaderComponentProps {
    data: {
        categoriesOrder: {
            categories: ICategory[]
        },
        teams: {
            nodes: ITeam[]
        }
    }
}

export interface IHeaderComponentState {
}
