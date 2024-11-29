import Hero from "../components/Hero.jsx";

import '../styles/Cts.css';
import strokeCts from "@animations/cts.json";
import stroke from '../assets/img/stroke-14.png';
import stroke2 from "../assets/img/stroke-15.png";
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";

export default function Cts() {

  return (
    <section id='cts' className='w-full'>
      <Hero
        animation={strokeCts}
        title="Innovando en la gestión de procesos"
        subTitle="Estamos revolucionando la manera de abordar los procesos legales laborales"
      />

      <div className="w-full bg-Light-gray">
        <div className="max-container bg-puzzle py-10 px-7 flex flex-col justify-center items-center
            md:py-14 md:px-10
            lg:py-24 lg:px-20">

          <Card
            stroke={stroke}
            variant='secondary'
            className='w-[100%] mb-10
                sm:w-[550px] sm:px-9 sm:py-8
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16 lg:mb-20
                xl:w-[1000px]'
          >

            <h2 className='heading-1-bold text-Regular-gray mb-10 lg:mb-20'>
              La justicia, automatizada.
            </h2>

            <h3 className='heading-2-bold text-Regular-gray mb-10'>
              Próximamente: la solución definitiva para optimizar tus procesos legales laborales.
            </h3>

            <div className="flex justify-center sm:justify-end">
              <a href="/sobre-nosotros" className='btn-primary'>Próximamente</a>
            </div>
          </Card>

          <Card
            stroke={stroke2}
            className='w-[100%] mb-8
                sm:w-[550px] sm:px-9 sm:py-8
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1000px]'
          >

            <div className="text-center">
              <h2 className='heading-1-bold text-white mb-10 lg:mb-20'>
                Se el primero en el lanzamiento
              </h2>

              <h3 className='heading-2-bold text-white mb-10'>
                Contáctanos y se parte de la lista de espera
              </h3>

              <div className="flex justify-center">
                <Link to="/contactanos#contact-us" className='btn-tertiary'>Contáctanos</Link>
              </div>
            </div>

          </Card>
        </div>
      </div>
    </section>
  );
}



