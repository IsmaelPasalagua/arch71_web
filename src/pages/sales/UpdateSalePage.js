import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class UpdateSalePage extends React.Component {
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

    val2state = async e => {
        e.persist();
        await this.setState({
            ...this.state,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked:e.target.value
        });
        this.valupdater();
    };

    valupdater(){
        this.product_getter();
        this.customer_getter();
        this.total_calculator();
    }

    total_calculator(){
        let subtotal = 0;
        let total = 0;
        let price = 0;
        let quantity = 1;
        if(this.state.product_id){
            price = this.state.price;
            quantity = this.state.quantity;
        }
        if(price > 0 && quantity > 0){
            subtotal = price * quantity;
            total = subtotal;
        }
        this.setState({
            subtotal: subtotal,
            total: total,
            quantity: quantity,
        })
    }

    product_getter(){
        axios.post(
            'http://localhost:8000/api/products/search/',
            {
                name: this.state.product_name,
            }
        )
        .then(
            response => {
                if(response.data.status === 404){
                    this.setState({
                        products: [],
                    })
                }
                else{
                    this.setState({
                        products: response.data.data,
                        product_id: response.data.data[0]._id,
                        product_quantity: response.data.data[0].quantity,
                        price: response.data.data[0].price,
                    })
                }
            }
        )
    }

    customer_getter(){
        axios.post(
            'http://localhost:8000/api/customers/search/',
            {
                username: this.state.customer_name,
            }
        )
        .then(
            response => {
                if(response.data.status === 404){
                    this.setState({
                        customers: [],
                    })
                }
                else{
                    this.setState({
                        customers: response.data.data,
                        customer_id: response.data.data[0]._id,
                    })
                }
            }
        )
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

    itmaker(){
        axios.put(
            'http://localhost:8000/api/sales/' + this.props.location.state._id,
            {
                customer_id: this.state.customer_id,
                product_id: this.state.product_id,
                status: this.state.status,
                date: this.state.date,
                quantity: this.state.quantity,
                subtotal: this.state.subtotal,
                total: this.state.total,
            }
        )
        .then(
            response => {
                console.log(response);
            }
        )
        setTimeout(() => {
            window.location.href = '/sales/index';
        }, 800);
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
                            subtitle='Actualizar una venta existente'
                        />
                    </div>
                    <br/>
                    <div>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Buscar por nombre de usuario</label>
                                <input type='text' className='form-control' name='customer_name' value={this.state.customer_name} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Usuarios disponibles</label>
                                <select className='form-select' name='customer_id' value={this.state.customer_id} onChange={this.val2state}>
                                    {
                                        this.state.customers.map(
                                            customer => (
                                                <option key={customer._id} value={customer._id}>{customer.username}</option>
                                            )
                                        )
                                    }
                                </select>
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Buscar por el nombre del producto</label>
                                <input type='text' className='form-control' name='product_name' value={this.state.product_name} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Productos disponibles</label>
                                <select className='form-select' name='product_id' value={this.state.product_id} onChange={this.val2state}>
                                    {
                                        this.state.products.map(
                                            product => (
                                                <option key={product._id} value={product._id}>{product.name}</option>
                                            )
                                        )
                                    }
                                </select>
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Cantidad</label>
                                <input type='number' min={1} max={this.state.product_quantity} className='form-control' name='quantity' value={this.state.quantity} onChange={this.val2state} />
                                <div className='form-text'>
                                    Disponible: {this.state.product_quantity}
                                </div>
                            </div>
                            
                            <div className='mb-3'>
                                <label className='form-label'>Precio</label>
                                <input disabled type='number' className='form-control' name='price' value={this.state.price} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Subtotal</label>
                                <input disabled type='number' className='form-control' name='subtotal' value={this.state.subtotal} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Total</label>
                                <input disabled type='number' className='form-control' name='total' value={this.state.total} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Estado</label>
                                <input type='text' className='form-control' name='status' value={this.state.status} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Fecha</label>
                                <input type='date' className='form-control' name='date' value={this.state.date} onChange={this.val2state} />
                            </div>
                            
                            <div className='mb-3'>
                                <button onClick={() => this.itmaker()} type="button" className="btn btn-sm btn-primary btn-lg">Actualizar</button>
                            </div>
                        </form>
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

export default UpdateSalePage;