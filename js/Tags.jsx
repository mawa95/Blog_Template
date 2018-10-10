import React from 'react';

export default class Tags extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='tags'>
                    <h3> Tags: </h3>
                   <div className='tag'>
                       <a href='#'>BEAUTIFUL</a>
                       <a href='#'>BLOG</a>
                       <a href='#'>BOAT</a>
                       <a href='#'>CABIN</a>
                   </div>
                </div>
            </div>
        )
    }
}