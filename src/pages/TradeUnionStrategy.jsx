import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";

import '../styles/TradeUnionStrategy.css';
import trazoHome from "@animations/trazos-home-2.json";
import puzzle from '../assets/img/puzzles-2.png';
import SingleCard from "../components/SingleCard.jsx";


export default function TradeUnionStrategy() {

  return (
    <section className='w-full'>
      <Hero
        animation={trazoHome}
        title="Anticipa conflictos, construye relaciones sostenibles"
        subTitle="Diseñamos estrategias sindicales a tu medida para reducir costos,mejorar la productividad y las relaciones laborales."
      />

      <div className="max-container bg-white py-10 px-7 flex flex-col  justify-center items-center
          md:flex-row md:py-14 md:gap-4
          xl:py-10 xl:px-20 xl:gap-6"
      >
        <div className="w-full order-2 flex justify-center md:order-1 md:w-1/3 lg:w-1/2">
          <img
            src={puzzle}
            alt="rompecabezas-img"
            className='max-w-[255px] sm:max-w-[300px] md:max-w-[260px] lg:max-w-[450px] xl:max-w-[630px]'
          />
        </div>

        <div className="order-1 mb-5 md:order-2 md:mb-0 md:w-2/3 lg:w-1/2">
          <h2 className='heading-1-bold text-Dark-blue mb-5 lg:mb-7'>De la tensión a la alianza</h2>

          <p className='text-base font-semibold text-Regular-gray !leading-10 w-full lg:heading-3-semi lg:w-[85%]'>
            Imagina un lugar de trabajo en el que la organización, los trabajadores y sus sindicatos trabajan juntos
            para
            alcanzar los <span className="text-Dark-blue"> objetivos comunes</span>. Nosotros te llevamos de la
            tensión a la alianza, diseñando estrategias personalizadas para transformar tus
            <span className="text-Dark-blue">relaciones laborales </span> y hacerlas
            <span className="text-Dark-blue"> trascender.</span>
          </p>
        </div>
      </div>

      {/*Process*/}
      <div className="w-full bg-Light-gray mb-0">
        <div className="max-container flex flex-col justify-center items-center py-10 px-7 gap-5
          sm:gap-8
          md:flex-row md:flex-wrap md:items-stretch md:gap-5 md:py-10
          xl:py-20 xl:px-20 xl:gap-16"
        >
          <Card className='w-[300px] sm:w-[350px] md:flex-2 lg:flex-1 lg:!px-16 xl:!pb-20'>
            <h2 className='heading-1-bold text-white mb-5 lg:mb-10'>Diagnostico a profundidad</h2>
            <p className='text-base text-Other-gray font-semibold md:heading-2-semi !leading-10'>
              Entendemos tu realidad organizacional para identificar <span className="text-white"> oportunidades </span>
              y potenciar tus fortalezas.
            </p>
          </Card>

          <Card className='w-[300px] sm:w-[350px] md:flex-2 lg:flex-1 lg:!px-16 xl:!pb-20'>
            <h2 className='heading-1-bold text-white mb-5 lg:mb-10'>Estrategia <br/>personalizada</h2>
            <p className='text-base text-Other-gray font-semibold md:heading-2-semi !leading-10'>
              Diseñamos un plan a la medida para <span className="text-white"> prevenir conflictos </span>y fomentar la
              colaboración.
            </p>
          </Card>

          <Card className='w-[300px] sm:w-[350px] md:w-10/12 lg:mx-10 xl:mx-16 lg:!px-16'>
            <h2 className='heading-1-bold text-white mb-5 lg:mb-10'>Resultados tangibles</h2>
            <p className='text-base text-Other-gray font-semibold !leading-10 md:heading-2-semi md:pr-20 xl:pr-40'>
              Con años de experiencia, te damos acceso a <span className="text-white"> modelos exitosos</span> que
              conducen
              a la <span className="text-white"> paz laboral</span> y maximizan el rendimiento.
            </p>
          </Card>

          <div className='w-full mt-5 md:w-10/12'>
            <p className='text-base text-Very-dark-gray font-semibold !leading-9 md:heading-3-semi'>
              Nuestra estrategia sindical te ayudará a <span className="text-Dark-Violet">innovar en tus relaciones laborales</span>
              , reducir costos y aumentar la productividad. Diseñada específicamente para empresas con sindicatos o
              Consejos Productivos de Trabajadores. Nuestras soluciones te brindan las herramientas y el conocimiento
              necesarios para construir un ambiente de trabajo colaborativo y eficiente.
            </p>
          </div>
        </div>
      </div>
      {/*End Process*/}

      {/* Gobernabilidad y Productivity*/}
      <div className="w-full bg-stroke">
        <div className="max-container flex flex-col justify-center items-center">

          {/*Gobernabilidad*/}
          <div className="pt-20 pb-10 px-7 lg:w-10/12 lg:px-24">
            <h2 className="heading-1-bold text-white mb-5 md:mb-10">Gobernabilidad. Una alianza para el éxito.</h2>
            <p className='text-base text-Other-gray font-semibold md:heading-2-semi !leading-10'>
              La gobernabilidad es la capacidad que tiene la organización de ejercer la dirección, la administración y
              el control de las actividades que se desarrollan en la instalación. A través de este control, la
              organización
              alcanza el normal desenvolvimiento de la continuidad operativa, en un ambiente de confianza y estabilidad,
              mejorando la reputación de la empresa, potenciando sus productos y servicios.
            </p>
          </div>
          {/*End Gobernabilidad*/}

          {/*Statics*/}
          <div className="w-full pb-10 px-7 flex flex-col justify-center items-center gap-5
            md:flex-row md:flex-wrap md:justify-around xl:py-10 xl:px-20"
          >
            <SingleCard
              className='w-[220px] h-[220px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[220px] xl:w-[280px] xl:h-[270px]'
              content={{
                title: {text: '8,5%'},
                paragraph: {text: 'de trabajadores ha sufrido violencia durante su labor', className: 'lg:font-bold'}
              }}
            />
            <SingleCard
              className='w-[220px] h-[220px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[220px] xl:w-[280px] xl:h-[270px]'
              content={{
                title: {text: '17,9%'},
                paragraph: {
                  text: 'de trabajadores ha sufrido violencia psicologica durante su labor',
                  className: 'lg:font-bold'
                }
              }}
            />
            <SingleCard
              className='w-[220px] h-[220px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[220px] xl:w-[280px] xl:h-[270px] '
              content={{
                title: {text: '14%'},
                paragraph: {text: 'de caída en la productividad por violencia en el trabajo', className: 'lg:font-bold'}
              }}
            />

            <div className="mt-10">
              <p className='text-base text-white'>Fuente: Organización Internacional del Trabajo (OIT)</p>
            </div>
          </div>
          {/*End Statics*/}

          {/*Productivity*/}
          <div className="pb-20 px-7 lg:w-10/12 lg:px-24">
            <h2 className="heading-1-bold text-white mb-5 md:mb-10">Paz laboral. Productividad asegurada.</h2>
            <p className='text-base text-Other-gray font-semibold md:heading-2-semi !leading-10'>
              Las empresas más exitosas fomentan relaciones laborales sólidas entre trabajadores, sindicatos y la
              organización, creando un ambiente laboral sano que se traduce en una mayor eficiencia, menor rotación,
              menos ausentismo y, en última instancia, un incremento significativo de la productividad.
            </p>
          </div>
          {/*End Productivity*/}

        </div>
      </div>
      {/* Gobernabilidad y Productivity*/}


      <div className="bg-green-200 w-full h-[500px]"></div>


    </section>
  );
}



