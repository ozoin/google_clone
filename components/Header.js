import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { MicrophoneIcon, XIcon, SearchIcon} from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search/term=${term}`);
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
                width={120}
                onClick={()=> router.push("/")}
                height={40}
                className="cursor-pointer"
                />

                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
                    <XIcon 
                    className="h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125" 
                    onClick={()=> (searchInputRef.current.value="")} />
                    <MicrophoneIcon className="mr-3 h-7 hidden cursor-pointer sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                    <SearchIcon onClick={search} className="h-7 cursor-pointer text-blue-500 hidden sm:inline-flex"/>
                    <button hidden type="submit" onClick={search}>Search</button>              
                </form>

                <Avatar className="ml-auto" url="https://upload.wikimedia.org/wikipedia/commons/e/ec/RandomBitmap.png"/>
            </div>
            <HeaderOptions/>
        </header>
    )
}

export default Header
