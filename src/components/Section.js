import { Icon } from 'Icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Section({ title, more = false, items }){

    const imageStyle = item => {
        switch(item.type){
            case 'artist':
                return 'rounded-full';
                break;
            case 'playlist':
                return 'rounded-xl';
            default:
                return 'rounded-md';
        }
    }


    return(
        <section>
            <header className='flex items-center justify-between mb-4'>
                <NavLink to={more ?? '#'}>
                    <h3 className='text-2xl text-white font-semibold tracking-tight hover:underline'>{title}</h3>
                </NavLink>
                {more && (
                    <NavLink to={more} className={"text-xs font-semibold text-link hover:underline tracking-wider"}>
                        HEPSİNİ GÖR
                    </NavLink>
                )}
            </header>
            <div className='grid grid-cols-6 gap-x-6'>
                    {items.map(item => (
                        <NavLink to="/" key={item.id} className={"bg-footer p-4 rounded hover:bg-active group"}>
                            <div className='pt-[100%] relative mb-4'>

                                <img src={item.image} alt="" className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} />

                                <button className='w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center hidden group-hover:flex group-focus:flex'>
                                    <Icon name="play" size="16" />
                                </button>
                            </div>
                            <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold'>
                                {item.name}
                            </h6>
                            <p className='text-link text-sm mt-1'>
                                {item.artist}
                            </p>
                        </NavLink>
                    ))}
            </div>
        </section>
    )
}

export default Section;