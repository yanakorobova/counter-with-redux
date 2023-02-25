import React, {FC} from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    disabled?: boolean
    changeOnCount?: () => void
    children: React.ReactNode;
}

export const Button: FC<ButtonPropsType> = React.memo(({changeOnCount, children, disabled}) => {
    const buttonClassName = s.button + (disabled ? ' ' + s.disabled : '')
    return <button className={buttonClassName}
                   onClick={changeOnCount}
                   disabled={disabled}>{children}</button>
})

