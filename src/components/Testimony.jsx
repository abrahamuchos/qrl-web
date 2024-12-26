/**
 *
 * @param {string|undefined} className
 * @param {object|string} image
 * @param {string} content
 * @returns {JSX.Element}
 * @constructor
 */
export default function Testimony({className, image, content}) {

  return (
    <div className={`base flex flex-col justify-center items-center md:flex-row md:gap-10 max-container ${className}`}>
        <div className='w-[290px]'>
            <img src={image} alt="person-testimony" className="w-full" />
        </div>
      <div className='mt-6 md:w-1/2'>
        <p className='text-base text-Dark-blue'>
          {content}
        </p>
      </div>
    </div>
  );
}



