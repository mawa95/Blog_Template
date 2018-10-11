import React from 'react';


export default class SubscribeForm extends React.Component{
    render(){
        return(
            <div className='container'>
                <form className='subscribe'>
                    <h1 className='subscribe_title'>Subscribe</h1>
                    <input className='subscribe_input email' type='text' placeholder='Emali'></input>
                    <input className='subscribe_input subscribe' type='submit' value='Subscribe'></input>
                </form>
            </div>
        )
    }
}