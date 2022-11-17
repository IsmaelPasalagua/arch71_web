import Navbar from '../components/Navbar';
import BigTitle from '../components/BigTitle';
import LowButton from '../components/LowButton';

export default function NoPage() {
    return(
        <div>
            <br/>
            <div className='container text-center'>
                <div>
                    <BigTitle
                        title='Pagina no encontrada'
                        subtitle='Verifica el link e intenta de nuevo'
                    />
                </div>
                <br/>
                <div>
                    <LowButton
                        title='Ir a la página principal'
                        link='/'
                        bootstrap_aspect='danger'
                    />
                </div>
            </div>
            <br/>
        </div>
    )
}