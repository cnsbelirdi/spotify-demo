import React from 'react';
import Navigation from './Navbar/Navigation';
import Auth from './Navbar/Auth';
import { Switch, Route } from 'react-router-dom';
import Search from './Navbar/Search';
import Library from './Navbar/Library';

function Navbar(){


    return (
        <nav className="h-[3.75rem] flex items-center justify-between px-8 gap-x-4">
            <Navigation />
            <Switch>
                <Route exact path="/"></Route>
                <Route  path="/search"><Search /></Route>
                <Route  path="/library"><Library /></Route>
                <Route  path="/podcasts"><Library /></Route>
                <Route  path="/artists"><Library /></Route>
                <Route  path="/albums"><Library /></Route>
            </Switch>
            <Auth /> 
        </nav>
    )
}

export default Navbar;