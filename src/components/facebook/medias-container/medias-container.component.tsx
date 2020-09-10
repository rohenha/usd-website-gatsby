import * as React from 'react';
import {getFacebookContent } from "Services";
import { FacebookMediaComponent } from "Components";

interface IFacebookMediasContainerProps {
    number: number,
    loadMore: boolean
}

interface IFacebookMediasContainerState {
    medias: any
}

export class FacebookMediasContainerComponent extends React.Component<IFacebookMediasContainerProps, IFacebookMediasContainerState> {
    private offset: number = 0;
    private constructor(props: IFacebookMediasContainerProps) {
        super(props);
        this.state = {
            medias: []
        };
    };

    private getMedias = () => {
        getFacebookContent("albums.limit(" + this.props.number + ").offset(" + this.offset + "){photos{webp_images}}").then((res: any) => {
            this.setState({
                medias: [...this.state.medias, ...res.albums.data]
            });
        });
    };

    private addMoreMedias = () => {
        this.offset += this.props.number;
        this.getMedias();
    };

    public componentDidMount = this.getMedias;

    public render(): React.ReactElement<any> {
        return (
            <div className="fb_container">
                {this.state.medias.map((medias: any) => {
                    if (medias.photos) {
                        return medias.photos.data.map((photo: any) => (
                            <FacebookMediaComponent media={photo} key={photo.id} />
                        )) 
                    }
                })}
                {this.props.loadMore ?
                    <button onClick={this.addMoreMedias}>Charger plus de médias</button> :
                    null
                }
            </div>
        );
    }
}