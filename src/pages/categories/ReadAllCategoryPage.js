import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';

class ReadAllCategoryPage extends React.Component {
    state = {
        categories:[]
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/categories')
        .then(
            response => {
                this.setState({
                    categories: response.data.data
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
                            title='Categorias'
                            subtitle='Todas las categorias en un solo lugar'
                        />
                    </div>
                    <br/>
                    <Link to={'/categories/store/'} className='btn btn-sm btn-success m-1'>Crear</Link>
                    <br/>
                    <div>
                        <table className='table table-borderless'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.categories.map(
                                        category => (
                                            <tr>
                                                <td>{category._id}</td>
                                                <td>{category.name}</td>
                                                <td>
                                                    <Link to={{pathname:'/categories/update/', state:{_id: category._id}}} className='btn btn-sm btn-warning m-1'>Editar</Link>
                                                    <Link to={{pathname:'/categories/destroy/', state:{_id: category._id}}} className='btn btn-sm btn-danger m-1'>Eliminar</Link>
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

export default ReadAllCategoryPage;