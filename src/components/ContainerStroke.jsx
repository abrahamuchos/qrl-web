export default function ContainerStroke({children, stroke, className}) {

  const style = {
    backgroundImage: `url(${stroke}), linear-gradient(100.589deg, #092F51 40%, #4990B8 97%)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }


  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  );
}



