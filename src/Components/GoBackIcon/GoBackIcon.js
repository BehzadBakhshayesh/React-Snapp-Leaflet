import React from 'react'
import { Link } from 'react-router-dom'
import './GoBackIcon.scss'
import rightaArrow from '../../Assets/images/icon/rightaArrow.png';

const GoBackIcon = ({ linkTo }) => {
    return (
        <>
            <div className='GoBackIcon'>
                <Link to={linkTo}>
                    <img src={rightaArrow} alt='icon' />
                </Link>
            </div>
        </>
    )
}

export default GoBackIcon
