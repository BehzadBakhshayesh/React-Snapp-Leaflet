import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

const Button = ({ type, linkTo, text, disabled, bgWhite }) => {
    return (
        <>
            <button
                type={type}
                className={` Button ${bgWhite && 'bgWhite'}`}
                disabled={disabled && true}
            >
                <div className='innerButton'>
                    {type === 'button' ? (
                        <Link to={linkTo} className='link'>
                            <span className={`${bgWhite && 'bgWhite'}`}>{text}</span>
                        </Link>) : (
                        <span className={`${bgWhite && 'bgWhite'}`}>{text}</span>
                    )}
                </div>
            </button>
        </>
    )
}

export default Button
