import React, { Fragment } from 'react'
import ImageCard from './ImageCard'
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo3.png";
import photo3 from "../assets/photo4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Arrow from './Arrow';






const Carausel = () => {

    return (
        <Fragment>
          
        <Carousel
  additionalTransfrom={0}
  autoPlaySpeed={3000}
  centerMode={false}
  className="w-full"
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
      items: 3,
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
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
<ImageCard img={photo3}
        title={<div>Pellentesque elit eget gravida cum sociis natoque</div>}
        description={<div>Eget gravida cum sociis natoque <br/>  penatibus.</div>}
        text="READ MORE"
        arrow={<Arrow/>}
        />
  <ImageCard img={photo2}
        title={<div>Rhoncus mattis rhoncus urna <br/> neque viverra.</div>}
        description={<div>Varius sit amet mattis vulputate <br/> viverra</div>}
        text="READ MORE"
        arrow={<Arrow/>}
        />
    <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
   <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
    <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
    <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
    <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
    <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
   <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
   <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
    <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow/>}
        />
    <ImageCard img={photo3}
        title={<div>Augue mauris augue neque <br/> gravida.</div>}
        description="Cursus turpis massa tincidunt dui ut ornare lectus sit."
        text="READ MORE"
        arrow={<Arrow />}
        />
</Carousel>

</Fragment>

    )
}

export default Carausel;
