import Navegacao from '../../components/Navegacao/Navegacao';
import TextoContato from '../../components/Textos/TextoContato/TextoContato';
import Rodape from '../../components/Rodape/Rodape';
import './Contato.css';

function Contato() {
    return(
        <div className='mae-contato'>
            <Navegacao />
            <TextoContato />
            <Rodape />
        </div>
    )
}

export default Contato;