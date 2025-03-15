import './Home.css';
import NavBar from '../../components/NavBar/Navegacao';
import Welcome from '../../components/Welcome/Welcome';
import TextoHome from '../../components/Textos/TextoHome/TextoHome';

function Home() {
    return(
        <div className='mae-home'>
            <NavBar />
            <div className='home-container'>
            <Welcome />
            </div>{/**home-container */}
            <TextoHome />
        </div>//mae-home
    )
}
 export default Home;