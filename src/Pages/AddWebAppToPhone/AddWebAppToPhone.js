import React from 'react'
import HelpRow from '../../Components/HelpRow/HelpRow'
import Button from '../../Components/Button/Button'
import './AddWebAppToPhone.scss'
import logo from '../../Assets/images/logo/logo2.png'
import share from '../../Assets/images/icon/share.png'
import plus from '../../Assets/images/icon/plus.png'


const AddWebAppToPhone = () => {
    return (
        <>
            <main className='AddWebAppToPhone'>
                <section className='logoRow'>
                    <div className='logoContainer'>
                        <img src={logo} alt='logo' />
                    </div>
                </section>
                <section className='titleContainer'>
                    <h1>وب اپلیکیشن اسنپ! را به صفحه اصلی موبایل خود اضافه کنید</h1>
                </section>
                <div className='hr'></div>
                <section className='helpContainer'>
                    <div className='HelpRowContainer'>
                        <HelpRow icon={share}>
                            1 - در نوار پایین روی دکمه<strong> Share </strong> بزنید.
                        </HelpRow>
                    </div>
                    <div className='HelpRowContainer'>
                        <HelpRow icon={plus}>
                            2 - در منوی باز شده، در قسمت پایین،گزینه<strong> Add To Home Screen </strong> را انتخاب کنید.
                        </HelpRow>
                    </div>
                    <div className='HelpRowContainer'>
                        <HelpRow txt='Add'>
                            3 -  در مرحله بعد در قسمت بالا روی<strong> Add </strong>بزنید.
                        </HelpRow>
                    </div>
                </section>
                <section className='buttonContainer'>
                    <Button type='button' text='متوجه شدم' linkTo='/welcome' />
                </section>

            </main>

        </>
    )
}

export default AddWebAppToPhone
