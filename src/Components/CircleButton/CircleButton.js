import React from 'react'
import { Link } from 'react-router-dom'
import './CircleButton.scss'

const CircleButton = ({ iconSrc, linkTo }) => {
    return (
        <>
            <Link to={linkTo}>
                <div className='CircleButton'>
                    <img src={iconSrc} alt='icon' />
                </div>
            </Link>
        </>
    )
}

export default CircleButton
