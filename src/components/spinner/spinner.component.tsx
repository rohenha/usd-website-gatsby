import * as React from 'react';

import "./spinner.component.sass";

interface ISpinnerComponentProps {
    active: boolean
}

export function SpinnerComponent({ active }: ISpinnerComponentProps) {
    return (
        <span className={active ? "spinner spinner--active" : "spinner"}></span>
    );
}