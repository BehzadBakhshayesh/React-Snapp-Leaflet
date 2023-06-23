import React from 'react'
import { Link } from 'react-router-dom';
import './Welcome.scss'
import logo from '../../Assets/images/logo/logo.jpg';
import langIcon from '../../Assets/images/icon/language.png'

const Welcome = () => {
    return (
        <>
            <main className='Welcome'>
                <div className='logoContainer'>
                    <img src={logo} />
                </div>
                <section className='whiteContainer'>
                    <div className='titleContainer'>
                        <h1>به اسنپ! خوش آمدید.</h1>
                    </div>
                    <div className='textContainer'>
                        <p>لطفا شماره موبایل خود را وارد کنید تا کد فعال سازی برای تان ارسال شود.</p>
                    </div>
                    <div className='phoneNumberContainer'>
                        <div className='title'>شماره موبایل</div>
                        <div className='linkContainer'>
                            <Link to='/login'>
                                <div className='innerLink'>
                                    مثلا 09123456789
                                </div>
                            </Link>
                            <div className='dot'></div>
                        </div>

                        <div className='hr'></div>
                    </div>
                    <div className='languageContainer'>
                        <p>Change Language To English</p>
                        <div className='iconContainer'>
                            <img src={langIcon} alt='icon' />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Welcome
