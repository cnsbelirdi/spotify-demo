import React from 'react';

function Playlists(){
    return (
        <nav className='mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-20'>
            <ul>
                <li>
                    <a href="/" className='text-s text-link hover:text-white flex h-8 items-center'>
                        Ruh Hali:Karmaşık
                    </a>
                </li>
                <li>
                    <a href="/" className='text-s text-link hover:text-white flex h-8 items-center'>
                        Türkçe Rock
                    </a>
                </li>
                <li>
                    <a href="/" className='text-s text-link hover:text-white flex h-8 items-center'>
                        190622
                    </a>
                </li>
                <li>
                    <a href="/" className='text-s text-link hover:text-white flex h-8 items-center'>
                        My List
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Playlists;