import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class CreateProductPage extends React.Component {
    state = {
        name:'',
        price:'',
        category_id:'',
        quantity:'',
        categories:[],
    }

    val2state = async e => {
        e.persist();
        await this.setState({
            ...this.state,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked:e.target.value
        });
        this.valupdater();
    };

    componentDidMount(){
        axios.get('http://localhost:8000/api/categories/')
        .then(
            response => {
                this.setState({
                    categories: response.data.data,
                    category_id: response.data.data[0]._id,
                })
            }
        )
        axios.get('http://localhost:8000/api/products/' + this.props.location.state._id)
        .then(
            response => {
                this.setState({
                    name: response.data.data.name,
                    price: response.data.data.price,
                    quantity: response.data.data.quantity,
                    category_id: response.data.data.category_id,
                })
            }
        )
    }

    itmaker(){
        axios.put(
            'http://localhost:8000/api/products/' + this.props.location.state._id,
            {
                name: this.state.name,
                category_id: this.state.category_id,
                price: this.state.price,
                quantity: this.state.quantity,
            }
        )
        .then(
            response => {
                console.log(response);
            }
        )
        setTimeout(() => {
            window.location.href = '/products/index';
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
                            title='Productos'
                            subtitle='Actualizar un producto existente'
                        />
                    </div>
                    <br/>
                    <div>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Nombre</label>
                                <input type='text' className='form-control' name='name' value={this.state.name} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Precio</label>
                                <input type='number' className='form-control' name='price' value={this.state.price} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Cantidad</label>
                                <input type='number' className='form-control' name='quantity' value={this.state.quantity} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Categoria</label>
                                <select className='form-select' name='category_id' value={this.state.category_id} onChange={this.val2state}>
                                    {
                                        this.state.categories.map(
                                            category => (
                                                <option key={category._id} value={category._id}>{category.name}</option>
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => this.itmaker()} type="button" className="btn btn-sm btn-primary btn-lg">Actualizar</button>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <div>
                        <LowButton
                            title='Volver a los productos'
                            link='/products/index'
                            bootstrap_aspect='light'
                        />
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default CreateProductPage;