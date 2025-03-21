import Navegacao from '../../components/Navegacao/Navegacao';
import FundoMaria from '../../components/FundoMaria/FundoMaria';
import Rodape from '../../components/Rodape/Rodape';
import TextoPsico from '../../components/Textos/TextoPsico/TextoPsico';

import './Psicopedagogia.css';

function Psicopedagogia() {
    return(
        <div className='mae-psicopedagogia'>
            <Navegacao />
            <div className='container-psicopedagogia'>
                <FundoMaria />
                <TextoPsico />
                <Rodape />
            </div>
        </div>
    )
}

export default Psicopedagogia;