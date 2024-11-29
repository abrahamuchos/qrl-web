import stroke from "../assets/img/stroke-16.png";
import Card from "../components/Card.jsx";

export default function PrivacyPolicy() {

  return (
    <section id='politica-privacidad' className='w-full bg-Dark-blue'>
      <div className="max-container flex justify-center items-center pt-32">
        <Card
          variant='tertiary'
          className='w-[100%] h-auto lg:py-24 lg:px-24
               md:w-[85%]
               lg:w-[900px]
               xl:w-[1000px]'
        >
          <h1 className='heading-1-bold text-Dark-blue mb-5 md:mb-10'>
            Política de Privacidad
          </h1>

          <h2 className='heading-2-semi text-Dark-blue mb-5'>
            Introducción
          </h2>

          <p className='text-base font-semibold text-Regular-gray leading-6'>
            En qrlstrategy.com, respetamos tu privacidad y estamos comprometidos a proteger tus datos personales.
            Esta Política de Privacidad detalla cómo recopilamos, utilizamos y protegemos la información que nos
            proporcionas
            al visitar nuestro sitio web.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Información que Recopilamos
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            <span className='font-bold'>Formulario de Contacto:</span> Cuando te pones en contacto con nosotros a través
            del formulario, recopilamos tu
            nombre y
            dirección de correo electrónico. Esta información se utiliza únicamente para responder a tu consulta y no se
            almacena de forma permanente a menos que sea necesario para futuras comunicaciones relacionadas con tu
            solicitud.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Cómo Utilizamos Tu Información
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            <span className='font-bold'>Responder a tus Consultas:</span> La información que nos proporcionas se utiliza
            exclusivamente para responder a
            tus preguntas, comentarios o solicitudes.
            <br/>
            <span className='font-bold'>Comunicación:</span> Ocasionalmente, podemos utilizar tu dirección de correo
            electrónico para enviarte
            actualizaciones
            importantes sobre nuestro sitio web o servicios, pero siempre te ofreceremos la opción de darte de baja de
            estas
            comunicaciones.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            No Compartimos Tu Información
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            qrlstrategy.com no vende, alquila ni comparte tu información personal con terceros, excepto cuando
            sea
            requerido por ley o para proteger nuestros derechos legales.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Seguridad de Tus Datos
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            Implementamos medidas de seguridad adecuadas para proteger tu información personal de acceso no autorizado,
            divulgación, alteración o destrucción. Sin embargo, ten en cuenta que ningún método de transmisión de datos
            por Internet o almacenamiento electrónico es completamente seguro.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Cookies
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            qrlstrategy.com no utiliza cookies para rastrear tu actividad en línea.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Tus Derechos
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            <span className='font-bold'>Acceso:</span> Tienes derecho a solicitar una copia de la información que
            tenemos sobre ti.
            <br/>
            <span className='font-bold'>Corrección: </span> Si la información que tenemos sobre ti es incorrecta, puedes
            solicitar que la corrijamos.
            <br/>
            <span className='font-bold'>Eliminación:</span> Puedes solicitar que eliminemos tu información personal de
            nuestra base de datos.
          </p>

          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Cambios a Esta Política
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Te notificaremos
            sobre
            cualquier cambio significativo en nuestra Política de Privacidad publicando la nueva política en esta
            página.
          </p>


          <h2 className='heading-2-semi text-Dark-blue mt-8 mb-5'>
            Contacto
          </h2>
          <p className='text-base font-semibold text-Regular-gray leading-6'>
            Si tienes alguna pregunta sobre esta Política de Privacidad o las prácticas de privacidad de
            qrlstrategy.com,
            por favor, contáctanos a través de hola@qrlstrategy.com.
          </p>
        </Card>
      </div>

      <div className="w-full h-[90px] md:h-[100px] bg-Dark-blue"></div>
    </section>
  );
}



