import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from '@heroicons/react/outline'
export const OptionsList = [
    {
        title:'All',
        icon:<SearchIcon className="h-6 inline-flex items-center"/>,
        selected:true
    }, 
    {
        title: 'Images',
        icon:<PhotographIcon className="h-6 inline-flex items-center"/>,
        selected:false
    },
    {
        title: 'Map',
        icon:<MapIcon className="h-6 inline-flex items-center"/>,
        selected:false
    },
    {
        title: 'News',
        icon:<NewspaperIcon className="h-6 inline-flex items-center"/>,
        selected:false
    }
    ,
    {
        title: 'Videos',
        icon:<PlayIcon className="h-6 inline-flex items-center"/>,
        selected:false
    },
    {
        title: 'More',
        icon:<DotsVerticalIcon className="h-6 inline-flex items-center"/>,
        selected:false
    }
]