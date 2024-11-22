import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";

import trazoHome from "@animations/trazos-home-2.json";
import puzzleSingleDarkBlue from "../assets/img/puzzle-single-dark-blue.png"
import puzzleSingleLightBlue from "../assets/img/puzzle-single-light-blue.png"
import puzzle from "../assets/img/puzzle-desktop.png"
import stroke from "../assets/img/stroke-1.png"
import sindicalImg from "../assets/img/sindical-work.png";
import SingleCard from "../components/SingleCard.jsx";


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
          <div className="flex justify-center md:justify-end">
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

      <div className="bg-red-600 w-full h-[300px]"></div>

    </section>
  );
}



