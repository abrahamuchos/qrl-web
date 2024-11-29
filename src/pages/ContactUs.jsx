import { useRef, useState } from "react";
import Card from "../components/Card.jsx";
import emailjs from '@emailjs/browser';

import stroke from "../assets/img/stroke-16.png";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Data>> ', form.current);

    setIsSuccess(true);
    // emailjs
    //   .sendForm('service_gond44h', 'template_rp3qb6p', form.current, {
    //     publicKey: 'gsGa-pR4f4i271Eom',
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //       setIsSuccess(true);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );

  }


  return (
    <section className='w-full bg-Dark-blue'>
      <div className="max-container flex justify-center items-center pt-32">
        <Card
          variant='secondary'
          stroke={stroke}
          className='w-[100%] h-auto lg:py-24 lg:px-24
               md:w-[85%]
               lg:w-[900px]
               xl:w-[1000px]'
        >
          {isSuccess
              ? <div>
                <h2 className="heading-1-bold text-Dark-blue mb-5 md:mb-10">
                  Gracias por ponerte en contacto.
                </h2>
                <p className='text-base font-semibold text-Regular-gray !leading-10 md:heading-3-semi mb-10'>
                  {
                    (form.current?.name.value ? `Hola ${form.current.name.value},` : 'Hola,') + ' hemos recibido tu mensaje. Apreciamos tu interés en QRL Strategy. Uno de nuestros representantes se comunicará contigo en breve para atender tu consulta.'
                  }
                </p>

                <div className='mt-10 flex flex-col gap-5'>
                  <h3 className='heading-1-bold text-Dark-blue'>
                    ¿ Ya conoces todos nuestro servicios ?
                  </h3>
                  <div className="grid grid-cols-2 gap-5">
                    <div className='flex flex-col gap-3'>
                      <Link to='/roadmap' className='heading-3-semi text-Very-dark-blue'>
                        Roadmap
                      </Link>
                      <Link to='/estrategia-sindical' className='heading-3-semi text-Very-dark-blue'>
                        Estrategia Sindical
                      </Link>
                    </div>
                    <div className='flex flex-col gap-3 items-end'>
                      <Link to='/manejo-crisis' className='heading-3-semi text-Very-dark-blue'>
                        Manejo de Crisis
                      </Link>
                      <Link to='/estrategia-compensacion' className='heading-3-semi text-Very-dark-blue'>
                        Estrategia de Compensación
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              : <div>
                <h2 className="heading-1-bold text-Dark-blue mb-5 md:mb-10">
                  Te queremos conocer.
                </h2>
                <p className='text-base font-semibold text-Regular-gray !leading-10 md:heading-3-semi mb-5'>
                  Tenemos las puertas abiertas para escucharte. ¿Tienes una idea, un problema o una pregunta? Déjanos
                  tus
                  datos y te daremos una respuesta rápida y personalizada
                </p>

                <div className='xl:px-32'>
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-600 mb-1"
                      >
                        Nombre y apellido
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        // value={formData.name}
                        // onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={100}
                        title='Ingresa tu nombre y apellido'
                      />
                      <small className='block text-end text-xs text-Regular-gray'>Requerido</small>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-600 mb-1"
                      >
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={100}
                        title='Ingresa tu correo electrónico, es para ponernos en contacto'
                      />
                      <small className='block text-end text-xs text-Regular-gray'>Requerido</small>
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm text-gray-600 mb-1"
                      >
                        País
                      </label>
                      <select
                        id="country"
                        name="country"
                        // value={formData.country}
                        // onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      >
                        <option value="Venezuela">Venezuela</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="reason"
                        className="block text-sm text-gray-600 mb-1"
                      >
                        Motivo
                      </label>
                      <input
                        type="text"
                        id="reason"
                        name="reason"
                        // value={formData.reason}
                        // onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={100}
                        title='Indica la razón o motivo de tu mensaje'
                      />
                      <small className='block text-end text-xs text-Regular-gray'>Requerido</small>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-gray-600 mb-1"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        // value={formData.message}
                        // onChange={handleChange}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                        minLength={5}
                        maxLength={500}
                        title='Cuentanos, como te podemos ayudar'
                      />
                      <small className='block text-end text-xs text-Regular-gray'>500 caracteres máx.</small>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition-colors duration-200"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
          }

        </Card>
      </div>

      <div className="w-full h-[90px] md:h-[100px] bg-Dark-blue"></div>

    </section>
  );
}



