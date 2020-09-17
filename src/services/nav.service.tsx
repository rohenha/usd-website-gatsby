import { ICategory, ITeam, ITeamMenu } from "Interfaces";
import { Link } from "gatsby";
import * as React from 'react';

export function getNavTeams(categories: ICategory[], teams: ITeam[] ) {
    return categories.map((category: ICategory) => {
        return getTeamsByCategories(category, teams).map((team: ITeam, index: number) => {
            return renderLink(team, index, 'name', '');
        });
    });
};

export function getTeamsInCategories(categories: ICategory[], teams: ITeam[] ) {
    return categories.map((category: ICategory) => {
        return {
            category,
            teams: getTeamsByCategories(category, teams)
        }
    });
};

export function getTeamsByCategories(category: ICategory, teams: ITeam[]) {
    const currentTeams = teams.filter((team: ITeam) => {
        return team.category.id == category.id;
    });
    currentTeams.sort((a: ITeam, b: ITeam) => {
        return a.team.localeCompare(b.team);
    });
    return currentTeams;
};

export function renderLink(team: ITeamMenu, index: number, attribute: string, className: string) {
    return (
        <li key={index}>
            <Link className={`text_menu ${className}`} to={"/equipes/" + team.slug} activeClassName="active">
                {team[attribute]}
            </Link>
        </li>
    );
};