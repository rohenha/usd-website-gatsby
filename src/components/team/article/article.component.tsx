import React from "react";
import { Link } from "gatsby";
import { ITeam } from "Interfaces";

import "./article.component.sass";
import { ImageComponent } from "src/components/image/image.component";

interface ITeamArticleProps {
    team: ITeam
}

export function TeamArticleComponent({ team }: ITeamArticleProps) {
    return (
        <div className="team_article">
            <Link to={`${team.slug}`}>
                <ImageComponent className="" image={team.cover.sizes}  />
                <p className="text_division team_article__division">{team.division}</p>
                <h3>{team.name}</h3> 
                <p className="team_article__manager">Dirigé par <span>{team.manager.name} {team.manager.surname}</span></p>
            </Link>
        </div>
    );
};