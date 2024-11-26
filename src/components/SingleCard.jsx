/**
 * @param {{title: {text: string, className: string|undefined}, paragraph: {text: string, className: string|undefined}}} content
 * @param {string|undefined} className
 * @returns {JSX.Element}
 * @constructor
 */
export default function SingleCard({content, className}) {


  return (
    <div className={`px-4 py-5 isolate aspect-video rounded-xl bg-white/30 shadow-lg backdrop-blur-md ring-1 
        ring-black/5 ${className ?? ''}`}>
      <div className='flex flex-col justify-around items-center h-full lg:justify-center lg:items-center'>
        <h1 className={`text-[62px] md:text-[52px] lg:text-[72px] text-center font-bold ${content.title?.className ?? 'text-white'}`}>
          {content.title.text}
        </h1>
        <p className={`text-Very-dark-blue text-base text-center font-semibold ${content.paragraph?.className}`}>
          {content.paragraph.text}
        </p>
      </div>
    </div>
  );
}



