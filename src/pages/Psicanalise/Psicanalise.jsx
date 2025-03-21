import Navegacao from '../../components/Navegacao/Navegacao';
import FundoMateus from '../../components/FundoMateus/FundoMateus';
import Rodape from '../../components/Rodape/Rodape';
import './Psicanalise.css';

function Psicanalise() {
    return(
        <div className='mae-psicanalise'>
            <Navegacao />
            <FundoMateus />
            <Rodape />
        </div>
    )
}
export default Psicanalise;