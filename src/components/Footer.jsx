import fbIcon from '../assets/img/svg/fb-icon.svg';
import igIcon from '../assets/img/svg/ig-icon.svg';
import linkedinIcon from '../assets/img/svg/linkedin-icon.svg';

export default function Footer() {

  return (
    <div className='w-full h-[900px] relative md:h-[455px] lg:h-[300px]'>
      <footer className='w-full max-container bg-white rounded-t-[60px] shadow-2xl absolute left-1/2 right-1/2
      -translate-x-1/2 -translate-y-0 bottom-0'
      >
        <div className='flex flex-col justify-center items-center px-5 py-10 lg:flex-row lg:justify-between lg:px-3 xl:px-10'>
          <div className='lg:mr-6'>
            <h3 className="heading-2-bold text-Dark-Violet">Más allá de la consultoría.</h3>
            <h3 className="heading-3-bold text-Dark-Violet mb-10">¡Contáctanos!</h3>
            <h2 className="heading-1-bold text-Dark-Violet ">hola@qrlstrategy.com</h2>
            <h3 className="heading-1-bold text-Dark-Violet ">+58 412-798-57-34</h3>
          </div>

          <div className="flex flex-col md:flex-row md:gap-7 lg:gap-3 xl:gap-5">
            <ul className='flex flex-col gap-3 p-0 my-5 lg:my-0'>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Términos y condiciones
                </a>
              </li>
            </ul>

            <ul className='flex flex-col gap-3 p-0 my-5 lg:my-0'>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-Dark-Violet">
                  Roadmap Premium
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-Dark-Violet">
                  Corporate Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Manejo de Crisis
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-Dark-Violet">
                  Downsizing
                </a>
              </li>
            </ul>

            <ul className='flex flex-col gap-3 p-0 my-5 lg:my-0'>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Estrategia Sindical
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-Dark-Violet">
                  Negociación colectiva
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-Dark-Violet">
                  Manejo de conflictos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base font-bold text-Dark-Violet">
                  Estrategia de compensación
                </a>
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
            <a href="/#">
              <img src={igIcon} alt="ig-icon" className='w-14 md:w-11'/>
            </a>
            <a href="#">
              <img src={fbIcon} alt="fb-icon" className='w-14 md:w-11'/>
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="likenin-icon" className='w-14 md:w-11'/>
            </a>
          </div>

          <div className='order-2 md:order-3'>
            <span className='text-sm text-Dark-Violet'>hola@qrlstrategy.com</span>
          </div>
        </div>


      </footer>
    </div>

  );
}


