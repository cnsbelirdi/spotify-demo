import React from 'react'
import Navbar from './Navbar';
import Home from 'views/Home';
import Search from 'views/Search';
import Library from 'views/Library';
import Podcasts from 'views/Podcasts';
import Albums from 'views/Albums';
import Artists from 'views/Artists';
import { Switch, Route } from 'react-router-dom';


function Content(){
    return(
        <main className='flex-auto overflow-auto'>
            <Navbar/>
            <div className='px-8 py-5'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={Search} />
                    <Route path="/library" component={Library} />
                    <Route path="/podcasts" component={Podcasts} />
                    <Route path="/artists" component={Artists} />
                    <Route path="/albums" component={Albums} />
                </Switch>
            </div>
        </main>
    )
}

export default Content;