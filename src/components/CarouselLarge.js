import React, { Fragment } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageCard from './ImageCard';
import slide from "../assets/SliderCombineImg.png";



const CarouselLarge = () => {

    return (

        <Fragment>         
        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          className="w-2/3"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
<ImageCard img={slide}/>       
<ImageCard img={slide} />
<ImageCard img={slide} />
<ImageCard img={slide} />
</Carousel>

</Fragment>


    )
}

export default CarouselLarge;
