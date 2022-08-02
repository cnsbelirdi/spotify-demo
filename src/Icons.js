import React from 'react';

const HomeIcon = ({ size }) => {
    return(
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z" fill="currentColor"></path>
        </svg>
    )
}


const Icon = ({ name, size }) => {
    const icons = {
        home: HomeIcon
    }

    const Component = icons[name]
    return <Component size={size} />
}

export {
    Icon
}