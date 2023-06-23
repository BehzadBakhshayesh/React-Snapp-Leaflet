import React from 'react'
import refreshIcon from '../../Assets/images/icon/refresh.png';
import './Resend.scss'

const Resend = () => {
    return (
        <>
            <div className='Resend'>
                <div className='txt'>ارسال مجدد</div>
                <div className='iconContainer'>
                    <img src={refreshIcon} alt='icon' />
                </div>
            </div>
        </>
    )
}

export default Resend

