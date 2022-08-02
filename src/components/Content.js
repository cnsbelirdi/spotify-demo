import React from 'react'
import Navbar from './Navbar';
import Home from 'views/Home';
import Search from 'views/Search';
import Library from 'views/Library';
import { Switch, Route } from 'react-router-dom';


function Content(){
    return(
        <main className='flex-auto'>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/library" component={Library} />
            </Switch>
        </main>
    )
}

export default Content;