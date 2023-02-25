export const onStartValueChangeAC = (startValue: number) => {
    return {type: 'CHANGE-START-VALUE', startValue} as const
}
export const onMaxValueChangeAC = (maxValue: number) => {
    return {type: 'CHANGE-MAX-VALUE', maxValue} as const
}
export const disableButtonSetAC = (disabled: boolean) => {
    return {type: 'DISABLE-BUTTON-SET', disabled} as const
}
export const setErrorAC = (flag: boolean) => {
    return {type: 'SET-ERROR', incorrect: flag} as const
}
export const changeSettingsAC = (flag: boolean) => {
    return {type: 'CHANGE-SETTINGS', changeSettings: flag} as const
}