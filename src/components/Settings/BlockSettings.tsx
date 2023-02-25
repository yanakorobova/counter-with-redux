import React, {useCallback, useEffect} from 'react';
import {Button} from "../Button/Button";
import styleGeneral from '../../Counter.module.css'
import s from './Settings.module.css'
import {DisplayInput} from './DisplayInput';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    changeSettingsAC,
    disableButtonSetAC,
    onMaxValueChangeAC,
    onStartValueChangeAC,
    setErrorAC
} from "../../redux/actions/settings-actions";
import {setCounterValueAC} from "../../redux/actions/counter-actions";


export const BlockSettings = () => {
    const dispatch = useDispatch()
    const startValue = useSelector<AppRootStateType, number >(state => state.settings.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    const disabled = useSelector<AppRootStateType, boolean>(state => state.settings.buttonDisabled)

    const errorMax = maxValue < 0 || startValue === maxValue
    const errorStart = startValue === maxValue || startValue < 0 || maxValue < startValue


    useEffect(() => {
        if (errorMax || errorStart) {
            dispatch(disableButtonSetAC(true))
            dispatch(setErrorAC(true))
        } else {
            dispatch(disableButtonSetAC(false))
            dispatch(setErrorAC(false))
        }
    }, [startValue, maxValue])

    useEffect(() => { //при стейте на save иначе не нужен
        dispatch(disableButtonSetAC(true))
    }, [])

    const setValueCount = useCallback((valueInput: number, title: string) => {
        dispatch(changeSettingsAC(true))
        title === 'max value' ?
            dispatch(onMaxValueChangeAC(valueInput))
            : dispatch(onStartValueChangeAC(valueInput))
    }, [])

    const save = () => {
        dispatch(changeSettingsAC(false))
        dispatch(disableButtonSetAC(true))
        dispatch(setCounterValueAC(startValue))
    }

    return (
        <div className={styleGeneral.wrapper + ' ' + styleGeneral.div}>
            <div className={s.display_input + ' ' + styleGeneral.div}>
                <DisplayInput value={maxValue} title={'max value'} setValueCount={setValueCount} error={errorMax}/>
                <DisplayInput value={startValue} title={'start value'} setValueCount={setValueCount}
                              error={errorStart}/>
            </div>
            <div className={styleGeneral.button_container + ' ' + styleGeneral.div}>
                <Button changeOnCount={save} disabled={disabled}>set</Button>
            </div>
        </div>
    );
};
