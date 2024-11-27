import Card from "./Card.jsx";

/**
 * @param {string|undefined} className
 * @param {{title: {text: string, className: string|undefined}, subtitle: {text: string, className: string|undefined}}} content
 * @param {{text: string , className: string|undefined, href: string}} button
 * @returns {JSX.Element}
 * @constructor
 */
export default function Cta({className,content, button}) {

  return (
    <Card
      variant='fourth'
      className={`w-[100%]
        sm:w-[550px] sm:px-9 sm:py-8
        md:w-[85%] md:px-10 md:py-8
        lg:w-[900px] lg:px-10 lg:pb-10 lg:pt-16
        xl:w-[1200px] ${className}`}
    >
      <div className="flex flex-col justify-center items-center">
          <h2 className={`heading-1-bold text-white text-center mb-10 ${content.title?.className}`}>
          {content.title.text}
        </h2>

        <p className={`heading-2-bold text-white text-center mb-14 ${content.subtitle?.className}`}>
          {content.subtitle.text}
        </p>

        <a href="" className='btn-tertiary'>{button.text}</a>
      </div>
    </Card>
  );
}



