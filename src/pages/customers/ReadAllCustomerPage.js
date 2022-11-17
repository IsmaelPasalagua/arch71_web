import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class ReadAllCustomerPage extends React.Component {
    state = {
        customers:[]
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/customers')
        .then(
            response => {
                this.setState({
                    customers: response.data.data
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
                            title='Clientes'
                            subtitle='Todos los clientes en un solo lugar'
                        />
                    </div>
                    <br/>
                    <Link to={'/customers/store/'} className='btn btn-sm btn-success m-1'>Crear</Link>
                    <br/>
                    <div>
                        <table className='table table-borderless'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Usuario</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => (
                                            <tr>
                                                <td>{customer._id}</td>
                                                <td>{customer.first_name} {customer.last_name}</td>
                                                <td>{customer.username}</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.phone}</td>
                                                <td>
                                                    <Link to={{pathname:'/customers/update/', state:{_id: customer._id}}} className='btn btn-sm btn-warning m-1'>Editar</Link>
                                                    <Link to={{pathname:'/customers/destroy/', state:{_id: customer._id}}} className='btn btn-sm btn-danger m-1'>Eliminar</Link>
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

export default ReadAllCustomerPage;