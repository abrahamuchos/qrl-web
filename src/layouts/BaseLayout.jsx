import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";


export default function BaseLayout() {

  return (
    <div className='w-full relative'>
      <Navigation/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}



