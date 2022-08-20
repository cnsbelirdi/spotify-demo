import React from 'react';
import userPlaylists from 'data/user-playlists';
import { convertTrToEng } from 'utils';

function Playlists(){
    return (
        <nav className='mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-20'>
            <ul>
                {userPlaylists.map(playlist => 
                    <li>
                        <a href={convertTrToEng(playlist.name)} className='text-s text-link hover:text-white flex h-8 items-center'>
                            {playlist.name}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Playlists;