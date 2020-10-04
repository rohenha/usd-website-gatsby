import * as React from 'react';
// import { getFacebookContent } from "Services";
import { getFacebookContent } from "Services";
import { ButtonComponent, FacebookMediaComponent, SpinnerComponent } from "Components";
import Masonry from 'react-masonry-component';
import { IFacebookPhoto } from "Interfaces";

import './medias-container.component.sass';

interface IFacebookMediasContainerProps {
    number: number,
    columns: { mobile: number, desktop: number },
    loadMore?: boolean
}

interface IFacebookMediasContainerState {
    active: boolean,
    medias: any,
    offset: number,
    loading: boolean
}

export class FacebookMediasContainerComponent extends React.Component<IFacebookMediasContainerProps, IFacebookMediasContainerState> {
    private constructor(props: IFacebookMediasContainerProps) {
        super(props);
        this.state = {
            active: true,
            loading: false,
            medias: [],
            offset: this.props.number
        };
    };

    private getMedias = () => {
        getFacebookContent("albums{photos{webp_images,link,name}}").then((res: any) => {
            if (res && res.albums) {
                this.setState({
                    medias: [...this.state.medias, ...res.albums.data]
                });
            }
        });
    };

    private getMoreMedias = () => {
        const newValue = this.state.offset + this.props.number;
        this.setState({
            offset: newValue
        })
        this.getMedias();
    };

    public componentDidMount = this.getMedias;

    public render(): React.ReactElement<any> {
        let nbrPhotos = 0;
        return (
            <div className="fb_medias">
                <Masonry
                    className={'fb_medias__container'}
                    elementType={'section'}
                    options={{ columnWidth: ".fb_media--size", itemSelector: ".fb_media--container", percentPosition: true }}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    >
                        <div className={`fb_media--size col-${this.props.columns.mobile} col-md-${this.props.columns.desktop}`}></div>
                            {this.state.medias.map((medias: { photos: { data: IFacebookPhoto[] } }) => {
                                if (medias.photos) {
                                    return medias.photos.data.map((photo: IFacebookPhoto) => {
                                        if (nbrPhotos < this.state.offset) {
                                            nbrPhotos += 1;
                                            return <div className={`col-${this.props.columns.mobile} col-md-${this.props.columns.desktop} fb_media--container`} key={photo.id}><FacebookMediaComponent media={photo} /></div>
                                        }
                                        return;
                                    }) 
                                }
                                return;
                            })}
                </Masonry>
                {this.props.loadMore && this.state.active ?
                    <nav className="fb_nav">
                        <ButtonComponent active={!this.state.loading} className="" link="" type={1} event={this.getMoreMedias}>
                            <React.Fragment>
                                {!this.state.loading ? <span>Plus de de médias</span> : null }
                                <SpinnerComponent active={this.state.loading} />
                            </React.Fragment>
                        </ButtonComponent>
                    </nav>
                    : null
                }
            </div>
        );
    }
}