import Navegacao from '../../components/Navegacao/Navegacao';
import ApointmentList from '../../components/Appointments/AppointmentList';
import Rodape from '../../components/Rodape/Rodape';

function Appointment() {
    return(
        <div className='mae-appointmente'>
            <Navegacao />
            <ApointmentList />
            <Rodape />
        </div>
    )
}

export default Appointment;