import * as React from 'react';
import { getFacebookContent } from "Services";
import { ButtonComponent, FacebookPostComponent } from "Components";
import { IFacebookPostsContainerProps, IFacebookPostsContainerState } from "Interfaces";
// import masonry from "masonry-layout";

import "./post-container.component.sass";

export class FacebookPostsContainerComponent extends React.Component<IFacebookPostsContainerProps, IFacebookPostsContainerState> {
    private offset: number = 0;
    private nbrPosts: number = 10;
    private constructor(props: IFacebookPostsContainerProps) {
        super(props);
        this.state = {
            posts: []
        };
    };

    private getPosts = () => {
        getFacebookContent("posts.limit(" + this.nbrPosts + ").offset(" + this.offset + "){message,full_picture,permalink_url,created_time}").then((res: any) => {
            this.setState({
                posts: [...this.state.posts, ...res.posts.data]
            });
        });
    };

    private addMorePosts = () => {
        this.offset += this.nbrPosts;
        this.getPosts();
    };

    public componentDidMount = this.getPosts;

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <div className="fb_container">
                    {this.state.posts.map((post: any) => (
                        <FacebookPostComponent post={post} key={post.id} />
                    ))}
                </div>
                <div className="fb_nav">
                    <ButtonComponent className="" link="" type={1} event={this.addMorePosts}><React.Fragment>Plus de d'articles</React.Fragment></ButtonComponent>
                </div>
            </React.Fragment>
        );
    }
}