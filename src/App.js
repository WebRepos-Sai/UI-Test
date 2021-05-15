import React from 'react';
import banner1 from "./assets/banner1.png";
import Header from "./components/Header";
import firstbg from "./assets/firstbg.png";
import image1 from "./assets/cleaning.png";
import Arrow from './components/Arrow';
import WhiteCard from './components/WhiteCard';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomButton from './components/CustomButton';
import "./index.css";
import Carausel from "./components/Carausel"; 
import CarouselLarge from './components/CarouselLarge';
import Footer from './components/Footer';
import EmailIcon from '@material-ui/icons/Email';

function App() {
  return (
    <div className="bg-white">
      
      {/* ###################################### TOP HEADER ############################################ */}

      <div className="px-10 lg:px-20 md:flex pt-10 pb-3 justify-between">
        <p className="font-MMedium text-xs">Any questions? Call to receive a free estimate: <span className="font-MBold text-secondary pl-5">713-597-8926</span></p>
        <p className="px-0 md:px-4 font-MRegular border-l-2 text-xs text-primary"><EmailIcon className="text-secondary text-sm ml-4 mr-4"/>info@testdomain.com</p>        
        </div>
        <hr className="bg-line w-full"/>

         {/* ###################################### HEADER COMPONENT ############################################ */}
       
        <Header/>

         {/* ###################################### MAIN HEADING ROW-1 ############################################ */}

      <div className="relative">
      <img src={firstbg} className="img-fluid h-100" alt=""/>
      <div className="absolute top-14 left-28">
        <p data-aos="fade-right" className="text-primary text-xs font-MBold tracking-widest pb-4 uppercase">Adipiscing tristique risus nec feugiat</p>
        <h1 data-aos="fade-left" className="text-primary text-3xl sm:text-5xl font-MBold tracking-wider uppercase">Maecenas ultricies</h1>
      </div>
      </div>

         {/* ###################################### BANNER IMAGE ROW-2 ############################################ */}

      <div>
        <img src={banner1} alt="" className="img-fluid" />
      </div>

         {/* ###################################### CLEANING IMAGE ROW-3 ############################################ */}
     
      <div className="py-14 px-20">
        <p data-aos="fade-right"  className="text-primary text-xs font-MBold tracking-widest pb-4 uppercase">Dignissim sodales ut eu sem</p>
        <h2 data-aos="fade-left" className="text-primary text-3xl sm:text-xl font-MBold tracking-wider uppercase">Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Justo eget magna fermentum iaculis eu.</h2>
        <div data-aos="fade-up" className="py-10 row justify-around">
          <div className="w-full md:w-1/2">
        <p className="text-primary text-xs font-MMedium pb-4 leading-6 mt-10">Faucibus in ornare quam viverra orci. Et tortor at risus viverra adipiscing at in tellus. Nisi scelerisque eu ultrices vitae. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Et netus et malesuada fames ac turpis egestas sed.<br/>
        <span className="text-primary font-MBold text-sm tracking-wider flex"><Arrow className="mt-8 bg-secondary text-white"/><p className="pt-10 pl-5">REQUEST A QUOTE</p></span>
        </p>
        </div>
        <div className="w-full md:w-1/2">
        <img src={image1} alt="" className="w-96 transform transition-all duration-500 cursor-pointer hover:scale-105" />
        </div>
      </div>
      </div>

         {/* ###################################### HOW IT WORKS SECTION - WHITE CARDS ROW-4 ############################################ */}

      <div className="bg-image2">
      <div className="py-14">
      <div data-aos="zoom-in" className="text-center">
        <h1 className="font-MExtra text-primary text-2xl lg:text-4xl pb-20">HOW IT WORKS</h1>
        </div>
      <div className="flex flex-col lg:flex-row items-center justify-center pb-4">
        <div data-aos="flip-right" className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <WhiteCard
          className="w-72"
          number="01"
          heading={<div>FAST ONLINE <br/>BOOKING</div>}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, impedit id ut, voluptates ex?"
          />
        </div>
        <div data-aos="flip-right" className="w-full sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <WhiteCard
          className="w-72"
          number="02"
          heading="INSPECTION AND EXPERT CLEANING"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, impedit id ut, voluptates ex?"
          />
        </div>
        <div data-aos="flip-right" className="w-full sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
          <WhiteCard
          className="w-72"
          number="03"
          heading="ENJOY YOUR BEAUTIFUL HOME"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, impedit id ut, voluptates ex?"
          />
        </div>
      </div>

      <div className="text-center pt-20">
        <CustomButton className="bg-secondary hover:bg-primary w-54 p-3 font-MBold text-xs tracking-widest px-6 text-white" BtnContent={<p>CONTACT US <ArrowForwardIcon/></p>}/>
      </div>
      
      </div>

      </div>

       {/* ###################################### CARDS WITH IMAGES SECTION ROW-5 ############################################ */}

      <div data-aos="fade-right" className="py-14 px-10 lg:px-20">
        <p className="text-primary font-MBold text-xl">Our latest news from the blog</p>
        
      </div>
      <div data-aos="fade-left" className="px-10 lg:px-48">
      <p className="text-primary font-MMedium text-sm mb-5 w-1/2">Cum sociis natoque penatibus et. In est ante in nibh mauris cursus mattis molestie a. Eget gravida cum sociis natoque penatibus. Consequat interdum varius sit amet mattis.</p>      
      </div>
      <div className="py-14 px-10 lg:px-44 flex">
      <Carausel className="w-4/6"/>
      </div>

       {/* ###################################### BACKGROUND IMAGE WITH TITLE SECTION ROW-6 ############################################ */}

      <div className="py-14 px-20 bg-banner">
      <div data-aos="zoom-in" className="py-20">
      <p className="text-white font-MSBold text-xs tracking-widest py-4">
      Varius sit amet mattis vulputate
      </p>
      <h1 className="text-white font-MBold tracking-wide text-3xl lg:text-6xl w-2/3">
      Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. 
      </h1>
      <CustomButton className="bg-white w-54 p-2 mt-10 font-MBold text-xs tracking-widest px-6 text-black hover:bg-primary hover:text-white" BtnContent={<p>GET STARTED <ArrowForwardIcon/></p>}/>
      </div>
      </div>

      {/* ###################################### BROWSE SERVICES SECTION ROW-7 ############################################ */}
      
      <div className="py-14 px-20">

      <div data-aos="zoom-in">
        <p className="font-MBold text-4xl text-center text-primary">BROWSE SERVICES</p>
      </div>
      <div className="flex flex-row mt-20 justify-center mb-4">
      <p className="font-MRegular lg:font-MBold text-xs text-primary mr-2 lg:mr-11 uppercase cursor-pointer hover:text-primary">Fence Cleaning</p>
      <p className="font-MRegular lg:font-MBold text-xs text-faded mr-2 lg:mr-11 uppercase cursor-pointer hover:text-primary">Gutter Cleaning</p>
      <p className="font-MRegular lg:font-MBold text-xs text-faded mr-2 lg:mr-11 uppercase cursor-pointer hover:text-primary">Window Washing</p>
      <p className="font-MRegular lg:font-MBold text-xs text-faded mr-2 lg:mr-11 uppercase cursor-pointer hover:text-primary">Pressure Washing</p>
      <p className="font-MRegular lg:font-MBold text-xs text-faded uppercase cursor-pointer hover:text-primary">Deck Cleaning</p>
      </div>
      <div className="w-full relative">
      <CarouselLarge />
      <div className="absolute text-4xl top-36 right-64">
      <div className="hidden xl:block 2xl:invisible bg-white lg:w-72 shadow-md m-auto px-10 pb-14 pt-10 justify-center">
            <p className="text-primary font-MRegular pt-4 text-sm">
            Aliquet bibendum enim facilisis gravida. Eu feugiat pretium nibh ipsum. Faucibus in ornare quam viverra orci.
            </p>
        </div>
      </div>
      </div>
      </div>
      
       {/* ###################################### FOOTER SECTION ROW-8 ############################################ */}
      
      <div className="-mt-14">
        <Footer/>
      </div>
     
    </div>
  );
}

export default App;
