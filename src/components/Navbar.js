import react from 'react';
import { Link } from 'react-router-dom';

class Navbar extends react.Component{
    render(){
        return(
            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                    <div className='container-fluid'>
                        <Link to='/' className='navbar-brand'>
                            <img src='/images/quetzal.png' alt='logo' className='logo' width='35' />
                        </Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to='/products/index' className='nav-link'>Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/categories/index' className='nav-link'>Categorias</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/customers/index' className='nav-link'>Clientes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/sales/index' className='nav-link'>Ventas</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;