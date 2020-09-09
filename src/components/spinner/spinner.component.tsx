import * as React from 'react';
import { ISpinnerComponentProps } from "Interfaces";

import "./spinner.component.sass";

export function SpinnerComponent({ active }: ISpinnerComponentProps) {
    return (
        <span className={active ? "spinner spinner--active" : "spinner"}></span>
    );
}