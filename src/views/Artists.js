import React from 'react';
import Title from 'components/Title';
import userArtists from 'data/user-artists';
import SongItem from 'components/SongItem';
function Artists(){
    
    return (
        <section className='text-white'>
            <Title title="Podcast'ler"/>
            <div className='grid grid-cols-8 gap-x-6'>
                {userArtists.map(artist => <SongItem item={artist} key={artist.id}  />)}
            </div>
        </section>
    )
}

export default Artists;