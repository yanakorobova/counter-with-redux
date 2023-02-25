import React from 'react';
import './App.css';
import {BlockSettings} from "./components/Settings/BlockSettings";
import {Counter} from "./components/Counter/Counter";

function App() {
    return (
        <div className={'counter'+' '+'App'}>
            <BlockSettings/>
            <Counter/>
        </div>
    );
};

export default App;

