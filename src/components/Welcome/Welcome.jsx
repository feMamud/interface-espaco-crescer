import './Welcome.css';
import fundo from '../../assets/fundo-welcome.jpg';
import logosozinha from '../../assets/logosozinha.png';
import r from '../../assets/r.png';
import e from '../../assets/e.png';
import s from '../../assets/s.png';
import c from '../../assets/c.png';

function Welcome() {

  return (
    <div className='mae-welcome'>
      <div className='container-welcome'>
        <div className='boas-vindas'>
          <img
            src={fundo} // Substitua pelo caminho da sua imagem
            alt='Descrição da imagem'
            className='img-fundo-welcome'
          />

          <div className='letras-logo-welcome'>
            <img
              src={logosozinha} // Substitua pelo caminho da sua imagem
              alt='Descrição da imagem'
              className='img-logosozinha-welcome'
            />

            <img
              src={r} // Substitua pelo caminho da sua imagem
              alt='Descrição da imagem'
              className='img-r-welcome'
            />

            <img
              src={e} // Substitua pelo caminho da sua imagem
              alt='Descrição da imagem'
              className='img-e-welcome'
            />

            <img
              src={s} // Substitua pelo caminho da sua imagem
              alt='Descrição da imagem'
              className='img-s-welcome'
            />

            <img
              src={c} // Substitua pelo caminho da sua imagem
              alt='Descrição da imagem'
              className='img-c-welcome'
            />

            <img
              src={e} // Substitua pelo caminho da sua imagem
              alt='Descrição da imagem'
              className='img-e-2-welcome'
            />

            <img
              src={r} // Substitua pelo caminho da sua imagem
              alt='Descrição da imagem'
              className='img-r-2-welcome'
            />

            <h1 className='h1-1-letras-welcome'>
              Espaço 
            </h1>
            <h1 className='h1-2-letras-welcome'>
              Terapêutico 
            </h1>
            <h1 className='h1-3-letras-welcome'>
              e 
            </h1>
            <h1 className='h1-4-letras-welcome'>
              Psicopedagógico 
            </h1>
          </div>{/* letras-logo-welcome */}

        </div>{/* boas-vindas */}
      </div>{/* container-welcome */}
    </div>//mae-welcome 
  );
}

export default Welcome;