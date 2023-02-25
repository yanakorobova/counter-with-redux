import React, {useCallback} from 'react';
import {Button} from "../Button/Button";
import styleGeneral from '../../Counter.module.css'
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setCounterValueAC} from "../../redux/actions/counter-actions";


export const Counter = () => {
    const dispatch = useDispatch()
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.settings.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    const error = useSelector<AppRootStateType, boolean>(state => state.settings.incorrectValue)
    const changeSettings = useSelector<AppRootStateType, boolean>(state => state.settings.changeSettings)

    const incCount = () => dispatch(setCounterValueAC(currentValue + 1))
    const resetCount = () => dispatch(setCounterValueAC(startValue))

    const text = changeSettings && !error ? 'Enter values and press set'
        : error ? 'Incorrect value!' : currentValue

    const valueClassName = changeSettings && !error ?
        s.text : error ? s.text + ' ' + s.red :
            s.value + (currentValue === maxValue ? ' ' + s.red : '')

    const disabledIncButton = changeSettings ? true : currentValue === maxValue
    const disabledResetButton = changeSettings ? true : currentValue === startValue


    return (
        <div className={styleGeneral.wrapper + ' ' + styleGeneral.div}>
            <div className={s.display + ' ' + styleGeneral.div}>
                <p className={valueClassName}>{text}</p>
            </div>
            <div className={styleGeneral.button_container + ' ' + styleGeneral.div}>
                <Button changeOnCount={incCount}
                        disabled={disabledIncButton}>inc</Button>
                <Button changeOnCount={resetCount}
                        disabled={disabledResetButton}>reset</Button>
            </div>
        </div>
    );
};

