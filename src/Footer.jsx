import './styles_footer.css';

function Footer() {
  return (
    <div id="container-footer">
      <div className="content">
        <h3>...y si lo terminas?</h3>
        <h4>¡Escríbeme y recibirás una sorpresa!</h4>
      <button
  className="CTA"
  onClick={() => window.open('https://www.linkedin.com/in/juliasubiza', '_blank')}
>
  LinkedIn
</button>

        <h5 className="bio-footer">
          👋 Hola, soy Julia Subiza, UX/UI Designer & Front-end Developer (en inglés suena mejor,
          sorry) y puedes encontrarme en:
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Julia-SP">
            {' '}
            Github
          </a>{' '}
          ,
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/juliasubiza"
          >
            {' '}
            LinkedIn{' '}
          </a>
          y{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/julia_subiza">
            Behance
          </a>
          .
        </h5>
      </div>
    </div>
  );
}

export default Footer;
