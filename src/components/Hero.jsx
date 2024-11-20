import Lottie from "lottie-react";

// import trazo1 from "@animations/trazo1.json";
import trazoHome from "@animations/trazos-home-2.json";
import vectorHeroWhite from "../assets/img/vector-hero-large-white.svg";
import '../styles/hero.css';


export default function Hero({animation, loop, title, subTitle}) {


  return (

    //Version 2
    <div className="h-[100vh] relative lg:h-[75vh] 3xl:h-[60vh]">
      <div className="w-full h-[100%] relative bg-Dark-blue text-white overflow-hidden"
      >
        <Lottie animationData={trazoHome} loop={false} width={'100%'} style={{zIndex: '50'}}/>

        <div className="absolute top-[33%] left-[10%] w-full lg:w-[85%]">
          <div className="2xl:max-container">
            <h1 className='text-white font-Inter font-bold text-[52px] mb-2'>
              Transformamos tu negocio, juntos.
            </h1>
            <h2 className='text-white font-Inter font-bold text-[30px]'>
              Incubadora de ideas para transcender contigo
            </h2>
          </div>
        </div>

      </div>

      <div className="w-full h-auto absolute left-0 right-0 top-[69%]
        lg:top-[61%]
        xl:top-[59%]"
      >
        <img src={vectorHeroWhite} alt="vector" className='w-full absolute'/>
      </div>
    </div>

  );
}



