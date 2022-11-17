import react from 'react';

class LowTitle extends react.Component{
    render(){
        const {title, subtitle} = this.props;
        return(
            <div>
                <h1 className='h4 fw-normal'>{title}</h1>
                <h3 className='h6 fw-lighter'>{subtitle}</h3>
            </div>
        )
    }
}

export default LowTitle;