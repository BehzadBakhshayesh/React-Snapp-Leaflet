import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { verifyCodeAction } from '../../Redux/Actions/verifyCodeAction'
import { Link, Redirect } from 'react-router-dom'
import Resend from '../../Components/Resend/Resend'
import GoBackIcon from '../../Components/GoBackIcon/GoBackIcon'
import './Verify.scss'


const Verify = () => {
    // ===================redux========================
    const dispatch = useDispatch()
    const phoneNumber = useSelector(state => state.phoneNumberReducer)
    console.log(phoneNumber ? phoneNumber : 'empty');
    // =====================onChange======================
    const [values, setValues] = useState({ n1: '', n2: '', n3: '', n4: '' })
    const [home, setHome] = useState(false)
    const n1 = useRef(null)
    const n2 = useRef(null)
    const n3 = useRef(null)
    const n4 = useRef(null)

    const changeHandle = (e) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
        
        if (n1.current.value) {
            n2.current.removeAttribute('disabled')
            n2.current.focus()
            n2.current.style.borderColor = '#555'
        }
        if (n2.current.value) {
            n3.current.removeAttribute('disabled')
            n3.current.focus()
            n3.current.style.borderColor = '#555'
        }
        if (n3.current.value) {
            n4.current.removeAttribute('disabled')
            n4.current.focus()
            n4.current.style.borderColor = '#555'
        }
        if (n4.current.value) {
            setHome(true)
            dispatch(verifyCodeAction(`${values.n1}${values.n2}${values.n3}${values.n4}`))
        }
    }
    // =====================onSubmit===================
    // ===================timer========================
    const [counter, setCounter] = useState(30)

    useEffect(() => {
        const IntervalId = setInterval(() => {
            if (counter > 0) {
                setCounter(counter => counter - 1)
            } else if (counter === 0) {
                clearInterval(IntervalId)
            }
        }, 1000)
        return () => clearInterval(IntervalId)
    }, [counter])

    const refresh = () => {
        setCounter(30)
    }
    // ===========================================
    console.log(`${values.n1}${values.n2}${values.n3}${values.n4}`)
    return (
        <>
            <div className='Verify'>

                <div className='arrowContainer'>
                    <GoBackIcon linkTo='/login' />
                </div>

                <div className='txtContainer'>
                    <h1>کد فعال سازی را وارد کنید.</h1>
                    <p>کد  4 رقمی ارسال شده به {phoneNumber} راوارد کنید</p>
                    <Link to='/login'>
                        <div className='goback'>تغییر شماره</div>
                    </Link>
                </div>

                <div className='formContainer'>
                    <form>
                        <div className='inputContainer'>
                            <input
                                type='text'
                                name='n1'
                                ref={n1}
                                value={values.n1}
                                className='input'
                                maxLength='1'
                                onChange={(e) => changeHandle(e)}
                                autoComplete='off'
                                autoFocus />
                        </div>
                        <div className='inputContainer'>
                            <input
                                type='text'
                                name='n2'
                                ref={n2}
                                value={values.n2}
                                className='input'
                                maxLength='1'
                                onChange={(e) => changeHandle(e)}
                                autoComplete='off'
                                disabled />
                        </div>
                        <div className='inputContainer'>
                            <input
                                type='text'
                                name='n3'
                                ref={n3}
                                value={values.n3}
                                className='input'
                                maxLength='1'
                                onChange={(e) => changeHandle(e)}
                                autoComplete='off'
                                disabled />
                        </div>
                        <div className='inputContainer'>
                            <input
                                type='text'
                                name='n4'
                                ref={n4}
                                value={values.n4}
                                className='input'
                                maxLength='1'
                                onChange={(e) => changeHandle(e)}
                                autoComplete='off'
                                disabled />
                        </div>
                    </form>
                </div>



                <div className='timerContainer'>
                    {counter !== 0 ?
                        (
                            <div className='counterContainer'>
                                <div className='counter'>{counter}</div>
                                <p> ثانیه تا درخواست مجدد کد.</p>
                            </div>
                        ) :
                        (
                            <>
                                <div className='textContainer'>
                                    <p> کد فعال سازی را دریافت نکرده اید؟</p>
                                </div>
                                <div onClick={() => refresh()}><Resend /></div>
                            </>
                        )}
                </div>
            </div>
            <>
                {home && <Redirect to='/home' />}
                {!phoneNumber && < Redirect to='/login' />}
            </>

        </>
    )
}

export default Verify

