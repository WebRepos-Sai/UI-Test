import React from 'react'

const WhiteCard = ({className, heading, description, number }) => {
    return (
        <div className={`${className} bg-white shadow-md m-auto px-10 pb-14 pt-10 justify-center transform transition-all duration-500 cursor-pointer hover:scale-105`}>
          <h1 className="bg-circle h-10 w-10 my-5 rounded-full text-lg font-MBold relative"><span className="absolute left-2 top-2">{number}</span></h1>  
            <h4 className="text-primary font-MBold text-base">{heading}</h4>
            <p className="text-primary font-MMedium pt-4 text-sm">{description}</p>
        </div>
    )
}

export default WhiteCard;
