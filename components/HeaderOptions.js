import React from 'react'
import {OptionsList} from './OptionsList';
import HeaderOption from './HeaderOption';
function HeaderOptions() {

    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
            <div className="flex space-x-6">
                {
                    OptionsList.map(option => (
                        <HeaderOption selected={option.selected} icon={option.icon}  title={option.title} />
                    ))
                }
            </div>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>       
            </div>
        </div>
    )
}

export default HeaderOptions
