import React, { useState } from 'react'
import './ToggleSwitch.scss'

const ToggleSwitch = () => {

    const [check, setChek] = useState(true)
    const checkboxHandle = (e) => {
        setChek(check => !check)
    }

    return (
        <>
            <div className='ToggleSwitch'>
                <div className='textContent'>
                    <div className='forMyself'>
                        <div>برای خودم</div>
                    </div>
                    <div className='forOthers'>
                        <div>برای دیگری</div>
                    </div>
                </div>
                <div className={`circle ${!check && 'active'}`}>
                    {check ? ('برای خودم') : ('برای دیگری')}
                </div>
                <input
                    className='checkbox'
                    type='checkbox'
                    defaultChecked={check}
                    onClick={(e) => checkboxHandle(e)}
                />
            </div>
        </>
    )
}

export default ToggleSwitch
