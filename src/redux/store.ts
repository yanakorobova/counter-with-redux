import {combineReducers, legacy_createStore} from "redux";
import {settingsReducer} from "./reducers/settings-reducer";
import {counterReducer} from "./reducers/counter-reducer";
import {loadState, saveState} from "../localStorage/localStorage";
import throttle from 'lodash/throttle'

const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})

const persistedState = loadState();
export const store = legacy_createStore(rootReducer, persistedState)

store.subscribe(throttle(() => {
    if(!store.getState().settings.changeSettings){
        saveState(
            {
                settings: store.getState().settings,
                counter: store.getState().counter
            }
        );
    }
}, 1000));
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store