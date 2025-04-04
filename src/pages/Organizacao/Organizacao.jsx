import './Organizacao.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import OrganizacaoSelect from '../../components/OrganizacaoSelect/OrganizacaoSelect';
import Rodape from '../../components/Rodape/Rodape';

function Organizacao() {
    return(
        <div className='mae-organizacao'>
            <Navegacao />
            <OrganizacaoSelect />
            <Rodape />
        </div>
    )
}

export default Organizacao;