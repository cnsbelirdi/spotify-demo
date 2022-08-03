import React from 'react';
import Navigation from './Navbar/Navigation';
import Auth from './Navbar/Auth';
import { Switch, Route } from 'react-router-dom';

function Navbar(){


    return (
        <nav className="h-[3.75rem] flex items-center justify-between px-8">
            <Navigation />
            <Switch>
                <Route exact path="/">Home</Route>
                <Route  path="/search">Search</Route>
                <Route  path="/library">Library</Route>
            </Switch>
            <Auth /> 
        </nav>
    )
}

export default Navbar;