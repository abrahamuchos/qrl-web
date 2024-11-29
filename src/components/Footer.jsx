import { Link } from 'react-router-dom';
import fbIcon from '../assets/img/svg/fb-icon.svg';
import igIcon from '../assets/img/svg/ig-icon.svg';
import linkedinIcon from '../assets/img/svg/linkedin-icon.svg';
import { HashLink } from "react-router-hash-link";

export default function Footer() {

  return (
    <div className='w-full h-[900px] relative md:h-[455px] lg:h-[300px]'>
      <footer className='w-full max-container bg-white rounded-t-[60px] shadow-2xl absolute left-1/2 right-1/2
      -translate-x-1/2 -translate-y-0 bottom-0'
      >
        <div
          className='flex flex-col justify-center items-center px-5 py-10 lg:flex-row lg:justify-between lg:px-3 xl:px-10'>
          <div className='lg:mr-6'>
            <h3 className="heading-2-bold text-Dark-Violet">Más allá de la consultoría.</h3>
            <h3 className="heading-3-bold text-Dark-Violet mb-10">¡Contáctanos!</h3>
            <h2 className="heading-1-bold text-Dark-Violet ">hola@qrlstrategy.com</h2>
            <h3 className="heading-1-bold text-Dark-Violet ">+58 412-798-57-34</h3>
          </div>

          <div className="flex flex-col md:flex-row md:gap-7 lg:gap-3 xl:gap-5">
            <ul className='flex flex-col gap-3 p-0 my-5 lg:my-0'>
              <li>
                <HashLink to="/#inicio" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Inicio
                </HashLink>
              </li>
              <li>
                <HashLink to="/sobre-nosotros#about-us" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  ¿Quiénes somos?
                </HashLink>
              </li>
              <li>
                <HashLink to="/contactanos#contact-us" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Contáctanos
                </HashLink>
              </li>
              <li>
                <HashLink to="/politica-privacidad#politica-privacidad" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Política de privacidad
                </HashLink>
              </li>
              <li>
                <HashLink to="/terminos-condiciones#terminos-condiciones" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Términos y condiciones
                </HashLink>
              </li>
            </ul>

            <ul className='flex flex-col gap-3 p-0 my-5 lg:my-0'>
              <li>
                <HashLink to="/roadmap#roadmap" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Roadmap
                </HashLink>
              </li>
              <li>
                <HashLink to="/roadmap#premium" className="text-sm lg:text-base text-Dark-Violet">
                  Roadmap Premium
                </HashLink>
              </li>
              <li>
                <HashLink to="/roadmap#corporate" className="text-sm lg:text-base text-Dark-Violet">
                  Corporate Roadmap
                </HashLink>
              </li>
              <li>
                <HashLink to="/manejo-crisis#manejo-crisis" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Manejo de Crisis
                </HashLink>
              </li>
              <li>
                <HashLink to="/manejo-crisis#downsizing" className="text-sm lg:text-base text-Dark-Violet">
                  Downsizing
                </HashLink>
              </li>
            </ul>

            <ul className='flex flex-col gap-3 p-0 my-5 lg:my-0'>
              <li>
                <HashLink to="/estrategia-sindical#estrategia-sindical" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Estrategia Sindical
                </HashLink>
              </li>
              <li>
                <HashLink to="/estrategia-sindical#negociacion-colectiva" className="text-sm lg:text-base text-Dark-Violet">
                  Negociación colectiva
                </HashLink>
              </li>
              <li>
                <HashLink to="/estrategia-sindical#manejo-conflictos" className="text-sm lg:text-base text-Dark-Violet">
                  Manejo de conflictos
                </HashLink>
              </li>
              <li>
                <HashLink to="/estrategia-compensacion#compensation-strategy" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Estrategia de compensación
                </HashLink>
              </li>
            </ul>
          </div>


        </div>

        <div
          className='w-full pb-5 px-4 flex flex-col items-center md:flex-row md:justify-between md:items-center lg:px-10'>
          <div className='order-3 md:order-1'>
            <span className='text-sm text-Dark-Violet'>Copyright © 2024 QRL Strategy</span>
          </div>

          <div className='order-1 md:order-2 flex flex-row gap-5'>
            <a href="https://www.instagram.com/qrlstrategy" target='_blank'>
              <img src={igIcon} alt="ig-icon" className='w-14 md:w-11'/>
            </a>
            <Link to="https://www.google.co.ve" target='_blank'>
              <img src={fbIcon} alt="fb-icon" className='w-14 md:w-11'/>
            </Link>
            <Link to="https://www.google.co.ve" target='_blank'>
              <img src={linkedinIcon} alt="likenin-icon" className='w-14 md:w-11'/>
            </Link>
          </div>

          <div className='order-2 md:order-3'>
            <span className='text-sm text-Dark-Violet'>hola@qrlstrategy.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


