import React from 'react'
import './HelpRow.scss'

const HelpRow = ({ icon, txt, children }) => {
    return (
        <>
            <div className='HelpRow'>
                <div className='iconContainer'>
                    {icon ? <img src={icon} alt='icon' /> : txt}
                </div>
                <div className='textContainer'>
                    <p>{children}</p>
                </div>
            </div>
        </>
    )
}

export default HelpRow
