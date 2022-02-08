import React from "react";
import { btn, curved, white } from "./Button.module.scss";

const Button = ({ children, isWhite, isCurved, styles, ...rest }) => {
    if (isWhite) {
        return (
            <button
                className={`${btn} ${white} ${isCurved ? curved : ""} ${
                    styles ? styles : ""
                }`}
                {...rest}
            >
                {children}
            </button>
        );
    } else {
        return (
            <button
                className={`${btn}  ${isCurved ? curved : ""} ${
                    styles ? styles : ""
                }`}
                {...rest}
            >
                {children}
            </button>
        );
    }
};

export default Button;
