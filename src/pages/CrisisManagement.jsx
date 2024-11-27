import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";

import '../styles/CrisisManagement.css';
import strokeCrisisManagement from "@animations/crisis-management.json";
import handBlock from '../assets/img/view-block-hand.png';
import stroke from "../assets/img/stroke-12.png";
import dardos from "../assets/img/dardos.png";
import chess from "../assets/img/chess.png";
import Cta from "../components/Cta.jsx";

export default function CrisisManagement() {

  return (
    <section className='w-full'>
      <Hero
        animation={strokeCrisisManagement}
        title="¿La tormenta perfecta?"
        subTitle="Anticipa, prepara y responde a cualquier crisis. Tu negocio en manos expertas"
      />

      {/*Resilience (Resiliente)*/}
      <div className="bg-white w-full">
        <div className="max-container py-10 px-7 flex flex-col justify-center items-center
            md:py-14 md:px-10
            lg:flex-row lg:py-24 lg:px-20"
        >

          <div className="basis-1 mb-10 md:basis-3/5 lg:basis-2/3 lg:pr-10 xl:pr-32">
            <h2 className="heading-1-bold text-Dark-blue mb-5 lg:mb-10">Sé proactivo, sé resiliente</h2>
            <p className='text-base text-Regular-gray font-semibold md:heading-3-semi !leading-10'>
              La anticipación en el manejo de crisis es un elemento clave para la sostenibilidad de cualquier
              organización. Nosotros ofrecemos una metodología probada para ayudarte a predecir, prevenir, mitigar y
              recuperarse de situaciones críticas.
            </p>
          </div>

          <div className="basis-1 md:basis-2/5 lg:basis-1/3">
            <img src={handBlock} alt="mano" className="w-full xl:w-max-[429px]"/>
          </div>
        </div>
      </div>
      {/*End Resilience (Resiliente)*/}

      {/* What would you do (Que harías si)*/}
      <div className="bg-Light-gray w-full">
        <div className="max-container py-10 px-7 flex flex-col justify-center items-center
            md:py-14 md:px-10
            lg:py-24 lg:px-20"
        >
          <Card
            stroke={stroke}
            className='w-[100%] px-5 py-10
                sm:w-[550px] sm:p-10
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-16 lg:py-16
                xl:w-[1000px]'
          >
            <h2 className='heading-1-bold text-white mb-5 lg:mb-10'>¿Qué harías si...?</h2>
            <h2 className='heading-2-bold text-white mb-5 lg:mb-10'>
              Convierte los desafíos en oportunidades de crecimiento
            </h2>
            <p className='text-base text-Other-gray font-semibold !leading-10 md:heading-3-semi md:pr-20 xl:pr-40'>
              El manejo de crisis es uno de los procesos estratégicos más importante para cualquier
              <span className="text-white"> organización </span> que desee operar de manera
              <span className="text-white">eficiente y sostenible en el tiempo.</span>
            </p>

          </Card>
        </div>
      </div>
      {/*End What would you do (Que harías si)*/}

      {/*Downsizing Info*/}
      <div className="w-full bg-stroke">
        {/*Adaptarse y prosperar*/}
        <div className="max-container py-10 px-7 flex flex-col justify-center items-center
            md:py-14 md:px-10
            lg:flex-row lg:py-24 lg:px-20"
        >
          <div className="order-2 basis-1 lg:order-1 md:basis-2/5 lg:basis-1/3">
            <img src={dardos} alt="dardos" className="w-[300px] xl:w-[529px]"/>
          </div>

          <div className="order-1 basis-1 lg:order-2 mb-10 md:basis-3/5 lg:basis-2/3 lg:pl-10 xl:pl-20">
            <h2 className="heading-1-bold text-white mb-5 lg:mb-10">
              Downsizing. Adaptarse y Prosperar.
            </h2>
            <h3 className="heading-1-bold text-white mb-5">
              El Éxito en Tiempos de <br className='max-sm:hidden'/>Cambio
            </h3>

            <p className='text-base text-Other-gray font-semibold md:heading-3-semi !leading-10'>
              Nuestro servicio de downsizing le ayudará a <span className="text-white">optimizar sus operaciones</span>,
              reduciendo costos y mejorando la <span className="text-white"> eficiencia</span>. Implementamos las
              <span className="text-white"> mejores prácticas</span> para garantizar una transición suave y exitosa,
              adaptando su organización a las demandas cambiantes del mercado.
            </p>
          </div>


        </div>
        {/*End Adaptarse y prosperar*/}

        {/* Headband (Cintillo)*/}
        <div className="w-full bg-headband">
          <div className="max-container px-7 py-12 xl:px-20 xl:py-16">
            <h2 className='text-[42px] font-bold text-[#9AAAC6] lg:text-[52px]'>
              Reduzca su estructura, optimice <br className='max-xl:hidden'/>
              sus recursos y <span className="text-white"> alcance nuevos <br className='max-xl:hidden'/>
              niveles de eficiencia</span>
            </h2>
          </div>
        </div>
        {/*End Headband (Cintillo)*/}

        {/*Size (Reduzca su tamaño)*/}

        <div className="max-container py-10 px-7 flex flex-col justify-center items-center
            md:py-14 md:px-10
            lg:flex-row lg:py-24 lg:px-20"
        >

          <div className="basis-1 mb-10 md:basis-3/5 lg:basis-2/3 lg:pr-10 xl:pr-32">
            <h2 className="heading-1-bold text-white mb-5 lg:mb-10">
              Reduzca su tamaño, no su impacto.
            </h2>
            <p className='text-base text-Other-gray font-semibold md:heading-3-semi !leading-10'>
              El downsizing, cuando se ejecuta de manera estratégica, puede ser una oportunidad para optimizar
              operaciones y reducir costos, sin comprometer el bienestar de los empleados. Al implementar prácticas
              justas y transparentes, podemos
              <span className="text-white"> transformar un proceso desafiante en una nueva etapa de crecimiento </span>
              y eficiencia para la organización
            </p>
          </div>

          <div className="basis-1 md:basis-2/5 lg:basis-1/3">
            <img src={chess} alt="ajedrez" className="w-full xl:w-max-[429px]"/>
          </div>
        </div>
        {/*End Size (Reduzca su tamaño)*/}
      </div>
      {/*End Downsizing Info*/}


      {/* CTA*/}
      <div className="w-full bg-Dark-blue">
        <div className="max-container h-[620px] sm:h-[500px] lg:h-[550px] flex justify-center items-center px-5">
          <Cta
            className='!bg-Other-Very-dark-blue'
            content={{
              title: {text: 'Navegue los cambios del mercado con confianza. '},
              subtitle: {text: 'Nuestro manejo de crisis lo ayudará a adaptarse y crecer.'}
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



