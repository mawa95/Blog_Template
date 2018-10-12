import React from 'react';


export default class SubscribeForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subscribe: '',
        };
    }
    handleChange  = (e) => {
        this.setState({
            email: e.target.value
        })
    };
    handleClick = (e) => {
        this.setState({
            subscribe: e.target.value
        })
    };
    handleSubmit = (e)=> {
        e.preventDefault();
    };
    render(){
        let text;
        if (this.state.email.indexOf("@") === -1 || this.state.email === '') {
            text = "Wrong email";
        }
        return(
            <div className='container'>
                <form className='subscribe' method="post" onSubmit={this.handleSubmit}>
                    <h1 className='subscribe_title'>Subscribe</h1>
                    <div className="tooltip"><span className="tooltiptext">{ text }</span></div>
                    <input className='subscribe_input email'  onChange={ this.handleChange } type='text' placeholder='Emali'></input>
                    <input className='subscribe_input subscribe' type='submit' value='Subscribe' onClick={this.handleClick}></input>
                </form>
            </div>
        )
    }
}


