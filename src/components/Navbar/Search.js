import React from 'react';
import { Icon } from 'Icons';

function Search(){
    return (
        <div className='mr-auto ml-4 relative text-black'>
            <label htmlFor='search-input' className='w-12 h-10 flex items-center justify-center absolute top-0 left-0'>
                <Icon size={24} name="search" />
            </label>
            <input autoFocus={true} type='text' id="search-input" className='h-10 pl-12 outline-none bg-white rounded-3xl text-sm placeholder-black/60 max-w-full w-[22.75rem]' placeholder="Sanatçılar, şarkılar veya podcast'ler" />
        </div>
    )
}

export default Search;