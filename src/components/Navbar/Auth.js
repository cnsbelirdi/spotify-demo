import React from 'react';
import { Menu } from '@headlessui/react';
import { Icon } from 'Icons';

function Auth(){
    const user = {
        name: 'cnsbelirdi',
        avatar: 'https://pbs.twimg.com/profile_images/1543635367324172289/bAX9S0tV_400x400.jpg'
    }
    return (
        <Menu as="nav" className={"relative"}>
            { ({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${ open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                        <img src={user.avatar} alt=""  className={"w-8 h-8 rounded-full p-0.5 mr-2"}/>
                        <span className='text-sm text-semibold mr-2'>{user.name}</span>
                        <span className={open  && 'rotate-180'}>
                            <Icon size="16" name="downDir" />
                        </span>
                    </Menu.Button>
                    <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2 p-1 "}>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
                            href="/"
                            >
                            Hesap
                            <Icon name="external" size="16" />
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
                            href="/"
                            >
                            Profil
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
                            href="/"
                            >
                            Oturumu Kapat
                            </a>
                        )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

export default Auth;