import React from 'react';
import { Icon } from 'Icons';
import { NavLink, useLocation } from 'react-router-dom';
import { setCurrent } from 'stores/player';
import { useDispatch, useSelector } from 'react-redux';

function SongItem({ item }){

    const dispatch = useDispatch()
    const { current, playing, controls } = useSelector(state => state.player)

    const imageStyle = item => {
        switch(item.type){
            case 'artist':
                return 'rounded-full';
            case 'playlist':
                return 'rounded-xl';
            default:
                return 'rounded-md';
        }
    }

    const updateCurrent = () => {
        if(current.id === item.id){
            if(playing){
                controls.pause()
            }else{
                controls.play()
            }
        }else{
            dispatch(setCurrent(item))
        }
    }

    const isCurrentItem = (current?.id === item.id && playing)

    return (
        <NavLink to={useLocation().pathname} key={item.id} className={"bg-footer p-4 rounded hover:bg-active group mb-5"}>
            <div className='pt-[100%] relative mb-4'>

                <img src={item.image} alt="" className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} />

                <button 
                    onClick={updateCurrent}
                    className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center ${!isCurrentItem ? 'hidden': 'flex'} group-hover:flex group-focus:flex`}>
                    <Icon name={ isCurrentItem ? 'pause' : 'play'} size="16" />
                </button>
            </div>
            <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold line-clamp-1'>
                {item.name}
            </h6>
            <p className='overflow-hidden overflow-ellipsis whitespace-nowrap text-link text-sm mt-1 line-clamp-1'>
                {item.artist}
            </p>
        </NavLink>
    )
}

export default SongItem;