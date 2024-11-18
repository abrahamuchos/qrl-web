import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from '../assets/img/qrl-logo.svg';

export default function Navigation() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(/**@type{boolean} */ false);

  /**
   * Toggles the mobile menu open and closed.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  }


  return (
    <nav className='fixed top-0 z-50 w-full flex flex-col justify-center items-center lg:top-4'>
      <div className="flex w-full justify-around items-center overflow-hidden p-4 backdrop-blur-sm bg-white/20 ring-1 ring-black/5
        lg:m-2 lg:w-[75%] lg:rounded-2xl lg:shadow-lg
        xl:w-[90%]"
      >

        <img src={logo} alt="resturant-logo" className='w-[100px] h-[22px] mr-[5rem]'/>
        <div className="hidden space-x-6 lg:flex">
          <a href="/sobre-nosotros" className='hover:opacity-50'>
            Quienes
          </a>
          <a href="/" className='hover:opacity-50'>
            Reta el status quo
          </a>
          <a href="/" className='hover:opacity-50'>
            Lidera y trasciende
          </a>
          <a href="/" className='hover:opacity-50'>
            Contacto
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          <a href="/sobre-nosotros" className='block p-4 uppercase tracking-tighter'>
            Quienes
          </a>
          <a href="/" className='block p-4 uppercase tracking-tighter'>
            Reta el status quo
          </a>
          <a href="/" className='block p-4 uppercase tracking-tighter'>
            Lidera y trasciende
          </a>
          <a href="/" className='block p-4 uppercase tracking-tighter'>
            Contacto
          </a>
          {/*{LINKS.map((link) => (*/}
          {/*  <a key={link.targetId}*/}
          {/*     href={`#${link.targetId}`}*/}
          {/*     className="block p-4 uppercase tracking-tighter"*/}
          {/*     onClick={(e) => handleScroll(e, link.targetId)}*/}
          {/*  >*/}
          {/*    {link.text}*/}
          {/*  </a>*/}

          {/*))}*/}
        </div>

      )}
    </nav>
  );
}



