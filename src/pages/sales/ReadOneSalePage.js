import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';
import LowTitle from '../../components/LowTittle';

class ReadOneSalePage extends React.Component {
    state = {
        customers: [],
        products: [],
        customer_id: '',
        product_id: '',
        product_quantity: 0,
        customer_name: '',
        product_name: '',
        status: '',
        date: '',
        subtotal: 0,
        total: 0,
        quantity: 1,
        price: 0,
    }
    
    componentDidMount(){
        try {
            if(this.props.location.state._id){
                axios.get('http://localhost:8000/api/sales/' + this.props.location.state._id)
                .then(
                    response => {
                        this.setState({
                            customer_id: response.data.data.customer_id,
                            customer_name: response.data.data.customer_name,
                            product_name: response.data.data.product_name,
                            product_id: response.data.data.order_details[0].product_id,
                            total: response.data.data.sales[0].total,
                            subtotal: response.data.data.sales[0].subtotal,
                            date: response.data.data.sales[0].date,
                            quantity: response.data.data.order_details[0].quantity,
                            status: response.data.data.status,
                        })
                        this.valupdater();
                        this.setState({
                            customer_id: response.data.data.customer_id,
                            customer_name: response.data.data.customer_name,
                            product_name: response.data.data.product_name,
                            product_id: response.data.data.order_details[0].product_id,
                            total: response.data.data.sales[0].total,
                            subtotal: response.data.data.sales[0].subtotal,
                            date: response.data.data.sales[0].date,
                            quantity: response.data.data.order_details[0].quantity,
                            status: response.data.data.status,
                        })
                    }
                )
            }
        }
        catch(e){
            // console.log(e);
        }
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
                            subtitle='Ver los detalles de una venta específica'
                        />
                    </div>
                    <br/>
                    <div>
                        <LowTitle
                            title='Cliente'
                            subtitle={this.state.customer_name}
                        />
                        <LowTitle
                            title='ID del cliente'
                            subtitle={this.state.customer_id}
                        />
                        <LowTitle
                            title='Producto'
                            subtitle={this.state.product_name}
                        />
                        <LowTitle
                            title='ID del producto'
                            subtitle={this.state.product_id}
                        />
                        <LowTitle
                            title='Cantidad'
                            subtitle={this.state.quantity}
                        />
                        <LowTitle
                            title='Subtotal'
                            subtitle={this.state.subtotal + '$'}
                        />
                        <LowTitle
                            title='Total'
                            subtitle={this.state.total + '$'}
                        />
                        <LowTitle
                            title='Fecha'
                            subtitle={this.state.date}
                        />
                        <LowTitle
                            title='Estado'
                            subtitle={this.state.status}
                        />
                    </div>
                    <br/>
                    <div>
                        <LowButton
                            title='Volver a las ventas'
                            link='/sales/index'
                            bootstrap_aspect='light'
                        />
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default ReadOneSalePage;