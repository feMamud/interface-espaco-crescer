import Navegacao from '../../components/Navegacao/Navegacao';
import FundoMateus from '../../components/FundoMateus/FundoMateus';
import TextoPsica from '../../components/Textos/TextoPsica/TextoPsica';
import Rodape from '../../components/Rodape/Rodape';
import './Psicanalise.css';

function Psicanalise() {
    return(
        <div className='mae-psicanalise'>
            <Navegacao />
            <FundoMateus />
            <TextoPsica />
            <Rodape />
        </div>
    )
}
export default Psicanalise;