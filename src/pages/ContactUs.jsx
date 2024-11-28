import Card from "../components/Card.jsx";
import { useState } from "react";

import stroke from "../assets/img/stroke-16.png";

export default function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'Venezuela',
    mobile: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className='w-full bg-Dark-blue h-[2000px]'>
      <div className="max-container flex justify-center items-center pt-32">
        <Card
          variant='secondary'
          stroke={stroke}
          className='w-[100%] h-auto lg:py-24 lg:px-24
               md:w-[85%]
               lg:w-[900px]
               xl:w-[1000px]'
        >
          <h2 className="heading-1-bold text-Dark-blue mb-5 md:mb-10">
            Te queremos conocer.
          </h2>
          <p className='text-base font-semibold text-Regular-gray !leading-10 md:heading-3-semi mb-5'>
            Tenemos las puertas abiertas para escucharte. ¿Tienes una idea, un problema o una pregunta? Déjanos tus
            datos y te daremos una respuesta rápida y personalizada
          </p>

          <div className='xl:px-32'>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
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
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="Venezuela">Venezuela</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Motivo
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
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
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition-colors duration-200"
              >
                Enviar
              </button>
            </form>


          </div>


        </Card>
      </div>

    </section>
  );
}



