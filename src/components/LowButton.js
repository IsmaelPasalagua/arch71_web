import react from 'react';
import { Link } from 'react-router-dom';

class LowButton extends react.Component{
    render(){
        const {title, link, bootstrap_aspect} = this.props;
        return(
            <div>
                <Link to={link}>
                        <button className={'btn m-1 btn-sm btn-' + bootstrap_aspect}>
                            {title}
                        </button>
                </Link>
            </div>
        )
    }
}

export default LowButton;