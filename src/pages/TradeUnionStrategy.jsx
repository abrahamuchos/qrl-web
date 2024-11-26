import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import SingleCard from "../components/SingleCard.jsx";

import '../styles/TradeUnionStrategy.css';
import trazoHome from "@animations/trazos-home-2.json";
import puzzle from '../assets/img/puzzles-2.png';
import stroke from '../assets/img/stroke-8.png';
import stroke2 from '../assets/img/stroke-9.png';
import handshake from '../assets/img/handshake-executives.png';
import Cta from "../components/Cta.jsx";


export default function TradeUnionStrategy() {

  return (
    <section className='w-full'>
      <Hero
        animation={trazoHome}
        title="Anticipa conflictos, construye relaciones sostenibles"
        subTitle="Diseñamos estrategias sindicales a tu medida para reducir costos,mejorar la productividad y las relaciones laborales."
      />

      {/* Alliance (De la tensión a la alianza)*/}
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
            <span className="text-Dark-blue"> relaciones laborales </span> y hacerlas
            <span className="text-Dark-blue"> trascender.</span>
          </p>
        </div>
      </div>
      {/* End Alliance (De la tensión a la alianza)*/}

      {/*Process*/}
      <div className="w-full bg-Light-gray mb-0">
        <div className="max-container flex flex-col justify-center items-center py-10 px-7 gap-5
          sm:gap-8
          md:flex-row md:flex-wrap md:items-stretch md:gap-5 md:py-10
          xl:py-20 xl:px-20 xl:gap-16"
        >
          <Card className='w-[300px] sm:w-[350px] md:flex-2 lg:flex-1 lg:!px-16 xl:!pb-20'>
            <h2 className='heading-1-bold text-white mb-5 lg:mb-10'>Diagnóstico a profundidad</h2>
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
            <p className='text-base text-Very-dark-gray font-semibold !leading-9 md:heading-3-semi lg:px-20 xl:px-24'>
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
              <span className="text-white"> alcanza el normal desenvolvimiento </span> de la continuidad operativa, en
              un ambiente de confianza y estabilidad, mejorando la reputación de la empresa,
              <span className="text-white"> potenciando sus productos y servicios.</span>
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
                  text: 'de trabajadores ha sufrido violencia psicológica durante su labor',
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

            <div className="mt-10 basis-full text-center">
              <p className='text-base text-white'>Fuente: Organización Internacional del Trabajo (OIT)</p>
            </div>
          </div>
          {/*End Statics*/}

          {/*Productivity*/}
          <div className="pb-20 px-7 lg:w-10/12 lg:px-24">
            <h2 className="heading-1-bold text-white mb-5 md:mb-10">Paz laboral. Productividad asegurada.</h2>
            <p className='text-base text-Other-gray font-semibold md:heading-2-semi !leading-10'>
              Las empresas más exitosas fomentan relaciones laborales sólidas entre trabajadores, sindicatos y la
              organización,<span className="text-white"> creando un ambiente laboral sano</span> que se traduce en una
              mayor <span className="text-white"> eficiencia, menor rotación, menos ausentismo</span> y, en última
              instancia, un incremento significativo de la <span className="text-white"> productividad.</span>
            </p>
          </div>
          {/*End Productivity*/}
        </div>
      </div>
      {/* Gobernabilidad y Productivity*/}

      {/* Collective bargaining (Negociación colectiva)*/}
      <div id='negociacion-colectiva' className="w-full bg-white">
        <div className="max-container bg-[#154164] rounded-2xl py-10 pt-20 px-5 gap-5 flex flex-col justify-center items-center
          max-sm:mx-0 max-md:mt-32 max-2xl:m-10 3xl:mt-10"
        >

          {/*Mobile Card */}
          <div className="relative w-full h-[310px]
            min-[380px]:h-[280px] min-[415px]:h-[270px] min-[450px]:h-[230px] min-[560px]:h-[170px]
            sm:h-[190px]
            md:hidden"
          >
            <Card
              variant='secondary'
              stroke={stroke}
              className='w-[100%] h-[450px] absolute -top-[50%] bottom-0 left-0 right-0
                min-[380px]:h-[420px] min-[415px]:h-[390px] min-[450px]:h-[330px] min-[560px]:h-[250px]
                sm:px-9 sm:py-8 sm:h-[300px] sm:-top-[80%]
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1000px]'
            >
              <h2 className="heading-1-bold text-Dark-blue mb-5 md:mb-10">
                Negociaciones colectivas inteligentes
              </h2>
              <p className='text-base font-semibold text-Regular-gray !leading-10 md:heading-3-semi mb-5'>
                Diseñamos estrategias de negociación colectiva innovadoras que te permiten alcanzar acuerdos flexibles y
                sostenibles, reduciendo costos laborales y mejorando la productividad.
              </p>
            </Card>
          </div>
          {/* End Mobile Card */}

          <Card
            variant='secondary'
            stroke={stroke}
            className='max-md:hidden
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1000px]'
          >
            <h2 className="heading-1-bold text-Dark-blue mb-5 md:mb-10">
              Negociaciones colectivas inteligentes
            </h2>
            <p className='text-base font-semibold text-Regular-gray !leading-10 md:heading-3-semi mb-5'>
              Diseñamos estrategias de negociación colectiva innovadoras que te permiten alcanzar acuerdos flexibles y
              sostenibles, reduciendo costos laborales y mejorando la productividad.
            </p>
          </Card>

          <img src={handshake} alt="ejecutivos" className='w-full'/>

          <Card
            variant='secondary'
            stroke={stroke2}
            className='w-[100%]
                sm:w-[550px] sm:px-9 sm:py-8
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1000px]'
          >

            <p className='text-base font-semibold text-Regular-gray !leading-10 md:heading-3-semi mb-5'>
              La negociación colectiva es mucho más que un proceso extenso en el que los representantes de los
              trabajadores y de los empleadores se reúnen para discutir y acordar beneficios y condiciones de trabajo
              bajo los modelos tradicionales.
            </p>


            <p className='text-base font-semibold text-Regular-gray !leading-10 md:heading-3-semi mb-5'>
              Se trata de una herramienta estratégica que permite a las organizaciones construir un modelo de relaciones
              laborales sostenible en el que la transparencia, confianza y colaboración fomenten la productividad y el
              control del costo laboral. Para ello, es indispensable estar dispuesto a retar el status quo y adaptarse
              al
              cambio con la mirada puesta en el futuro.
            </p>

            <div className="flex flex-col md:flex-row">
              <h3 className="w-full heading-2-bold text-Regular-gray mb-5 ">Reducción de costos laborales</h3>
              <h3 className="w-full heading-2-bold text-Regular-gray mb-5 lg:mb-20">Menor rotación de personal</h3>
            </div>

            <div className="flex flex-col md:flex-row">
              <h3 className="w-full heading-2-bold text-Regular-gray mb-5">Prevención de conflictos</h3>
              <h3 className="w-full heading-2-bold text-Regular-gray mb-5 lg:mb-20">Adaptabilidad</h3>
            </div>
          </Card>
        </div>
      </div>
      {/* End Collective bargaining (Negociación colectiva)*/}

      {/* Conflict management and resolution (Manejo y resolución de conflictos) */}
      <div className="bg-[#DFE7ED] w-full">
        <div className="max-container py-10 pt-20 px-5 flex flex-col justify-center items-center lg:py-20">
          <Card
            variant='sixth'
            className='w-[100%]
                sm:w-[550px] sm:px-9 sm:py-8
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1000px]'
          >
            <h2 className="heading-1-bold text-Dark-blue mb-5">
              Manejo y resolución de conflictos
            </h2>
            <h3 className="heading-2-bold text-Regular-gray mb-5">
              Te garantizamos la <span className="text-Dark-blue">gestión estratégica de los conflictos</span> para
              impulsar la continuidad operativa.
            </h3>
            <p className='heading-3-semi text-Regular-gray mb-5'>
              Entendemos que los conflictos son parte natural de cualquier entorno laboral. Por eso, te ofrecemos un
              <span className="text-Dark-blue"> acompañamiento cercano y personalizado</span> para prevenir y resolver
              cualquier diferencia o desacuerdo que
              pueda surgir en tu organización.
            </p>

            <p className='heading-3-semi text-Regular-gray mb-5'>
              Juntos, encontraremos las mejores soluciones para mantener un ambiente de trabajo sano y productivo.
              Estamos seguros que contamos con
              <span className="text-Dark-blue"> opciones adaptadas a tu realidad organizacional.</span>
            </p>
          </Card>
        </div>
      </div>
      {/* End Conflict management and resolution (Manejo y resolución de conflictos) */}

      {/* CTA*/}
      <div className="w-full bg-Dark-blue">
        <div className="max-container h-[620px] sm:h-[500px] lg:h-[550px] flex justify-center items-center px-5">
          <Cta
            className='!bg-Other-Very-dark-blue'
            content={{
              title: {text: 'Alcanzar la paz laboral y optimizar tus operaciones'},
              subtitle: {text: 'Contáctanos y conversamos'}
            }}
            button={{text: 'Contáctanos', href: '/contactanos'}}
          />
        </div>
      </div>
      {/* End CTA*/}
      <div className="w-full h-[90px] md:h-[100px] bg-Dark-blue"></div>
    </section>
  );
}



