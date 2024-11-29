import Card from "../components/Card.jsx";
export default function TermsConditions() {

  return (
    <section id='terminos-condiciones' className='w-full bg-Dark-blue'>
      <div className="max-container flex justify-center items-center pt-32">
        <Card
          variant='tertiary'
          className='w-[100%] h-auto lg:py-24 lg:px-24
               md:w-[85%]
               lg:w-[900px]
               xl:w-[1000px]'
        >
          <h1 className='heading-1-bold text-Dark-blue mb-5 md:mb-10'>
            Términos y Condiciones de Uso
          </h1>

          <h2 className='heading-2-semi text-Dark-blue mb-5'>
            Introducción
          </h2>

          <p className='text-base font-semibold text-Regular-gray leading-6'>
            Bienvenido a qrlstrategy.com. Al acceder y utilizar nuestro sitio web, aceptas cumplir con los
            términos y condiciones establecidos a continuación. Estos términos constituyen un acuerdo legalmente
            vinculante entre tú y QRL Strategy. Si no estás de acuerdo con estos términos, te
            rogamos que no utilices nuestro sitio web.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Uso del Sitio Web
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            <span className='font-bold'>Propósito: </span> Nuestro sitio web está diseñado para dar a conocer los
            productos y/o servicio de QRL Strategy
            <br/>
            <span className='font-bold'>Restricciones:</span> Al utilizar nuestro sitio web, te comprometes a no
            <ul className='pl-7 list-disc'>
              <li>Violar ninguna ley o regulación aplicable.</li>
              <li>Infringir los derechos de terceros, incluyendo derechos de propiedad intelectual.</li>
              <li>Utilizar el sitio web con fines ilegales o dañinos.</li>
              <li>Interferir con el funcionamiento del sitio web.</li>
            </ul>
            <br/>
            Cualquier contenido que publiques en nuestro sitio web (comentarios, reseñas, etc.) es tu responsabilidad.
            Te comprometes a que dicho contenido sea legal, preciso, no difamatorio y respetuoso.
          </p>


          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Propiedad Intelectual
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            Todos los contenidos de nuestro sitio web, incluyendo texto, imágenes, logotipos y marcas comerciales, son
            propiedad de QRL Strategy o de sus licenciantes y están protegidos por las leyes de
            propiedad intelectual.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Contacto
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            Si tienes alguna pregunta sobre estos Términos y Condiciones de Uso o las prácticas de privacidad de
            qrlstrategy.com,
            por favor, contáctanos a través de hola@qrlstrategy.com.
          </p>
        </Card>
      </div>

      <div className="w-full h-[90px] md:h-[100px] bg-Dark-blue"></div>
    </section>
  );
}



