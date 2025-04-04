import './Cliente.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import ClientList from '../../components/Clientes/ClientList';
import Rodape from '../../components/Rodape/Rodape';


function Cliente() {
    return(
        <div className='mae-clientes'>
            <Navegacao />
            <ClientList />
            <Rodape />
        </div>
    )
}

export default Cliente;