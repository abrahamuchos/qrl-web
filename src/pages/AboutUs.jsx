import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import Cta from "../components/Cta.jsx";

import '../styles/AboutUs.css';
import strokeAboutUs from "@animations/about-us.json";
import plant from "../assets/img/plant.png";
import quote from "../assets/img/quotes.png";
import puzzleLightBlue from '../assets/img/puzzle-light-blue-bg-about-us.png'



export default function AboutUs() {

  return (
    <section id='about-us' className='w-full'>
      <Hero
        animation={strokeAboutUs}
        title="El Dream Team de la consultoría"
        subTitle="Ideas frescas,  soluciones personalizadas. Desafía el status quo con nosotros."
      />

      {/*Incubadora de Ideas*/}
      <div className="bg-white w-full">
        <div className="max-container py-10 px-7 flex flex-col justify-center items-center
            md:py-14 md:px-10
            lg:flex-row lg:py-16 lg:px-10
            xl:py-24 xl:px-20"
        >

          <div className="basis-1 mb-10 md:basis-3/5 lg:basis-3/4 lg:pr-10 xl:pr-20">
            <h2 className="heading-1-bold text-Dark-blue mb-5 lg:mb-10">
              Incubadora de ideas para <br className='max-sm:hidden'/> trascender contigo
            </h2>
            <p className='text-base text-Regular-gray font-semibold md:heading-3-semi !leading-10'>
              Vamos más allá de lo que se espera de una Consultora, retamos el status quo para brindar soluciones
              estratégicas que conducen a la optimización de procesos a través de la excelencia, la gestión de cambios e
              innovación, lo que nos convierte en una incubadora de ideas para trascender contigo.
            </p>
          </div>

          <div className="basis-1 md:basis-2/5 lg:basis-3/12 xl:basis-1/2">
            <img src={plant} alt="planta-incubadora"
                 className="max-w-[350px] sm:max-w-[450px] lg:max-w-[330px] xl:max-w-[530px]"/>
          </div>
        </div>
      </div>
      {/*Incubadora de Ideas*/}

      {/*Valores*/}
      <div className="w-full bg-Light-gray">
        <div className="max-container pt-0 pb-10 px-7 bg-puzzle flex flex-col justify-center
            md:py-14 md:px-10
            lg:py-16 lg:px-10
            xl:py-24 xl:px-20"
        >
          <div className="w-full h-[100px] relative md:hidden">
            <img
              src={puzzleLightBlue}
              alt="rompecabezas"
              className='absolute z-10 -top-[60%] bottom-0 -left-[15%] right-0'/>
          </div>
          <h2 className="heading-1-bold text-Regular-gray mb-5"> Lo que nos define</h2>
          <div className="pl-10">
            <p className='text-base text-Regular-gray font-semibold mb-10 md:heading-3-semi !leading-10'>
              En QRL Strategy, creemos que los <br className='max-sm:hidden'/>
              valores son el cimiento de todo lo que <br className='max-sm:hidden'/>
              hacemos.
            </p>
            <ul>
              <li className="text-Dark-blue heading-1-bold mb-5">Compromiso</li>
              <li className="text-Dark-blue heading-1-bold mb-5">Respeto</li>
              <li className="text-Dark-blue heading-1-bold mb-5">Resiliencia</li>
              <li className="text-Dark-blue heading-1-bold mb-5">Lealtad</li>
              <li className="text-Dark-blue heading-1-bold mb-5">Honestidad</li>
            </ul>
          </div>
        </div>
      </div>
      {/*End Valores*/}

      {/*Quotes*/}
      <div className="w-full bg-white">
        <div className="max-container py-20 px-10 flex justify-center items-center relative
            sm:px-16
            md:py-20 md:px-20
            lg:py-32
            xl:py-48 xl:px-20"
        >
          <img
            src={quote}
            alt="cita"
            className='w-[200px] absolute right-0 bottom-0 top-0 left-0 lg:top-[12%] lg:left-0 xl:left-[12%] xl:top-[20%]'
          />

          <p className='heading-3 text-Very-dark-blue !leading-8 md:!leading-[48px]'>
            &quot;Las empresas que han logrado revolucionar su industria y vencer a los
            <br className='max-lg:hidden'/>lideres titulares no lo han hecho jugando dentro de las reglas del juego
            <br className='max-lg:hidden'/>existentes, sino creando nuevas reglas&quot;
            Antonio Francés (&#10013;) Profesor IESA
          </p>

        </div>
      </div>
      {/*End Quotes*/}

      {/*Vision*/}
      <div className="bg-Light-gray w-full">
        <div className="max-container py-10 px-7 flex flex-col justify-center items-center
            md:py-14 md:px-10
            lg:py-24 lg:px-20"
        >
          <Card
            className='w-[100%] px-5 py-10
                sm:w-[590px] sm:p-10
                md:w-[85%] md:px-10 md:py-8
                lg:w-[950px] lg:px-16 lg:py-16
                xl:w-[1170px]'
          >
            <p className='text-base text-white font-semibold !leading-10 md:heading-3-semi mb-5'>
              En QRL Strategy hemos conformado un Dream Team de expertos, estratégicamente ubicados en las principales
              ciudades de Venezuela, América del Sur, Estados Unidos y España.
            </p>
            <p className='text-base text-white font-semibold !leading-10 md:heading-3-semi'>
              Gracias a esta alianza, podemos ofrecerte un servicio altamente personalizado, respaldado por un equipo
              multidisciplinario que se adapta a tus objetivos y te brinda el valor agregado que necesitas para alcanzar
              el éxito.
            </p>

          </Card>
        </div>
      </div>

      {/*End Vision*/}

      {/* CTA*/}
      <div className="w-full bg-Dark-blue">
        <div className="max-container h-[620px] sm:h-[500px] lg:h-[550px] flex justify-center items-center px-5">
          <Cta
            className='!bg-Other-Very-dark-blue'
            content={{
              title: {text: 'Desafiando el status quo'},
              subtitle: {text: 'Contáctanos y conversemos '}
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



