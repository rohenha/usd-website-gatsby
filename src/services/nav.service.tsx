import { ICategory, ITeam, ITeamMenu } from "Interfaces";
import { Link } from "gatsby";
import * as React from 'react';

export function getNavTeams(categories: ICategory[], teams: ITeam[] ) {
    return categories.map((category: ICategory) => {
        return getTeamsByCategories(category, teams);
    });
}

export function getTeamsByCategories(category: ICategory, teams: ITeam[]) {
    const currentTeams = teams.filter((team: ITeamMenu) => {
        return team.category.id == category.id;
    });
    currentTeams.sort((a: ITeam, b: ITeam) => {
        return a.team.localeCompare(b.team);
    });
    return currentTeams.map((team: ITeam, index: number) => {
        return (
            <li key={index}>
                <Link className="text_menu" to={"/equipes/" + team.slug}>
                    {team.name}
                </Link>
            </li>
        );
    })
}