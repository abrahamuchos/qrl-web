import Lottie from "lottie-react";

// import trazo1 from "@animations/trazo1.json";
import trazoHome from "@animations/trazo-home.json";
import '../styles/hero.css';


export default function Hero() {


  return (
    <div className='hero'>
      <Lottie animationData={trazoHome} loop={true}/>
    </div>
  );
}



