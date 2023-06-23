import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { phoneNumberAction } from '../../Redux/Actions/phoneNumberAction'
import { Formik } from 'formik'
import { Link, Redirect } from 'react-router-dom'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import './Login.scss'
import close from '../../Assets/images/icon/close.png'

const Login = () => {
    const [verify, setVerify] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <main className='Login'>
                <section className='closeContainer'>
                    <Link to='/welcome'><img src={close} alt='icon' /></Link>
                </section>
                <section className='textContainer'>
                    <h1>
                        به اسنپ! خوش آمدید
                    </h1>
                    <p>
                        لطفا شماره موبایل خود را وارد کنید تا کد فعال سازی برای تان ارسال شود.
                    </p>
                </section>
                <section className='formContainer'>
                    <Formik
                        initialValues={{ phoneNumber: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            dispatch(phoneNumberAction(values.phoneNumber))
                            setVerify(true)
                        }}
                        validate={values => {
                            const errors = {}
                            const pattern = new RegExp('^(\\+98|0)?9\\d{9}$')
                            if (!values.phoneNumber) {
                                errors.phoneNumber = ' شماره موبایل خود را وارد نمایید'
                            } else if (!pattern.test(values.phoneNumber)) {
                                errors.phoneNumber = ' شماره موبایل نا معتبر می باشد'
                            }
                            return errors;
                        }}
                    >
                        {({ values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting, }) => (

                            <form onSubmit={handleSubmit}>
                                <div className='inputContainer'>
                                    <Input
                                        type='text'
                                        name='phoneNumber'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phoneNumber}
                                        label='شماره تلفن'
                                        textAlign='right'
                                    />
                                </div>
                                <div className='errContainer'>
                                    {errors.phoneNumber}
                                </div>
                                <div className='btnRow'>
                                    <div className='btnContainer'>
                                        <Button
                                            type='submit'
                                            text='مرحله بعد'
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </section>
            </main>
            {verify && <Redirect to='/verify' />}
        </>
    )
}

export default Login
