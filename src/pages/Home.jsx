import Hero from "../components/Hero.jsx";


import trazoHome from "@animations/trazos-home-2.json";

export default function Home() {

  return (
    <section className='w-full'>
      <Hero
        animation={trazoHome}
        title="Transformamos tu negocio, juntos."
        subTitle="Incubadora de ideas para transcender contigo"
      />


      <div className="w-full h-[500px] bg-white">


      </div>
    </section>
  );
}



