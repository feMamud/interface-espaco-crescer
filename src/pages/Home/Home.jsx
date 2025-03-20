import './Home.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import Welcome from '../../components/Welcome/Welcome';
import TextoHome from '../../components/Textos/TextoHome/TextoHome';
import Rodape from '../../components/Rodape/Rodape';

function Home() {
    return(
        <div className='mae-home'>
            <Navegacao />
            <div className='home-container'>
            <Welcome />
            <TextoHome />
            <Rodape />
            </div>{/**home-container */}
        </div>//mae-home
    )
}
 export default Home;