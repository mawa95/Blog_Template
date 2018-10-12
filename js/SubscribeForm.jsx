import React from 'react';

export default class SubscribeForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subscribe: 'Subscribe',
            error: '',
            show: false,
        };
    }
    handleChange  = (e) => {
        this.setState({
            email: e.target.value
        })
    };
    // handleClick = (e) => {
    //     console.log('kliknieto subscribe');
    //     this.setState({
    //         subscribe: e.target.value
    //     })
    //};
    handleSubmit = (e)=> {
        console.log('klik');
        e.preventDefault();
        if (this.state.email.indexOf("@") === -1 || this.state.email === '') {
            this.setState({
                error: 'wrong email',
                show: true
            })
         } else {
            this.setState({
                //error: 'thanks!',
                show: false
            })
        }

    };
    render(){
        const style = {
            display: this.state.show ? 'block' : 'none'
        };

    return(
            <div className='container'>
                <form className='subscribe' method="post" onSubmit={this.handleSubmit}>
                    <h1 className='subscribe_title'>Subscribe</h1>
                    <div className="tooltip"><span style={ style } className="tooltiptext">{ this.state.error }</span></div>
                    <input className='subscribe_input email' type='text' onChange={ this.handleChange } value={this.state.email}  placeholder='Email'></input>
                    <input className='subscribe_input subscribe' type='submit' value={this.state.subscribe}   ></input>
                </form>
            </div>
        )
    }
}


