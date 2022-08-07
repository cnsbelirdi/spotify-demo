import React, { useEffect, useRef, useState } from 'react';
import categories from 'data/categories';
import Title from 'components/Title';
import favoriteCategories from 'data/favorite-categories';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Icon } from 'Icons';
import { Category, FavCategory } from 'components/CategoryItem';





function Search(){

    const favoritesRef = useRef()

    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    useEffect(() => {
        if(favoritesRef.current){

            const scrollHandle = () => {
                const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
                const isBegin = favoritesRef.current.scrollLeft === 0

                setPrev(!isBegin)
                setNext(!isEnd)


            }

            scrollHandle()
            favoritesRef.current.addEventListener('scroll', scrollHandle)

            return () => {
                // eslint-disable-next-line
                favoritesRef.current.removeEventListener('scroll', scrollHandle) 
            }
        }
    }, [favoritesRef])

    const slideFavoritesNext = () => {
        favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 400
    }

    const slideFavoritesPrev = () => {
        favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 400
    }

    return (
        <>
            <section className='mb-8'>
                <Title title="En çok dinlediğin türler"/>
                
                <div className='relative'>
                    {prev && <button onClick={slideFavoritesPrev} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center absolute -left-6 z-10 top-1/2 -translate-y-1/2 hover:scale-[1.06]"><Icon name="prev" size={24} /></button>}
                    {next && <button onClick={slideFavoritesNext} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center absolute -right-6 z-10 top-1/2 -translate-y-1/2 hover:scale-[1.06]"><Icon name="next" size={24} /></button>}
                    <ScrollContainer innerRef={favoritesRef} className="flex scrollable overflow-x gap-x-6">
                        {favoriteCategories.map(category => <FavCategory category={category} key={category.id}/>)}
                    </ScrollContainer>
                </div>
            </section>
            <section>
                <Title title="Hepsine Göz At"/>
                <div className='grid grid-cols-6 gap-6'>
                    {categories.map(category => <Category category={category} key={category.id}/>)}
                </div>
            </section>
        </>
    )
        
}

export default Search;