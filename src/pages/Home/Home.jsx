import './Home.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import Welcome from '../../components/Welcome/Welcome';
import TextoHome from '../../components/Textos/TextoHome/TextoHome';
import Rodape from '../../components/Rodape/Rodape';

function Home() {
    return(
        <div className='mae-home'>
            <Navegacao />
            <Welcome />
            <TextoHome />
            <Rodape />
        </div>//mae-home
    )
}
 export default Home;