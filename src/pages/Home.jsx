import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import SingleCard from "../components/SingleCard.jsx";
import Testimony from "../components/Testimony.jsx";

import trazoHome from "@animations/trazos-home-2.json";
import puzzleSingleDarkBlue from "../assets/img/puzzle-single-dark-blue.png"
import puzzleSingleLightBlue from "../assets/img/puzzle-single-light-blue.png"
import puzzle from "../assets/img/puzzle-desktop.png"
import stroke from "../assets/img/stroke-1.png"
import stroke2 from "../assets/img/stroke-2.png"
import stroke3 from "../assets/img/stroke-3.png"
import stroke4 from "../assets/img/stroke-4.png"
import sindicalImg from "../assets/img/sindical-work.png";
import person1Img from '../assets/img/duliana.png';
import person2Img from '../assets/img/gustavo.png';
import ContainerStroke from "../components/ContainerStroke.jsx";


export default function Home() {

  return (
    <section className='w-full'>
      <Hero
        animation={trazoHome}
        title="Transformamos tu negocio, juntos."
        subTitle="Incubadora de ideas para transcender contigo"
      />
      {/*About Us*/}
      <div className="max-container h-[500px] relative lg:h-[650px]">
        <img
          src={puzzleSingleDarkBlue}
          alt="puzzle-dark"
          className="absolute right-3/4 max-w-[250px] z-0  sm:max-w-[220px] sm:right-[70%] md:hidden"
        />
        <img
          src={puzzleSingleLightBlue}
          alt="puzzle-light"
          className="absolute -bottom-[12%] left-1/2 max-w-[320px] z-0 md:hidden"
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
          <div className="flex justify-center sm:justify-end">
            <a href="/sobre-nosotros" className='btn-primary'>Descubre más</a>
          </div>
        </div>
      </div>
      {/* End About Us*/}

      {/* Trade Union Strategy (Estrategia Sindical)*/}
      <div className='w-full h-[1100px] bg-Light-gray flex flex-col justify-center items-center
        md:h-[810px] md:pt-24
        lg:flex-row lg:h-[700px] lg:pt-0
        2xl:max-contaier'
      >
        <Card
          className='w-[320px]
          sm:w-[550px] sm:px-9 sm:py-8
          md:w-[600px] md:px-10 md:py-8
          lg:w-[900px] lg:relative lg:pb-32
          xl:w-[1000px]'
          stroke={stroke}
        >
          <div className="grid lg:grid-cols-2 md:gap-4">
            <div className='max-lg:order-2'>
              <h2 className='heading-1-bold text-white mb-5'>
                Un nuevo enfoque en la relación sindicato y empresa
              </h2>
              <div className="flex items-stretch justify-center">
                <a href="/" className="btn-secondary block">Descubre más</a>
              </div>
            </div>

            <div className="relative max-lg:order-1 h-[90px]">
              <img
                src={sindicalImg}
                alt="sindical-work"
                className="w-full absolute bottom-0 sm:w-[350px]
                sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-0
                md:w-[380px]
                lg:w-[450px] lg:-bottom-[100%]"
              />
            </div>
          </div>

          {/* Percentages Desktop */}
          <div className="max-lg:hidden absolute flex justify-between w-[90%] top-[78%]">
            <SingleCard
              className='w-[190px] h-[160px] md:w-[220px]'
              content={{
                title: {text: '8,5%'},
                paragraph: {text: 'de trabajadores ha sufrido violencia durante su labor'}
              }}
            />
            <SingleCard
              className='w-[190px] h-[160px] md:w-[220px]'
              content={{
                title: {text: '17,9%'},
                paragraph: {text: 'de trabajadores ha sufrido violencia psicologica durante su labor'}
              }}
            />
            <SingleCard
              className='w-[190px] h-[160px] md:w-[220px]'
              content={{
                title: {text: '14%'},
                paragraph: {text: 'de caída en la productividad por violencia en el trabajo'}
              }}
            />
          </div>
          {/* End Percentages Desktop */}
        </Card>

        {/* Percentages Mobile */}
        <div className='flex flex-col md:flex-row gap-10 mt-5 lg:hidden'>
          <SingleCard
            className='w-[235px] h-[160px] flex flex-col justify-around bg-Light-gray backdrop-blur-sm opacity-80
              md:w-[220px]'
            content={{
              title: {text: '8,5%', className: 'text-Very-dark-blue'},
              paragraph: {text: 'de trabajadores ha sufrido violencia durante su labor'}
            }}
          />
          <SingleCard
            className='w-[235px] h-[160px] flex flex-col justify-around bg-Light-gray backdrop-blur-sm opacity-80
              md:w-[220px]'
            content={{
              title: {text: '17,9%', className: 'text-Very-dark-blue'},
              paragraph: {text: 'ha sufrido violencia psicologica en su vida laboral'}
            }}
          />
          <SingleCard
            className='w-[235px] h-[160px] flex flex-col justify-around bg-Light-gray backdrop-blur-sm opacity-80
              md:w-[220px]'
            content={{
              title: {text: '14%', className: 'text-Very-dark-blue'},
              paragraph: {text: 'de caída en la productividad por violencia en el trabajo'}
            }}
          />
        </div>
        {/* End Percentages Mobile */}

      </div>
      {/* End Trade Union Strategy (Estrategia Sindical)*/}

      {/*Testimonies*/}
      <div className="bg-white w-full">
        <Testimony
          className={'py-16 px-10'}
          image={person1Img}
          content="“Estamos convencidos que el compromiso no es una mera intención o deseo, sino un acto concreto que implica responsabilidad y lealtad hacia nuestros clientes y colaboradores. Es una manera de afirmar nuestra existencia y de darle un sentido a nuestra vida”."
        />
      </div>
      {/*End  Testimonios*/}

      {/*Roadmap*/}
      <div className="w-full bg-Light-gray">
        <div className="max-container py-16 px-10">
          <h2 className="heading-1-bold text-Very-dark-blue mb-10">
            Tenemos mas para tí y para empresas
          </h2>

          {/*Roadmap cards*/}
          <div className="flex flex-col justify-center items-center">
            <Card
              stroke={stroke2}
              className='w-[100%] mb-8
                sm:w-[550px] sm:px-9 sm:py-8
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1000px]'
            >

              <h2 className='heading-1-bold text-white mb-10 lg:mb-20'>
                Tu plan de carrera, personalizado
                <br/>
                Trascender contigo
              </h2>

              <h3 className='heading-2-bold text-white mb-10'>
                Descubre tu potencial y alcanza tus metas profesionales
              </h3>

              <div className="flex justify-center sm:justify-end">
                <a href="/sobre-nosotros" className='btn-secondary'>Descubre más</a>
              </div>
            </Card>

            <Card
              stroke={stroke3}
              variant='secondary'
              className='w-[100%]
                sm:w-[550px] sm:px-9 sm:py-8
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1000px]'
            >

              <h2 className='heading-1-bold text-Regular-gray mb-10 lg:mb-20'>
                Desarrolla tu Talento, <br className='md:hidden'/> Impulsa tu Negocio
                <br/>
                Corporate Roadmap
              </h2>

              <h3 className='heading-2-bold text-Regular-gray mb-10'>
                Diseñamos planes de carrera personalizados para atraer,
                retener y motivar a los mejores talentos.
              </h3>

              <div className="flex justify-center sm:justify-end">
                <a href="/sobre-nosotros" className='btn-primary'>Descubre más</a>
              </div>
            </Card>

          </div>
          {/*End Roadmap cards*/}

        </div>
      </div>
      {/* End Roadmap*/}

      {/*Testimonies*/}
      <div className="bg-white w-full">
        <Testimony
          className={'py-16 px-10'}
          image={person2Img}
          content={"“Los principios y valores tienen que dejar de ser únicamente un fondo de pantalla en la computadora para convertirse en parte integrante de nuestro comportamiento ético diario”."}
        />
      </div>
      {/*End  Testimonios*/}

    {/* Other services (Manejo de crisis y estrategias de compensación)*/}
      <ContainerStroke className="w-full" stroke={stroke4}>
        <div className="max-container flex flex-col justify-center items-center gap-5 py-16 px-5
          md:flex-row md:px-10 md:items-stretch"
        >

          <Card variant='tertiary' className='w-full md:w-1/2  lg:w-[500px] flex flex-col justify-between'>
            <h2 className='heading-1-bold text-Regular-gray mb-11'>
              Manejo de Crisis
            </h2>
            <p className='heading-2-bold text-Regular-gray'>
              Planifica para el éxito, incluso en tiempos difíciles
            </p>
            <div className="flex justify-center sm:justify-end mt-5">
              <a href="/sobre-nosotros" className='btn-primary'>Descubre más</a>
            </div>
          </Card>

          <Card variant='tertiary' className='w-full md:w-1/2 lg:w-[500px] '>
            <h2 className='heading-1-bold text-Regular-gray mb-5'>
              Estrategias de compensación
            </h2>
            <p className='heading-2-bold text-Regular-gray'>
              Invierte en tu talento, cosecha resultados excepcionales
            </p>
            <div className="flex justify-center sm:justify-end mt-5">
              <a href="/sobre-nosotros" className='btn-primary'>Descubre más</a>
            </div>
          </Card>


        </div>
      </ContainerStroke>


      {/* End Other services (Manejo de crisis y estrategias de compensación)*/}

      <div className="w-full bg-Light-gray">
        <div className="max-container flex justify-center items-center p-10">
          <Card
            variant='fourth'
            className='w-[100%]
                sm:w-[550px] sm:px-9 sm:py-8
                md:w-[85%] md:px-10 md:py-8
                lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
                xl:w-[1200px]'
          >
            <div className="flex flex-col justify-center items-center">
              <h2 className="heading-1-bold text-white mb-10">
                CTS: Tu aliado legal laboral en la nube
              </h2>

              <p className="heading-3-bold text-white mb-10">
                Centraliza, automatiza y colabora en un solo lugar
              </p>

              <a href="" className='btn-tertiary'>Próximamente</a>
            </div>
          </Card>

        </div>
      </div>



    </section>
  );
}



