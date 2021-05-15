import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Arrow = ({className}) => {
    return (
        <div className={`${className} bg-secondary w-10 h-10 rounded-full transform transition-all duration-500 cursor-pointer hover:scale-105`}>
            <ArrowForwardIcon className="text-white mt-2 ml-2"/>
        </div>
    )
}

export default Arrow
