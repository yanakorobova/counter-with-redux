import {setCounterValueAC} from "../actions/counter-actions";

type initialStateType = {
    currentValue: number
}
const initialState = {
    currentValue: 0
}
type setCounterValueActionType = ReturnType<typeof setCounterValueAC>
type actionType = setCounterValueActionType

export const counterReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case "SET-COUNTER-VALUE":
            return {...state, currentValue: action.currentValue}
        default:
            return state
    }
};

