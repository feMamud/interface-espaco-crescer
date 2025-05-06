import Navegacao from '../../components/Navegacao/Navegacao';
import CalendarioConsultas from '../../components/CalendarioConsultas/CalendarioConsultas';
import Rodape from '../../components/Rodape/Rodape';

function Calendario() {
    return(
        <div className='mae-CalendarioConsultas'>
            <Navegacao />
            <CalendarioConsultas />
            <Rodape />
        </div>
    )
}

export default Calendario;