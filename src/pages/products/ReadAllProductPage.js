import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class ReadAllProductPage extends React.Component {
    state = {
        products:[]
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/products')
        .then(
            response => {
                this.setState({
                    products: response.data.data
                });
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }
    render () {
        return(
            <div>
                <div>
                    <Navbar/>
                </div>
                <br/>
                <div className='container'>
                    <div>
                        <BigTitle
                            title='Productos'
                            subtitle='Todos los productos en un solo lugar'
                        />
                    </div>
                    <br/>
                    <Link to={'/products/store/'} className='btn btn-sm btn-success m-1'>Crear</Link>
                    <br/>
                    <div>
                        <table className='table table-borderless'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Categoria</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => (
                                            <tr>
                                                <td>{product._id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.category_name}</td>
                                                <td>{product.price}$</td>
                                                <td>{product.quantity}</td>
                                                <td>
                                                    <Link to={{pathname:'/products/show/', state:{_id: product._id}}} className='btn btn-sm btn-primary m-1'>Ver</Link>
                                                    <Link to={{pathname:'/products/update/', state:{_id: product._id}}} className='btn btn-sm btn-warning m-1'>Editar</Link>
                                                    <Link to={{pathname:'/products/destroy/', state:{_id: product._id}}} className='btn btn-sm btn-danger m-1'>Eliminar</Link>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <div>
                        <LowButton
                            title='Ir a la página principal'
                            link='/'
                            bootstrap_aspect='light'
                        />
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default ReadAllProductPage;