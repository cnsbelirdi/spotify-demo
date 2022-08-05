import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'Icons';
import { setSidebar } from 'stores/player';

function SidebarSongCover(){

    const dispatch = useDispatch()
    const current = useSelector(state => state.player.current)

    return(
        <div className='pt-[100%] bg-black relative group'>
            <img src={current.image} alt={current.name} className='w-full h-full object-cover absolute top-0 left-0' />
            <button 
                onClick={() => dispatch(setSidebar(false))}
                className='w-6 h-6  bg-black opacity-0 group-hover:opacity-60 -rotate-90 hover:!opacity-100 hover:scale-[1.06] rounded-full absolute top-1 right-1 flex items-center justify-center'>
                <Icon name="arrowLeft" size={16} />
            </button>
        </div>
    )
}

export default SidebarSongCover;