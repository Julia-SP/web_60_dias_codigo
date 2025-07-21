import './styles_footer.css'

function Footer() {
  return (
    <div className='container'>
    <img  className='logo-footer'src="./public/LOGO_60_blanco.svg" alt="logo" ></img>
    <div className="content">
   <h3>...y si lo terminas?</h3>
   <h4>¡Escríbeme y recibirás una sorpresa!</h4>
   <button>LinkedIn</button>

    <h5 className='bio-footer'>
      Hola, soy Julia Subiza, UX/UI Designer & Front-end Developer (en inglés suena mejor, sorry) y este es mi 
      <a href="https://github.com/Julia-SP">Github </a>, 
      <a href="https://www.linkedin.com/in/juliasubiza">LinkedIn </a> 
      y <a href="https://www.behance.net/julia_subiza">Behance</a>.
    </h5>

   </div>
    </div>
  );
}

export default Footer;