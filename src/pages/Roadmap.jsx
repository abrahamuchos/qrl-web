import Hero from "../components/Hero.jsx";

import trazoHome from "@animations/trazos-home-2.json";
import plans1 from '../assets/img/plans-1.png'

export default function Roadmap() {
  const roadMapBg = {
    backgroundImage: 'url(' + plans1 + ')',
    // backgroundSize: '50% auto',
    // backgroundPosition: 'right center',
    // backgroundRepeat: 'no-repeat',
  }

  return (
    <section className="w-full">
      <Hero
        animation={trazoHome}
        title="¡Prepárate para el despegue!"
        subTitle="Soluciones ajustadas a tu medida y a tu visión"
      />

      <div id='premium' className="w-full bg-Light-gray">
        <div className="max-container py-10 px-7 bg-cover bg-no-repeat bg-center
          md:py-14 md:px-10
          lg:h-[600px] lg:py-24 lg:px-20 lg:bg-[size:auto_100%] lg:bg-[position:right_center] lg:bg-no-repeat"
          style={roadMapBg}
        >
          <div>
            <h2 className='heading-1-bold text-Dark-blue mb-5'>¡Ignición!</h2>
            <h2 className='heading-1-bold text-Dark-blue mb-7'>
              Tu <span className="text-Medium-blue">viaje</span> hacia el <span
              className="text-Medium-blue">éxito</span>
              <br/> comienza ahora
            </h2>
            <p className='text-base font-semibold text-Regular-gray !leading-9 w-full md:heading-3-semi lg:w-[85%]'>
              <span className="text-Dark-blue">Roadmap Premium:</span> Tu nave espacial hacia el <span
              className="text-Dark-blue">éxito </span>
              profesional.
              <br/>
              Nuestro plan de carrera <span className="text-Dark-blue">personalizado</span> es tu guía estelar para
              navegar por el complejo mundo
              laboral. Al igual que una nave espacial, te equiparemos con las herramientas y el <span
              className="text-Dark-blue">conocimiento </span>necesarios para
              <span className="text-Dark-blue"> explorar nuevos horizontes</span> y alcanzar las estrellas.
            </p>
          </div>
        </div>
      </div>


      <div className="w-full h-[900px] bg-green-100">

      </div>


    </section>
  );
}



