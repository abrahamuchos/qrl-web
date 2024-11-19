import Lottie from "lottie-react";

// import trazo1 from "@animations/trazo1.json";
import trazoHome from "@animations/trazos-home-2.json";
import '../styles/hero.css';


export default function Hero() {


  return (
    <div className='hero'>
      <Lottie animationData={trazoHome} loop={false} width={'100%'}/>
    </div>
  );
}



