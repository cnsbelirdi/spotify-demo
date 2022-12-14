import React from 'react';
import Title from 'components/Title';
import userPlaylists from 'data/user-playlists';
import SongItem from 'components/SongItem';
function Library(){
    
    return (
        <section className='text-white'>
            <Title title="Çalma Listeleri"/>
            <div className='grid grid-cols-8 gap-x-6'>
                {userPlaylists.map(playlist => <SongItem item={playlist} key={playlist.id}  />)}
            </div>
        </section>
    )
}

export default Library;