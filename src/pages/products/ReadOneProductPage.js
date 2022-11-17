import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BigTitle from '../../components/BigTitle';
import LowButton from '../../components/LowButton';
import LowTitle from '../../components/LowTittle';

class ReadOneProductPage extends React.Component {
    state = {
        _id: '',
        name:'',
        price:'',
        category_id:'',
        quantity:'',
        category_name:'',
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/products/' + this.props.location.state._id)
        .then(
            response => {
                this.setState({
                    _id: response.data.data._id,
                    name: response.data.data.name,
                    price: response.data.data.price,
                    quantity: response.data.data.quantity,
                    category_id: response.data.data.category_id,
                    category_name: response.data.data.category_name,
                })
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
                            subtitle='Ver un producto en especifico'
                        />
                    </div>
                    <br/>
                    <div>
                        <LowTitle
                            title='ID'
                            subtitle={this.state._id}
                        />
                        <LowTitle
                            title='Nombre'
                            subtitle={this.state.name}
                        />
                        <LowTitle
                            title='Precio'
                            subtitle={this.state.price + '$'}
                        />
                        <LowTitle
                            title='Cantidad'
                            subtitle={this.state.quantity}
                        />
                        <LowTitle
                            title='Categoría'
                            subtitle={this.state.category_name}
                        />                        
                        <Link to={{pathname:'/sales/store/', state:{product_id: this.state._id}}} className='btn btn-sm btn-primary m-1'>Comprar</Link>
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

export default ReadOneProductPage;