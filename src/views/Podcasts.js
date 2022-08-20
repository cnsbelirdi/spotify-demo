import React from 'react';
import Title from 'components/Title';
import userPodcasts from 'data/user-podcasts';
import SongItem from 'components/SongItem';
function Podcasts(){
    
    return (
        <section className='text-white'>
            <Title title="Podcast'ler"/>
            <div className='grid grid-cols-8 gap-x-6'>
                {userPodcasts.map(podcast => <SongItem item={podcast} key={podcast.id}  />)}
            </div>
        </section>
    )
}

export default Podcasts;