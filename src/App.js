import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Main from "./components/Main";
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Route exact path='/' component={Main}/>
            <Route path='/home' component={Home}/>
        </div>
    );
};

export default App;
