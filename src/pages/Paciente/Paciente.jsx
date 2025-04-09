import './Paciente.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import PatientList from '../../components/Pacientes/PatientList';
import Rodape from '../../components/Rodape/Rodape';


function Cliente() {
    return(
        <div className='mae-pacientes'>
            <Navegacao />
            <PatientList />
            <Rodape />
        </div>
    )
}

export default Cliente;