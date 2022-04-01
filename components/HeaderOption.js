import React from 'react'

function HeaderOption({icon,title,selected}) {
    return (
        <div className={`w-full flex flex-row flex-nowrap items-center  space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${selected && 'text-blue-500 border-blue-500'}`}>
            <p className="hidden sm:inline-flex">{title}</p>
            {icon}
        </div>
    )
}

export default HeaderOption
