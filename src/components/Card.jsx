export default function Card({stroke, className, children, variant = 'primary'}) {
  let style;

  if(variant === 'secondary'){
    style = {
      backgroundImage: `url(${stroke}), linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
  }else if(variant === 'tertiary'){
    style = {
      backgroundColor: 'white'
    }

  }else{
    style = {
      backgroundImage: `url(${stroke}), linear-gradient(97.375deg, #092F51 24%, #4990B8 97%)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
  }

  return (
    <div className={`p-6 lg:p-11 rounded-2xl ${className}`} style={style}>
      {children}
    </div>
  );
}



