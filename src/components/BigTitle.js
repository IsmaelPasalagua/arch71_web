import react from 'react';

class BigTitle extends react.Component{
    render(){
        const {title, subtitle} = this.props;
        return(
            <div>
                <h1 className='h1 fw-normal'>{title}</h1>
                <h3 className='h3 fw-lighter'>{subtitle}</h3>
            </div>
        )
    }
}

export default BigTitle;