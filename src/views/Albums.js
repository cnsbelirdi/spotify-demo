import React from 'react';
import Title from 'components/Title';
import userAlbums from 'data/user-albums';
import SongItem from 'components/SongItem';
function Albums(){
    
    return (
        <section className='text-white'>
            <Title title="Podcast'ler"/>
            <div className='grid grid-cols-8 gap-x-6'>
                {userAlbums.map(album => <SongItem item={album} key={album.id}  />)}
            </div>
        </section>
    )
}

export default Albums;