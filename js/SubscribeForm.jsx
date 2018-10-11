import React from 'react';


export default class SubscribeForm extends React.Component{
    render(){
        return(
            <div className='container'>
                <form className='container subscribe'>
                    <h1 className='subscribe_title'>Subscribe</h1>
                    <input className='subscribe_input' type='text' placeholder='Emali'></input>
                    <input className='subscribe_input' type='submit' value='Subscribe'></input>
                </form>
            </div>
        )
    }
}