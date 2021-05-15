import React, { useEffect } from 'react'
import CustomButton from './CustomButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from '@material-ui/core';
import menuIcon from "../assets/hamburger.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease'
    });
      }, [])

    return (
        <div>
        <div>
        </div>
        <nav class="navbar navbar-expand-lg px-10 py-5">
  <div class="container-fluid">
    <Link data-aos="fade-right" class="navbar-brand px-0 lg:px-14" href="#"><CustomButton BtnContent="LOGO" className="text-white text-2xl p-3 px-8 outline-none bg-LogoBG font-MExtra tracking-widest hover:bg-secondary"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><img src={menuIcon} className="h-10 w-10 focus:outline-none" alt=""/></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav lg:ml-auto text-primary">
      <li class="nav-item px-6 dropdown">
          <Link class="nav-link text-primary hover:text-secondary font-MSBold text-xs dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SERVICES
          </Link>
          <ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item text-white font-MRegular hover:text-primary text-sm" href="#">Action</Link></li>
            <li><Link class="dropdown-item text-white font-MRegular hover:text-primary text-sm" href="#">Another action</Link></li>
            <li><Link class="dropdown-item text-white font-MRegular hover:text-primary text-sm" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item px-6">
          <Link class="nav-link text-primary hover:text-secondary font-MSBold text-xs active" aria-current="page" href="#">ABOUT US</Link>
        </li>
        <li class="nav-item px-6">
          <Link class="nav-link text-primary hover:text-secondary font-MSBold text-xs" href="#">BLOG</Link>
        </li>
        <li class="nav-item px-6 pr-20">
          <Link class="nav-link text-primary hover:text-secondary font-MSBold text-xs" href="#">CONTACT</Link>
        </li>
      </ul>
      <form data-aos="fade-left" class="d-flex">

        <CustomButton BtnContent={<p>SCHEDULE NOW <ArrowForwardIcon className="text-base"/></p>} className="bg-secondary hover:bg-primary w-26 p-3 font-MBold text-xs tracking-widest px-6 text-white"/>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
}

export default Header;
