import '../styles/cards.css';

export default function Card({stroke, className, children}) {

  const style = {
    backgroundImage: `url(${stroke}), linear-gradient(97.375deg, #092F51 24%, #4990B8 97%)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }


  return (
    <div className={`p-6 lg:p-11 rounded-2xl ${className}`} style={style}>

      {children}

    </div>
  );
}



