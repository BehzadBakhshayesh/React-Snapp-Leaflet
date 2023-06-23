import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import './Preloading.scss'
import logo from '../../Assets/images/logo/logo.jpg';


const Preloading = ({ redirectTo }) => {
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        const setTimeoutId = setTimeout(() => { setRedirect(true) }, 3000)
        return () => {
            clearTimeout(setTimeoutId)
        }
    }, [])
    return (
        <>
            <main className='Preloading'>
                <div className='logoContainer'>
                    <img src={logo} alt='logo' />
                </div>
            </main>
            {redirect && <Redirect to={redirectTo} />}
        </>
    )
}

export default Preloading
