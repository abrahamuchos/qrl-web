import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import Cta from "../components/Cta.jsx";

import '../styles/CompensationStrategy.css';
import strokeCompensationStrategy from "@animations/compensation-strategy.json";
import stroke from '../assets/img/stroke-10.png';
import stroke2 from '../assets/img/stroke-11.png';
import person from '../assets/img/person-talking.png'
import personBusiness from '../assets/img/business-people.png'

export default function CompensationStrategy() {

  return (
    <section className='w-full'>
      <Hero
        animation={strokeCompensationStrategy}
        title="Anticipa conflictos, construye relaciones sostenibles"
        subTitle="Ayudamos a las organizaciones a crear paquetes de compensación que motivan y retienen talento"
      />

      {/* Compensation Intro (Compensación a la medida / Atraer y retener. Al Mejor Talento)*/}
      <div className="w-full bg-Light-gray">
        <div className="max-container bg-puzzle py-10 px-7 md:py-14 md:px-10 lg:py-24 lg:px-20">
          <div>
            <h2 className='heading-1-bold text-Regular-gray mb-5'>Compensación a la medida.</h2>
            <h2 className='heading-2-bold text-Regular-gray mb-7'>
              <span className="text-Dark-blue">Atrae y retiene</span> el talento que tu empresa necesita
            </h2>
            <p className=' text-base font-semibold text-Regular-gray !leading-10 w-full lg:w-8/12 lg:heading-3-semi'>
              Diseñamos estrategias de compensación personalizadas que van
              <span className="text-Dark-blue"> más allá del salario</span>, para atraer y retener a los
              <span className="text-Dark-blue"> mejores talentos</span>. Al ofrecer opciones
              <span className="text-Dark-blue"> flexibles </span> y beneficios atractivos, aumentamos la
              <span className="text-Dark-blue"> satisfacción de tus empleados</span>, reducimos la rotación y
              potenciamos la productividad de tu equipo.
            </p>
          </div>

          <div className="mt-[55%] sm:mt-[40%] mb-20 flex flex-col justify-start lg:justify-end lg:items-end lg:mt-32">
            <h2 className='heading-1-bold text-Regular-gray mb-7'>Atraer y retener. Al Mejor Talento</h2>
            <p
              className='text-base font-semibold text-Regular-gray !leading-10 w-full mb-5 lg:text-end lg:w-8/12 lg:heading-3-semi'>
              La pérdida de talento altamente cualificado representa un costo significativo para cualquier organización.
              Reemplazar a un empleado experimentado implica invertir tiempo y recursos en la búsqueda, selección y
              capacitación de un nuevo candidato.
            </p>
            <p
              className='text-base font-semibold text-Regular-gray !leading-10 w-full lg:text-end lg:w-8/12 lg:heading-3-semi'>
              Además, la pérdida de conocimiento organizacional puede afectar negativamente los proyectos en curso y la
              productividad del equipo. La experiencia única de este empleado es difícil de reemplazar, lo que puede
              generar retrasos y errores en proyectos clave.
            </p>
          </div>
        </div>
      </div>
      {/* End Compensation Intro (Compensación a la medida / Atraer y retener. Al Mejor Talento)*/}

      {/* Compensation cards (Compensación a la medida.)*/}
      <div className="w-full bg-[#DFE7ED]">
        <div className="max-container py-10 px-7 flex flex-col justify-center items-center
              md:py-14 md:px-10
              lg:py-24 lg:px-20"
        >
          <Card
            className='w-[320px] mb-10
              sm:w-[550px] sm:px-9 sm:py-8
              md:w-[600px] md:px-10 md:py-8
              lg:w-[900px] lg:relative lg:mb-32
              xl:w-[1000px]'
            stroke={stroke}
          >
            <div className="grid lg:grid-cols-[80%_20%] md:gap-4">
              <div className=''>
                <h2 className='heading-1-bold text-white mb-5'>
                  Compensación a la medida.
                  <br/>
                  Aumenta tu productividad
                </h2>
                <h3 className='heading-2-bold text-Other-gray mb-10'>
                  Invierte en tu talento, <span className="text-white">cosecha resultados excepcionales.</span>
                </h3>
              </div>

              <div className="relative max-lg:hidden lg:w-[340px] xl:w-[450px]">
                <img
                  src={person}
                  alt="persona-hablando"
                  className="w-full absolute bottom-0 lg:-left-[25%] lg:-top-[37%] xl:-left-[25%] "
                />
              </div>
            </div>
          </Card>

          {/*Mobile Image*/}
          <div className='w-[320px] my-10 sm:w-[550px] md:w-[600px] lg:hidden'>
            <img
              src={person}
              alt="persona-hablando"
              className="w-full"
            />
          </div>
          {/*End Mobile Image*/}

          <Card
            className='w-[320px]
              sm:w-[550px] sm:px-9 sm:py-8
              md:w-[600px] md:px-10 md:py-8
              lg:w-[900px] lg:relative lg:py-10
              xl:w-[1000px]'
            stroke={stroke2}
          >
            <div>
              <div className="grid lg:grid-rows-2 xl:grid-rows-1 xl:grid-cols-[40%_60%] md:gap-4">

                <div className="relative max-lg:hidden lg:w-[350px] xl:w-[450px]">
                  <img
                    src={personBusiness}
                    alt="persona-negocios"
                    className="w-full absolute bottom-0
                      lg:left-0 lg:right-0 lg:-top-[40%] lg:translate-y-0 lg:translate-x-[66%]
                      xl:-top-[30%] xl:-left-[25%] xl:translate-y-0 xl:translate-x-0"
                  />
                </div>

                <div className='text-base text-Other-gray font-semibold md:heading-3-semi !leading-10'>
                  <p>
                    Invertir en estrategias de compensación no implica necesariamente un aumento significativo en los
                    costos laborales. Al implementar
                    <span className="text-white"> planes de compensación flexibles y personalizados</span>,
                    las empresas pueden <span className="text-white"> optimizar sus recursos</span> y maximizar el
                    retorno de la inversión en talento.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <p className='text-base text-Other-gray font-semibold md:heading-3-semi !leading-10'>
                Optar por <span className="text-white">beneficios no monetarios</span>, como programas de desarrollo
                profesional, horarios flexibles o reconocimiento público, puede incrementar la satisfacción de los empleados
                <span className="text-white"> sin generar un impacto sustancial en el presupuesto.</span>
              </p>
              <p className='text-base text-Other-gray font-semibold md:heading-3-semi !leading-10'>
                Además, al <span className="text-white"> alinear las compensaciones con los objetivos estratégicos </span>
                de la organización, se garantiza que cada inversión en talento contribuya al
                <span className="text-white"> logro de los resultados deseados</span>
              </p>
            </div>
          </Card>

          {/*Mobile Image*/}
          <div className='w-[320px] my-10 sm:w-[550px] md:w-[600px] lg:hidden'>
            <img
              src={personBusiness}
              alt="persona-hablando"
              className="w-full"
            />
          </div>
          {/*End Mobile Image*/}
        </div>
      </div>
      {/* End Compensation cards (Compensación a la medida.)*/}

      {/* CTA*/}
      <div className="w-full bg-Dark-blue">
        <div className="max-container h-[620px] sm:h-[500px] lg:h-[550px] flex justify-center items-center px-5">
          <Cta
            className='!bg-Other-Very-dark-blue'
            content={{
              title: {text: 'Conozca como nuestras estrategias de compensación pueden transformar tu empresa'},
              subtitle: {text: 'Contáctanos y conversemos'}
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



