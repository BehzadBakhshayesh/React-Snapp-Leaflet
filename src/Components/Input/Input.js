
import React from 'react'
import './Input.scss'


const Input = ({
    label,
    type,
    name,
    value,
    placeholder,
    autoFocus,
    required,
    disabled,
    autoComplete,
    ref,
    maxLength,
    onChange,
    textAlign
}) => {

    const changeHandle = (e) => {
        onChange(e)
    }
    const focusHndle = (e) => {
        e.target.style.borderColor = '#555'
    }

    return (
        <>
            <div className='Input'>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={(e) => changeHandle(e)}
                    onBlur={(e) => changeHandle(e)}
                    onFocus={(e) => focusHndle(e)}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    required={required}
                    maxLength={maxLength}
                    disabled={disabled ? true : false}
                    autoComplete={autoComplete}
                    ref={ref}
                    style={{ textAlign: `${textAlign}` }}
                />
            </div>
        </>
    )
}

export default Input
