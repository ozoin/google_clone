import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Avatar from './Avatar';
function Header() {
    const router = useRouter();
    return (
        <header className="top-0 bg-white">
            <div className="flex w-full p-6 items-center ">
                <Image
                src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
                width={120}
                onClick={()=> router.push("/")}
                height={40}
                className="cursor-pointer"
                />
                <p className="font-extrabold text-2xl m-4 text-blue-600">Blogs</p>
            </div>
        </header>
    )
}

export default Header
