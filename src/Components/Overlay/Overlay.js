import React from 'react'
import Button from '../Button/Button'
import './Overlay.scss'

const Overlay = ({ clickValue }) => {
    const clicHandle = () => {
        return false
    }

    return (
        <>
            <div className='Overlay'>
                <div className='whiteContainer' onClick={() => clicHandle()}>
                    <h1>دسترسی به موقعیت مکانی</h1>
                    <p>دسترسی به موقعیت مکانی شما فعال است. آیا می خواهید آن را فعال کنید؟</p>
                    <div className='buttonsContainer'>
                        <div onClick={() => clickValue('الان نه')}>
                            <Button text='الان نه' bgWhite/>
                        </div>
                        <div onClick={() => clickValue('فعال کردن')}>
                            <Button text='فعال کردن' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overlay
