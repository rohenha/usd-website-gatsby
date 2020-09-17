import * as React from 'react';
// import { getFacebookContent } from "Services";
import { getFacebookContent } from "Services";
import { FacebookMediaComponent } from "Components";

interface IFacebookMediasContainerProps {
    number: number,
    start: number,
    loadMore?: boolean
}

interface IFacebookMediasContainerState {
    medias: any,
    offset: number
}

export class FacebookMediasContainerComponent extends React.Component<IFacebookMediasContainerProps, IFacebookMediasContainerState> {
    private offset: number = 0;
    private constructor(props: IFacebookMediasContainerProps) {
        super(props);
        this.state = {
            medias: [],
            offset: this.props.number
        };
    };

    private getMedias = () => {
        getFacebookContent("albums{photos{webp_images}}").then((res: any) => {
            this.setState({
                medias: [...this.state.medias, ...res.albums.data]
            });
        });
    };

    private getMoreMedias = () => {
        const newValue = this.state.offset + this.props.number;
        this.setState({
            offset: newValue
        })
        // this.getMedias();
    };

    public componentDidMount = this.getMedias;

    public render(): React.ReactElement<any> {
        let nbrPhotos = 0;
        return (
            <div className="fb_container">
                {this.state.medias.map((medias: any) => {
                    if (medias.photos && nbrPhotos < this.state.offset) {
                        nbrPhotos += 1;
                        return medias.photos.data.map((photo: any) => (
                            <FacebookMediaComponent media={photo} key={photo.id} />
                        )) 
                    }
                })}
                {this.props.loadMore ?
                    <button onClick={this.getMoreMedias}>Charger plus de médias</button> :
                    null
                }
            </div>
        );
    }
}