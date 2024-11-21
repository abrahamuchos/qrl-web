import Hero from "../components/Hero.jsx";

import trazoHome from "@animations/trazos-home-2.json";
import puzzleSingleDarkBlue from "../assets/img/puzzle-single-dark-blue.png"
import puzzleSingleLightBlue from "../assets/img/puzzle-single-light-blue.png"
import puzzle from "../assets/img/puzzle-desktop.png"

export default function Home() {

  return (
    <section className='w-full'>
      <Hero
        animation={trazoHome}
        title="Transformamos tu negocio, juntos."
        subTitle="Incubadora de ideas para transcender contigo"
      />
      {/*About Us*/}
      <div className="max-container h-[500px] relative lg:h-[700px]">
        <img
          src={puzzleSingleDarkBlue}
          alt="puzzle-dark"
          className="absolute right-1/2 z-0 md:hidden"
        />
        <img
          src={puzzleSingleLightBlue}
          alt="puzzle-light"
          className="absolute -bottom-[12%] left-1/2 z-0 md:hidden"
        />
        <img
          src={puzzle}
          alt=""
          className="absolute h-[100%] max-md:hidden"
        />

        <div className="w-[335px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-7 py-5
          bg-Light-gray backdrop-blur-sm opacity-80 rounded-2xl
          sm:w-[550px] sm:px-9 sm:py-8
          md:w-[600px] md:px-10 md:py-8
          lg:w-[800px]
          xl:w-[1000px]
          "
        >
          <h2 className='heading-1-bold text-Dark-blue mb-10 lg:mb-14'>
            La consultoría del mañana, hoy.
          </h2>
          <h3 className='heading-2-semi text-Dark-blue mb-10 lg:mb-14'>
            Soluciones estratégicas para crecer.
            <br/>
            Impulsa tu negocio con ideas que marcan la diferencia.
          </h3>
          <div className="flex justify-center md:justify-end">
            <a href="/sobre-nosotros" className='btn-primary'>Descubre más</a>
          </div>
        </div>
      </div>
      {/* End About Us*/}




    </section>
  );
}



