import React from 'react';


export default class SubscribeForm extends React.Component{
    render(){
        return(
            <div className='container'>
                <form>
                    <input type='text' placeholder='Emali'></input>
                    <input type='submit' value='Subscribe'></input>
                </form>
            </div>
        )
    }
}