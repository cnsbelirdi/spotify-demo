import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';
import Menu from './Sidebar/Menu';
import { Icon } from 'Icons';
import Playlists from './Sidebar/Playlists';
import { useSelector } from 'react-redux';
import SidebarSongCover from './Sidebar/SidebarSongCover';

function Sidebar(){

    const sidebar = useSelector(state => state.player.sidebar) 

    return (
        <aside className='w-60 pt-6 flex flex-col flex-shrink-0 bg-black'>
            <NavLink to="/" className='mb-7 px-6'>
                <img src={logo} alt="" className='h-10' />
            </NavLink>
            
            <Menu />

            <nav className='mt-6'>
                <ul className=''>
                    <li>
                        <a href="/"  className='py-2 px-6 flex text-sm group text-link font-semibold hover:text-white items-center'>
                            <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white group-hover:bg-opacity-100 rounded-sm text-black bg-opacity-60'>
                                <Icon name="plus" size="12"/>
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href="/" className='py-2 px-6 flex text-sm group text-link font-semibold hover:text-white items-center'>
                            <span className='w-6 h-6 flex items-center justify-center mr-4 rounded-sm text-white bg-gradient-to-br from-purple-700 to-blue-300 opacity-70 group-hover:opacity-100'>
                                <Icon name="heartFilled" size="12"/>
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>

            <Playlists />

            <a href='/' className='h-10 flex flex-shrink-0 items-center px-6 gap-x-4 text-sm text-link font-semibold hover:text-white'>
                <Icon name="download" size="20" />
                Uygulamayı Yükle
            </a>

            {sidebar && <SidebarSongCover /> }
        </aside>
    )
}

export default Sidebar;