import Lottie from "lottie-react";

// import vectorHeroWhite from "../assets/img/svg/vector-short-white.svg";
// import vectorHeroLightBlue from "../assets/img/svg/vector-short-light-blue.svg";


/**
 *
 * @param {JSON} animation - JSON animation (not dotLottie)
 * @param {boolean} [loop=false]
 * @param {string} title
 * @param {string} subTitle
 * @param {string} [vector='white'] - {'white' | 'light-blue'}
 * @returns {JSX.Element}
 * @constructor
 */
export default function Hero({animation, loop = false, title, subTitle, vector = 'white'}) {
  // const heroVector =  vector === 'light-blue' ? vectorHeroLightBlue : vectorHeroWhite;

  return (
    <div className="h-[90vh] relative lg:h-[100vh]">
      <div className="w-full h-[100%] relative bg-Dark-blue text-white overflow-hidden
        max-xl:rounded-br-[70px]"
      >
        <Lottie
          animationData={animation}
          loop={loop}
          style={{width: '100%', height: '100%'}}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice"
          }}
        />

        {/*Content*/}
        <div className="absolute top-[33%] left-[10%] w-full
          md:w-[85%] md:left-[7%]
          lg:left-[10%] lg:top-[43%]
          xl:left-[12%]"
        >
          <div className="2xl:max-container">
            <h1 className='text-white font-Inter font-bold text-[36px] mb-12
              md:text-[42px]
              lg:text-[52px] lg:mb-2'
            >
              {title}
            </h1>
            <h2 className='text-white font-Inter font-bold text-[25px]
              md:text-[27px]
              lg:text-[30px]'
            >
              {subTitle}
            </h2>
          </div>
        </div>
        {/* End Content*/}

      </div>

      {/*<img src={heroVector} alt="vector" className='w-full absolute bottom-[-5px] max-md:hidden'/>*/}

    </div>


  );
}



