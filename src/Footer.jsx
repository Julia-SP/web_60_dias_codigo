import './styles_footer.css'

function Footer() {
  return (
    <div className='container'>
    <img  className='logo-footer'src="./public/LOGO_60_blanco.svg" alt="logo" ></img>
    <div className="content">
   <h3>...y si lo terminas?</h3>
   <h4>¡Escríbeme y recibirás una sorpresa!</h4>
   <button>LinkedIn</button>
   </div>
    </div>
  );
}

export default Footer;