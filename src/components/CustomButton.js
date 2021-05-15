import React from 'react'

const CustomButton = ({className, BtnContent}) => {
    return (
        <button className={`${className} rounded-none transform transition-all duration-500 cursor-pointer hover:scale-105 outline-none border-none`}>
            {BtnContent}
        </button>
    )
}

export default CustomButton;
