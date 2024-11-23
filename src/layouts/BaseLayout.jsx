import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";


export default function BaseLayout({children}) {

  return (
    <div className='w-full relative'>
      <Navigation/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
}



