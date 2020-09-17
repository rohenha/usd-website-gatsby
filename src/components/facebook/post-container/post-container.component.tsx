import * as React from 'react';
import { getFacebookContent } from "Services";
import { ButtonComponent, FacebookPostComponent, SpinnerComponent } from "Components";
import Masonry from 'react-masonry-component';

import "./post-container.component.sass";

interface IFacebookPostsContainerProps {}

interface IFacebookPostsContainerState {
    posts: any,
    loading: boolean
}

export class FacebookPostsContainerComponent extends React.Component<IFacebookPostsContainerProps, IFacebookPostsContainerState> {
    private offset: number = 0;
    private nbrPosts: number = 10;
    private constructor(props: IFacebookPostsContainerProps) {
        super(props);
        this.state = {
            loading: false,
            posts: []
        };
    };

    private getPosts = (): void => {
        this.setState({ loading: true });
        getFacebookContent("posts.limit(" + this.nbrPosts + ").offset(" + this.offset + "){message,full_picture,permalink_url,created_time}").then((res: any) => {
            this.setState({
                loading: false,
                posts: [...this.state.posts, ...res.posts.data]
            });
        });
    };

    private addMorePosts = (): void => {
        this.offset += this.nbrPosts;
        this.getPosts();
    };

    public componentDidMount = this.getPosts;

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <Masonry
                    className={'fb_container'}
                    elementType={'section'}
                    options={{ columnWidth: ".fb_post--size", itemSelector: ".fb_post--container", percentPosition: true }}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    >
                        <div className="fb_post--size col-md-6"></div>
                        {this.state.posts.map((post: any) => (
                            <FacebookPostComponent post={post} key={post.id} />
                        ))}
                </Masonry>
                <nav className="fb_nav">
                    <ButtonComponent active={!this.state.loading} className="" link="" type={1} event={this.addMorePosts}>
                        <React.Fragment>
                            {!this.state.loading ? <span>Plus de d'articles</span> : null }
                            <SpinnerComponent active={this.state.loading} />
                        </React.Fragment>
                    </ButtonComponent>
                </nav>
            </React.Fragment>
        );
    }
}