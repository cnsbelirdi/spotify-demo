import React from 'react';
import { NavLink } from 'react-router-dom';

function Library(){
    return (
        <div className='mr-auto pl-6 relative'>
            <nav className='flex items-center gap-x-4 text-sm'>
                <NavLink activeClassName='bg-active' to="/library" exact className='flex items-center justify-center px-4 py-2 rounded-[4px]'>
                    Çalma Listeleri
                </NavLink>
                <NavLink activeClassName='bg-active' to="/podcasts" className='flex items-center justify-center px-4 py-2 rounded-[4px]'>
                    Podcast'ler
                </NavLink>
                <NavLink activeClassName='bg-active' to="/artists" className='flex items-center justify-center px-4 py-2 rounded-[4px]'>
                    Sanatçılar
                </NavLink>
                <NavLink activeClassName='bg-active' to="/albums" className='flex items-center justify-center px-4 py-2 rounded-[4px]'>
                    Albümler
                </NavLink>
            </nav>
        </div>
    )
}

export default Library;