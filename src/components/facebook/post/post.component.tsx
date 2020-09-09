import * as React from 'react';
import { IFacebookPostProps } from "Interfaces";
import moment from 'moment';
import "moment/locale/fr";

import "./post.component.sass";

export function FacebookPostComponent({ post }: IFacebookPostProps) {
    const date = moment(post.created_time).locale('fr');
    const textConverted = post.message ? post.message.replace(/\n/g, '<br/>') : post.message;

    const setClass = () => {
        let className = "fb_post";

        if (post.full_picture !== "") {
            className += " fb_post--image";

            if (!textConverted) {
                className += " fb_post--withoutText";
            }
        }

        return className;
    };

    return (
        <div className="col-md-6 fb_post--container">
            <article className={setClass()}>
                <a href={post.permalink_url} target="_blank">
                    {post.full_picture !== "" ? 
                        <img src={post.full_picture} alt=""/> :
                        null
                    }
                    <h4>Le {date.format("DD MMMM YYYY, à HH:mm")}</h4>
                    {textConverted ?
                        <p dangerouslySetInnerHTML={{__html: textConverted}} /> :
                        null
                    }
                    <div className="fb_post__facebook">
                        <img src={'/socials/facebook--white.png'} alt=""/>
                    </div>
                </a>
            </article>
        </div>
    );
}