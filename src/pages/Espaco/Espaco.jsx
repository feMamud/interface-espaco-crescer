import './Espaco.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import TextoEspaco from '../../components/Textos/TextoEspaco/TextoEspaco';
import Rodape from '../../components/Rodape/Rodape';
import Carrossel from '../../components/Carrossel/CarrosselPrincipal/Carrossel';

function Espaco() {
    return(
        <div className='mae-espaco'>
            <Navegacao />
            <Carrossel />
            <TextoEspaco />
            <Rodape />
        </div>
    )
}

export default Espaco;