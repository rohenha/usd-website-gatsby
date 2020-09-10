import * as React from 'react';

import './title.component.sass';

interface ITitleComponentProps {
    balise: string,
    text: string
}

export function TitleComponent({ balise, text }: ITitleComponentProps) {
    const span = React.createElement("span", {}, text);
    const title = React.createElement(balise, { "className": "title", "data-title": text }, span);
    return (
        <React.Fragment>
            {title}
        </React.Fragment>
    );
}