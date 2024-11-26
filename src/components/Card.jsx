/**
 *
 * @param {string|undefined} stroke
 * @param {string|undefined} className
 * @param {JSX.Element|undefined} children
 * @param {('primary'|'secondary'|'tertiary'|'fourth'| 'sixth')} [variant='primary']
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({stroke, className, children, variant = 'primary'}) {
  let style;

  if (variant === 'secondary') {
    //White with strokes
    style = {
      backgroundImage: `url(${stroke}), linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
  } else if (variant === 'tertiary') {
    style = {
      backgroundColor: 'white'
    }

  } else if (variant === 'fourth') {
    style = {
      backgroundColor: '#092F51' // Very Dark Blue
    }

  } else if (variant === 'sixth') {
    style = {
      backgroundColor: '#F0F4F7' // Light Dark Blue
    }

  } else {
    //Blue with stroke
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



