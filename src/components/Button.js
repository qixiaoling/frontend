import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--card', 'btn--page']
const SIZES = ['btn--medium--list', 'btn--medium--create', 'btn--large', 'btn--small']
export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize,
                            disabled,
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(

            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                disabled={disabled}>
                {children}
            </button>

    )
};