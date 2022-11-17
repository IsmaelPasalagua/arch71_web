import Navbar from '../components/Navbar';
import BigTitle from '../components/BigTitle';
import LowButton from '../components/LowButton';
import LowCard from '../components/LowCard';

export default function HomePage() {
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <br/>
            <div className='container'>
                <div>
                    <BigTitle
                        title='Pagina principal'
                        subtitle='Bienvenido, para cambiar entre páginas, usa la barra superior'
                    />
                </div>
                <br/>
            </div>
            <br/>
        </div>
    )
}