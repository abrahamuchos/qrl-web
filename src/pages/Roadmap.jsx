import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import Cta from "../components/Cta.jsx";

import '../styles/Roadmap.css';
import strokeRoadmap from "@animations/roadmap.json";
import rocketImg from '../assets/img/rocket.png'
import puzzle from '../assets/img/puzzle-2-desktop.png'
import stroke from '../assets/img/stoke-6.png';


export default function Roadmap() {

  return (
    <section id='roadmap' className="w-full">
      <Hero
        animation={strokeRoadmap}
        title="¡Prepárate para el despegue!"
        subTitle="Soluciones ajustadas a tu medida y a tu visión"
      />

      {/*Roadmap Premium*/}
      <div id='premium' className="w-full bg-Light-gray">
        <div className="max-container py-10 px-7 bg-cover bg-no-repeat bg-center bg-plan1
          md:py-14 md:px-10
          lg:h-[600px] lg:py-24 lg:px-20 lg:bg-[size:auto_100%] lg:bg-[position:right_center] lg:bg-no-repeat"
        >
          <div>
            <h2 className='heading-1-bold text-Dark-blue mb-5'>¡Ignición!</h2>
            <h2 className='heading-1-bold text-Dark-blue mb-7'>
              Tu <span className="text-Medium-blue">viaje</span> hacia el <span
              className="text-Medium-blue">éxito</span>
              <br/> comienza ahora
            </h2>
            <p className='text-base font-semibold text-Regular-gray !leading-10 w-full lg:heading-3-semi lg:w-[85%]'>
              <span className="text-Dark-blue">Roadmap Premium:</span> Tu nave espacial hacia el
              <span className="text-Dark-blue"> éxito profesional. </span>
              <br/>
              Nuestro plan de carrera <span className="text-Dark-blue">personalizado</span> es tu bitácora para navegar
              por el complejo mundo laboral. Al igual que una nave espacial, te equiparemos con las herramientas y el
              <span className="text-Dark-blue"> conocimiento</span> necesarios para
              <span className="text-Dark-blue"> explorar nuevos horizontes</span> y alcanzar el éxito.
            </p>
          </div>
        </div>
      </div>

      {/* Rocket section (Ticket Individual)*/}
      <div className="w-full bg-white">
        <div className="max-container h-auto py-10 px-7 bg-plan2 bg-cover bg-no-repeat bg-center flex flex-col
          md:py-14 md:px-10 md:flex-row
          lg:py-10 lg:px-20 lg:bg-[size:auto_100%] lg:bg-[position:left_center] lg:bg-no-repeat
          xl:h-[1150px]"
        >
          <div className='w-full order-2 flex justify-center md:order-1 md:w-1/3 lg:w-1/3'>
            <img src={rocketImg} alt="rocket-image" className='w-[220px] md:w-full'/>
          </div>

          <div className="w-full flex flex-col justify-center order-1 md:order-2 md:w-2/3 lg:w-2/3">
            <h2 className='heading-1-bold text-Dark-blue mb-10 xl:mb-20'>
              Ticket: Individual, ¿Comenzamos?
            </h2>
            <p className='text-base font-semibold text-Regular-gray mb-7 !leading-10 w-full md:heading-3-semi xl:mb-10'>
              Tu <span className="text-Dark-blue">viaje hacia la excelencia </span> inicia con un diagnóstico preciso de
              tu situación actual.
            </p>
            <p className='text-base font-semibold text-Regular-gray mb-7 !leading-10 w-full md:heading-3-semi xl:mb-10'>
              Al igual que un astronauta traza su ruta hacia un nuevo destino,
              <span className="text-Dark-blue"> Roadmap Premium</span> te ayudará a
              <span className="text-Dark-blue"> planificar</span>
              las escalas necesarias para optimizar tu <span className="text-Dark-blue"> tiempo</span>, proyectar tu
              <span className="text-Dark-blue">crecimiento </span> y ampliar tu visión del
              <span className="text-Dark-blue"> mercado laboral.</span>
            </p>
            <p className='text-base font-semibold text-Regular-gray mb-7 !leading-10 w-full md:heading-3-semi xl:mb-10'>
              Cada parada en este recorrido te brindará
              <span className="text-Dark-blue"> herramientas y conocimientos clave,</span> incluyendo
              <span className="text-Dark-blue"> asesoría especializada</span> para destacar en tus entrevistas de
              trabajo y asegurar un aterrizaje exitoso en tu <span className="text-Dark-blue">destino profesional.</span>
            </p>
          </div>

        </div>
      </div>
      {/* Rocket section (Ticket Individual)*/}
      {/*End Roadmap Premium*/}

      {/* Corporate Roadmap*/}
      <div id='corporate' className="w-full bg-Light-gray">
        <div className="max-container py-10 px-7 bg-plan3 bg-cover bg-no-repeat bg-center
          md:py-14 md:px-10
          lg:h-[600px] lg:py-24 lg:px-20 lg:bg-[size:auto_100%] lg:bg-[position:right_center] lg:bg-no-repeat"
        >
          <div>
            <h2 className='heading-1-bold text-Dark-blue mb-5'>Más tripulación, más destinos</h2>
            <h2 className='heading-1-bold text-Dark-blue mb-7'>Tu equipo, tu destino, tu nave</h2>

            <p className='text-base font-semibold text-Regular-gray !leading-10 w-full md:heading-3-semi lg:w-[85%]'>
              <span className="text-Dark-blue"></span>
              ¡Embarca en un <span className="text-Dark-blue">viaje hacia la excelencia </span>
              con nuestro <span className="text-Dark-blue"> Corporate Roadmap</span>!
              <br/>
              Diseñamos un <span className="text-Dark-blue"> plan de carrera</span> que
              <span className="text-Dark-blue"> transformará tu organización</span> en un destino irresistible para el
              talento. <span className="text-Dark-blue"> Atrae, desarrolla y retiene</span> a los mejores profesionales,
              impulsando la <span className="text-Dark-blue"> innovación</span> y el
              <span className="text-Dark-blue"> crecimiento.</span> Es como tener una bitácora que guiará a
              tu equipo hacia el <span className="text-Dark-blue">futuro, optimizando costos</span> y consolidando tu
              <span className="text-Dark-blue"> marca empleadora</span>
            </p>

          </div>
        </div>
      </div>

      <div className="w-full bg-Very-dark-blue">
        <div className="max-container bg-cover bg-no-repeat bg-center flex justify-center items-center px-5 py-20
          sm:bg-[size:auto_100%] sm:bg-[position:left_center] sm:bg-no-repeat
          lg:pt-20 lg:pb-40 lg:bg-[size:auto_100%] lg:bg-[position:left_center] lg:bg-no-repeat"
             style={{backgroundImage: `url(${puzzle})`}}
        >
          <Card
            stroke={stroke}
            variant='secondary'
            className='w-[100%]
                sm:w-[550px] sm:px-9 sm:py-8
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1000px]'
          >
            <h2 className="heading-1-bold text-Dark-blue mb-5 md:mb-10">
              El viaje comienza, con un diagnóstico
            </h2>

            <p className='text-base font-semibold text-Dark-blue !leading-10 md:heading-3-semi mb-5'>
              Iniciamos con un análisis detallado de tu tripulación, identificando a los
              <span className="text-Medium-blue"> talentos</span> y cargos que son esenciales para el
              <span className="text-Medium-blue"> éxito de tu misión</span>. A continuación, diseñamos una trayectoria
              personalizada, que guiará a tus equipos hacia sus metas profesionales.
            </p>

            <p className='text-base font-semibold text-Dark-blue !leading-10 md:heading-3-semi mb-5'>
              Nuestro <span className="text-Medium-blue"> simulador de carrera</span> te permitirá visualizar el
              <span className="text-Medium-blue"> futuro de tu organización</span> y validar cada paso del
              camino con nuestro equipo de expertos.
              <span className="text-Medium-blue"> ¡Prepárate para despegar hacia nuevas alturas!</span>
            </p>

          </Card>
        </div>
      </div>
      {/* End Corporate Roadmap*/}
      {/* CTA*/}
      <div className="w-full bg-Dark-blue">
        <div className="max-container h-[620px] sm:h-[500px] lg:h-[550px] flex justify-center items-center px-5">
          <Cta
            className='!bg-Other-Very-dark-blue'
            content={{
              title: {text: 'Ok QRL, estamos listos para el despegue'},
              subtitle: {text: 'Contáctanos y conversemos para dar inicio a este viaje intergalactico'}
            }}
            button={{text: 'Contáctanos', href: '/contactanos#contact-us'}}
          />
        </div>
      </div>
      {/* End CTA*/}
      <div className="w-full h-[90px] md:h-[100px] bg-Dark-blue"></div>

    </section>
  );
}



