import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
    return (
        <Router>
            <Route
                path='/'
                component={Join}
                exact
            />
            <Route
                path='/chat'
                component={Chat}
            />
        </Router>
    );
};

export default App;