import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class UpdateCustomerPage extends React.Component {
    state = {
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        phone:'',
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/customers/' + this.props.location.state._id)
        .then(
            response => {
                this.setState({
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                    username: response.data.data.username,
                    email: response.data.data.email,
                    phone: response.data.data.phone,
                });
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    val2state = async e => {
        e.persist();
        await this.setState({
            ...this.state,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked:e.target.value
        });
        this.valupdater();
    };

    itmaker(){
        axios.put(
            'http://localhost:8000/api/customers/' + this.props.location.state._id,
            {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                phone: this.state.phone,
            }
        )
        .then(
            response => {
                console.log(response);
            }
        )
        setTimeout(() => {
            window.location.href = '/customers/index';
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
                            title='Clientes'
                            subtitle='Actualizar una cuenta para un cliente ya existente'
                        />
                    </div>
                    <br/>
                    <div>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Nombre</label>
                                <input type='text' className='form-control' name='first_name' value={this.state.first_name} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Apellido</label>
                                <input type='text' className='form-control' name='last_name' value={this.state.last_name} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Usuario</label>
                                <input type='text' className='form-control' name='username' value={this.state.username} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Correo</label>
                                <input type='email' className='form-control' name='email' value={this.state.email} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Telefono</label>
                                <input type='number' className='form-control' name='phone' value={this.state.phone} onChange={this.val2state} />
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => this.itmaker()} type="button" className="btn btn-sm btn-primary btn-lg">Actualizar</button>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <div>
                        <LowButton
                            title='Volver a los clientes'
                            link='/customers/index'
                            bootstrap_aspect='light'
                        />
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default UpdateCustomerPage;