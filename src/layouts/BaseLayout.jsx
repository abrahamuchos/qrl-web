import Navigation from "../components/Navigation.jsx";


export default function BaseLayout({children}) {

  return (
    <div className='w-full relative'>
      <Navigation/>
      <main>
        {children}
      </main>
    </div>
  );
}



