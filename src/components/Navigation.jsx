import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import logo from '../assets/img/svg/qrl-logo.svg';
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(/**@type{boolean} */ false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(/**@type{boolean} */ false);
  const [isOpenDesktopDropdown, setIsOpenDesktopDropdown] = useState(/**@type{boolean} */ false);
  const [timeoutId, setTimeoutId] = useState(/**@type{NodeJS.Timeout|null|number}  */ null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  /**
   * Toggles the mobile menu open and closed.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  }

  /**
   * Toggle Dropdown sub menu (Mobile)
   */
  const toggleDropdown = () => {
    setIsOpenDropdown(prevState => !prevState);
  }

  /**
   * Handle mouse enter event for desktop dropdown menu
   */
  const handleMouseEnter = () => {
    setIsOpenDesktopDropdown(true);
  }

  /**
   * Handle mouse leave event for desktop dropdown menu
   */
  const handleMouseLeave = () => {
    setTimeoutId(setTimeout(() => {
      setIsOpenDesktopDropdown(false);
    }, 300));
  }

  /**
   * Handle mouse enter event into dropdown menu (desktop)
   */
  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  /**
   * Handle mouse leave event on dropdown menu (desktop)
   */
  const handleDropdownMouseLeave = () => {
    setTimeoutId(setTimeout(() => {
      setIsOpenDesktopDropdown(false);
    }, 300));
  };


  return (
    <nav className='absolute top-0 z-50 w-full flex flex-col justify-center items-center lg:top-4'>
      <div className="flex w-full justify-between items-center py-1 px-6 backdrop-blur-sm bg-white/20 ring-1 ring-black/5
        lg:m-2 lg:py-1 lg:px-16 lg:w-[95%] lg:rounded-2xl lg:shadow-l
        xl:w-[90%]
        2xl:w-[1400px] 2xl:px-20"
      >
        <Link to={"/"} className='z-50'>
          <img src={logo} alt="qrl-strategy-logo" className='w-[137px]'/>
        </Link>

        {/*Desktop Menu */}
        <div className="hidden space-x-6 w-3/5 lg:flex lg:justify-between lg:items-center">
          <Link to="/sobre-nosotros" className='hover:opacity-50 text-base text-white font-semibold tracking-[5%]'>
            Quienes
          </Link>

          {/*Dropdown Menu */}
          <div className="relative">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpenDesktopDropdown(true)}
              className="hover:opacity-75 text-base text-white font-semibold tracking-[5%]"
            >
              Reta al status quo
            </button>

            {/*Dropdown Menu Items*/}
            {isOpenDesktopDropdown && (
              <div
                className="absolute left-1/2 top-10 transform -translate-x-1/2  mt-2  bg-white/30
                backdrop-blur-sm shadow-lg rounded-md overflow-hidden z-50
                lg:w-[800px]
                xl:w-[900px]"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="grid grid-cols-4 gap-4 py-6 px-8">
                  <div className="space-y-3">
                    <HashLink to="/roadmap"
                       className="block text-Very-dark-blue text-base font-bold ">
                      Roadmap
                    </HashLink>
                    <HashLink to="/roadmap#premium"
                       className="block text-Very-dark-blue text-base">
                      Roadmap Premium
                    </HashLink>
                    <HashLink to="/roadmap#corporate"
                       className="block text-Very-dark-blue text-base">
                      Corporate Roadmap
                    </HashLink>
                  </div>

                  <div className="space-y-3">
                    <HashLink to="/estrategia-sindical"
                       className="block text-Very-dark-blue text-base font-bold ">
                      Estrategia Sindical
                    </HashLink>
                    <HashLink to="/estrategia-sindical#negociacion-colectiva"
                       className="block text-Very-dark-blue text-base">
                      Negociación colectiva
                    </HashLink>
                    <HashLink to="/estrategia-sindical#manejo-conflictos"
                       className="block text-Very-dark-blue text-base">
                      Manejo de conflictos
                    </HashLink>
                  </div>

                  <div className="space-y-3">
                    <Link to="/manejo-crisis"
                       className="block text-Very-dark-blue text-base font-bold ">
                      Manejo de Crisis
                    </Link>
                    <HashLink smooth to="/manejo-crisis#downsizing"
                       className="block text-Very-dark-blue text-base">
                      Downsizing
                    </HashLink>
                  </div>

                  <div className="space-y-3">
                    <Link to="/estrategia-compensacion"
                       className="block text-Very-dark-blue text-base font-bold ">
                      Estrategia de compensación
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {/* End Dropdown Menu Items*/}
          </div>
          {/*End Dropdown Menu */}

          <Link to="/contactanos" className='hover:opacity-50 text-base text-white font-semibold tracking-[5%]'>
            Lidera y trasciende
          </Link>
          <Link to="/contactanos" className='hover:opacity-50 text-base text-white font-semibold tracking-[5%]'>
            Contacto
          </Link>
        </div>
        {/*End Desktop Menu */}

        {/*Hamburger Icon*/}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes className='text-white text-lg'/> : <FaBars className='text-white text-lg'/>}
          </button>
        </div>
        {/*End Hamburger Icon*/}
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full overflow-hidden backdrop-blur-sm bg-white/20 px-6 pt-3 transition-all duration-300 ease-in-out 
          ${isMobileMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'} 
          lg:hidden`
        }
      >
        <Link to="/sobre-nosotros" className='block p-5 text-lg text-white font-semibold tracking-tighter text-shadow'>
          Quienes
        </Link>

        {/* Dropdown menu*/}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex w-full items-center justify-between p-5 text-lg text-white font-semibold text-shadow"
          >
            Reta el status quo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-200  ${isOpenDropdown ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          {/*Dropdown items menu*/}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out 
              ${isOpenDropdown ? 'max-h-[410px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="pl-6">
              <div className='mb-3'>
                <Link to="/roadmap"
                   className="block py-1 px-4 text-Very-dark-blue text-base font-bold  text-shdow">
                  Roadmap
                </Link>
                <HashLink to="/roadmap#premium"
                   className="block py-3 px-6 text-Very-dark-blue text-base text-shdow">
                  Roadmap Premium
                </HashLink>
                <HashLink to="/roadmap#corporate"
                   className="block py-3 px-6 text-Very-dark-blue text-base text-shdow">
                  Corporate Roadmap
                </HashLink>
              </div>

              <div className='mb-3'>
                <Link to="/estrategia-sindical"
                   className="block py-1 px-4 text-Very-dark-blue text-base font-bold text-shadow">
                  Estrategia Sindical
                </Link>
                <HashLink to="/estrategia-sindical#negociacion-colectiva"
                   className="block py-3 px-6 text-Very-dark-blue text-base text-shadow">
                  Negociación colectiva
                </HashLink>
                <HashLink to="/estrategia-sindical#manejo-conflictos"
                   className="block py-3 px-6 text-Very-dark-blue text-base text-shadow">
                  Manejo de conflictos
                </HashLink>
              </div>

              <div className='mb-3'>
                <Link to="/manejo-crisis"
                   className="block py-1 px-4 text-Very-dark-blue text-base font-bold text-shadow">
                  Manejo de Crisis
                </Link>
                <HashLink to="/manejo-crisis#downsizing"
                   className="block py-3 px-6 text-Very-dark-blue text-base text-shadow">
                  Downsizing
                </HashLink>
              </div>

              <div className='mb-3'>
                <Link to="/estrategia-compensacion"
                   className="block py-1 px-4 text-Very-dark-blue text-base font-bold text-shadow">
                  Estrategia de compensación
                </Link>
              </div>
            </div>
          </div>
          {/* End Dropdown items menu*/}
        </div>
        {/* End Dropdown menu*/}

        <a href="/contactanos" className='block p-5 text-lg text-white font-semibold tracking-tighter text-shadow'>
          Lidera y trasciende
        </a>
        <a href="/contactanos" className='block p-5 text-lg text-white font-semibold tracking-tighter text-shadow'>
          Contacto
        </a>
      </div>
      {/*End Mobile Menu */}

    </nav>
  );
}



