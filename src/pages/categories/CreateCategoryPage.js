import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class CreateCategoryPage extends React.Component {
    state = {
        name:'',
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
        axios.post(
            'http://localhost:8000/api/categories/',
            {
                name: this.state.name,
            }
        )
        .then(
            response => {
                console.log(response);
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
                            subtitle='Crear una nueva categoria'
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
                                <button onClick={() => this.itmaker()} type="button" className="btn btn-sm btn-primary btn-lg">Crear</button>
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

export default CreateCategoryPage;