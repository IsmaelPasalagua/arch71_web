import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class ReadAllSalePage extends React.Component {
    state = {
        sales:[]
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/sales')
        .then(
            response => {
                this.setState({
                    sales: response.data.data
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
                            title='Ventas'
                            subtitle='Todas las ventas en un solo lugar'
                        />
                    </div>
                    <br/>
                    <Link to={'/sales/store/'} className='btn btn-sm btn-success m-1'>Crear</Link>
                    <br/>
                    <div>
                        <table className='table table-borderless'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Cliente</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th>Total</th>
                                    <th>Estado</th>
                                    <th>Fecha</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.sales.map(
                                        sale => (
                                            <tr>
                                                <td>{sale._id}</td>
                                                <td>{sale.customer_name}</td>
                                                <td>{sale.product_name}</td>
                                                <td>{sale.order_details[0].quantity}</td>
                                                <td>{sale.sales[0].subtotal}</td>
                                                <td>{sale.sales[0].total}</td>
                                                <td>{sale.status}</td>
                                                <td>{sale.sales[0].date}</td>
                                                <td>
                                                    <Link to={{pathname:'/sales/show/', state:{_id: sale._id}}} className='btn btn-sm btn-primary m-1'>Ver</Link>
                                                    <Link to={{pathname:'/sales/update/', state:{_id: sale._id}}} className='btn btn-sm btn-warning m-1'>Editar</Link>
                                                    <Link to={{pathname:'/sales/destroy/', state:{_id: sale._id}}} className='btn btn-sm btn-danger m-1'>Eliminar</Link>
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

export default ReadAllSalePage;