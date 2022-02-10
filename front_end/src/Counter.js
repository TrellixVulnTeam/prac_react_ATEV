import React from 'react';


class Counter extends React.Component{
    state = {
        value: 0,
    }
    onClick = () => {
        this.setState(prevState => ({
            value : prevState.value + 1
        }))
    }

    render() {
        const { value } = this.state;
        return (
            <div onClick={this.onClick}>
                {value}
            </div>
        )
    }
}



export default Counter;