import {
    changeSettingsAC,
    disableButtonSetAC,
    onMaxValueChangeAC,
    onStartValueChangeAC,
    setErrorAC
} from "../actions/settings-actions";

export type initialStateType = {
    startValue: number,
    maxValue: number,
    buttonDisabled: boolean,
    incorrectValue: boolean,
    changeSettings: boolean
}
const initialState: initialStateType = {
    startValue: 0,
    maxValue: 5,
    buttonDisabled: true,
    incorrectValue: false,
    changeSettings: false
}
type OnStartValueChangeActionType = ReturnType<typeof onStartValueChangeAC>
type OnMaxValueChangeActionType = ReturnType<typeof onMaxValueChangeAC>
type disableButtonSetActionType = ReturnType<typeof disableButtonSetAC>
type setErrorIncorrectValueActionType = ReturnType<typeof setErrorAC>
type changeSettingsActionType = ReturnType<typeof changeSettingsAC>


type actionType = OnStartValueChangeActionType | OnMaxValueChangeActionType |
    disableButtonSetActionType | setErrorIncorrectValueActionType | changeSettingsActionType

export const settingsReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        case "CHANGE-START-VALUE":
            return {...state, startValue: action.startValue}
        case "DISABLE-BUTTON-SET":
            return {...state, buttonDisabled: action.disabled}
        case "SET-ERROR":
            return {...state, incorrectValue: action.incorrect}
        case "CHANGE-SETTINGS":
            return {...state, changeSettings: action.changeSettings}
        default:
            return state
    }
}