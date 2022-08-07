import React from 'react';
import SongItem from './SongItem';
import Title from './Title';

function Section({ title, more = false, items }){

    return(
        <section>
            <Title more={more} title={title} />
            <div className='grid grid-cols-6 gap-x-6'>
                    {items.map(item => <SongItem item={item} key={item.id}  />)}
            </div>
        </section>
    )
}

export default Section;