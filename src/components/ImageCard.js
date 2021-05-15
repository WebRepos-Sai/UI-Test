import React from 'react';
import Arrow from './Arrow';


const ImageCard = ({ className, img, title, description, text, arrow }) => {
    return (

           <div class="card border-none mr-4">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body m-0 p-0 pt-6 px-1">
    <h5 class="card-title font-MSBold text-sm text-MSBold py-4">{title}</h5>
    <p class="card-text font-MRegular text-primary text-sm">{description}</p>
    <p className="flex py-10">{arrow} <span className="text-primary font-MBold text-xs tracking-widest mt-3 ml-4">{text}</span></p>
  </div>
</div> 
        
    )
}

export default ImageCard
