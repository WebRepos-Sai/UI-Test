import React from 'react'
import Arrow from './Arrow'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const Footer = () => {
    return (
        <div className="bg-white">

            {/* ######################### FOOTER TOP ########################## */}
            <div className="bg-primary">
                <div  className="bg-secondary w-1/4  ml-auto p-4">
                <div data-aos="fade-left" className="flex justify-between">
            <p  className="text-white text-xs font-MLight mt-4">Get a quote now</p> <div className="bg-white w-10 h-10 rounded-full">
            <ArrowForwardIcon className="text-primary mt-2 ml-2"/>
        </div></div>
                </div>
                <div data-aos="zoom-in" className="row py-10 px-20">
                <div  className=" w-full sm:w-1/2 lg:w-1/4">
                <h1 className="text-white font-MMedium text-2xl mb-4">About Us</h1>
                <p className="text-xs text-white font-MLight mb-2">Our Story</p>
                <p className="text-xs text-white font-MLight mb-2">Join Our team</p>
                <p className="text-xs text-white font-MLight mb-2">FAQ</p>
                <p className="text-xs text-white font-MLight mb-2">Blog</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4">
                <h1 className="text-white font-MMedium text-2xl mb-4">Our Services</h1>
                <p className="text-xs text-white font-MLight mb-2">Soft House Washing</p>
                <p className="text-xs text-white font-MLight mb-2">Pressure Washing</p>
                <p className="text-xs text-white font-MLight mb-2">Gutter Cleaning</p>
                <p className="text-xs text-white font-MLight mb-2">Window Washing</p>
                <p className="text-xs text-white font-MLight mb-2">Fence Pressure Washing</p>
                <p className="text-xs text-white font-MLight mb-2">Deck Cleaning</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4">
                <h1 className="text-white font-MMedium text-2xl mb-4">Contact Us</h1>
                <p className="text-xs text-white font-MLight mb-4">713 597 8926</p>
                <p className="text-xs text-white font-MLight mb-4">info@advantageproservices.com</p>
                <p className="text-xs text-white font-MLight mb-2">12460 Northwest Freeway</p>
                <p className="text-xs text-white font-MLight mb-2">Houston, TX 77092</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4">
                <h1 className="text-white font-MMedium text-2xl mb-4">Newsletter</h1>
                <input type="text" placeholder="name@email.com" className="text-xs text-white font-MLight mb-2 placeholder-white placeholder:text-sm p-4 w-full bg-gray-500 bg-opacity-20"/>
                <div className="flex mt-2"><RadioButtonUncheckedIcon className="text-white "/>
                <p className="text-sm text-white font-MLight mb-2 ml-1"><small>I have read and agree to the <u>Privacy Policy*</u></small></p>
                </div>
                </div>
                </div>
            </div>

              {/* ######################### FOOTER BOTTOM ########################## */}

            <div className="flex justify-between p-10">
            <div className="flex">
                <p className="text-xs text-mini font-MRegular mr-4">Privacy Policy</p>
                <p className="text-xs text-mini font-MRegular mr-4">Cookies Policy</p>
                <p className="text-xs text-mini font-MRegular mr-4">Legal Notice</p>
            </div>
            <div>
            <p className="text-xs text-mini font-MRegular mr-4">
            © Advantage Pro Services Inc. All rights reserved.
            </p>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
