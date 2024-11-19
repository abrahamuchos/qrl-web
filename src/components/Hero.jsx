import Lottie from "lottie-react";

// import trazo1 from "@animations/trazo1.json";
import trazoHome from "@animations/trazos-home-2.json";
import '../styles/hero.css';


export default function Hero() {


  return (
    // <div className='h-[90vh] bg-Dark-blue hero relative text-white'>
    //   <Lottie animationData={trazoHome} loop={false} width={'100%'}/>
    // </div>



    <div className="w-full h-[90vh] relative bg-Dark-blue text-white overflow-hidden rounded-br-[70px]">
      <Lottie animationData={trazoHome} loop={true} width={'100%'}/>
      <div className="absolute bg-white w-[50%] h-[90px] bottom-0 rounded-tr-[70px]"></div>
    </div>
  );
}



