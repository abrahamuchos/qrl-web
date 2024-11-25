import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";

import trazoHome from "@animations/trazos-home-2.json";
import puzzle from '../assets/img/puzzles-2.png';

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
      <div className="w-full bg-Light-gray">
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
              Diseñamos un plan a la medida para <span className="text-white"> prevenir conflictos </span>y fomentar la colaboración.
            </p>
          </Card>

          <Card className='w-[300px] sm:w-[350px] md:w-10/12 lg:mx-10 xl:mx-16 lg:!px-16'>
            <h2 className='heading-1-bold text-white mb-5 lg:mb-10'>Resultados tangibles</h2>
            <p className='text-base text-Other-gray font-semibold !leading-10 md:heading-2-semi md:pr-20 xl:pr-40'>
              Con años de experiencia, te damos acceso a <span className="text-white"> modelos exitosos</span> que conducen
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

      <div className="bg-green-200 h-[700px] w-full"></div>
    </section>
  );
}



