import react from 'react';

class LowCard extends react.Component{
    render(){
        const {bigTitle, lowTitle, beforeAt, afterAt} = this.props;
        return(
            <div>
                <div className='card w-25'>
                    <div className='card-body'>
                        <h5 className='card-title'>{bigTitle}</h5>
                        <h6 className='card-subtitle mb-2'>{lowTitle}</h6>
                        <p className='card-text'>{beforeAt}@{afterAt}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LowCard;