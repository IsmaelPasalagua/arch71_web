import axios from 'axios';
import React from 'react';

class DeleteProductPage extends React.Component {
    state = {
        status:0
    }

    componentDidMount() {
        axios.delete('http://localhost:8000/api/products/' + this.props.location.state._id)
        .then(
            response => {
                this.setState({
                    status: response.data.status
                });
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    backfun(){
        // wait 1 second
        setTimeout(() => {
            window.location.href = '/products/index';
        }, 800);
    }
    render () {
        return(
            <div>
                {
                    this.backfun()
                }
            </div>
        )
    }
}

export default DeleteProductPage;