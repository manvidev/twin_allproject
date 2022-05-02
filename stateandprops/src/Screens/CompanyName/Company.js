import React from 'react'
class Company extends React.Component {
    render() {
        return <div className='Company'> <p>{this.props.name}</p>
        </div >;
    }
}

export default Company;

