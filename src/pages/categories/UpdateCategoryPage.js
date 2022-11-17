import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class UpdateCategoryPage extends React.Component {
    state = {
        name:'',
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/categories/' + this.props.location.state._id)
        .then(
            response => {
                this.setState({
                    name: response.data.data.name
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
            'http://localhost:8000/api/categories/' + this.props.location.state._id,
            {
                name: this.state.name,
            }
        )
        .then(
            response => {
                console.log(response);
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
        setTimeout(() => {     
            window.location.href = '/categories/index';
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
                            title='Categorias'
                            subtitle='Actualizar una categoria existente'
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
                                <button onClick={() => this.itmaker()} type="button" className="btn btn-sm btn-primary btn-lg">Actualizar</button>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <div>
                        <LowButton
                            title='Volver a las categorias'
                            link='/categories/index'
                            bootstrap_aspect='light'
                        />
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default UpdateCategoryPage;