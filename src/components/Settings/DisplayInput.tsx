import React, {ChangeEvent, FC} from 'react';
import s from './Settings.module.css'
import styleGeneral from '../../Counter.module.css'


type DisplayInputPropsType = {
    title: string
    setValueCount: (value: number, title: string) => void
    value: number
    error: boolean
}
export const DisplayInput: FC<DisplayInputPropsType> = React.memo(({error, title, setValueCount, value}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueCount(+e.currentTarget.value, title)
    }
    const inputClassName = s.input_number
        + (error ? ' ' + s.errorInput : '')

    return <div className={s.input_container}>
        <span className={styleGeneral.title}>{title + ':'}</span>
        <input value={value} type="number" className={inputClassName} onChange={onChangeHandler}/>
    </div>
})

