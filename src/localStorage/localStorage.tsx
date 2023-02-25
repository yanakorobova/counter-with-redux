import {AppRootStateType} from "../redux/store";

export const loadState = () => {
    try {
        const state = localStorage.getItem('state')
        if (state === null) {
            return undefined;
        }
        return JSON.parse(state)
    } catch (err) {
        return undefined;
    }
};
export const saveState = (state:AppRootStateType) => {
    try {
        localStorage.setItem('state',JSON.stringify(state))
    } catch {
        // ignore write errors
    }
};
// export function restoreState(key: string) {
//     const state = localStorage.getItem(key)
//     return state !== null && JSON.parse(state)
// }
