import React from 'react';


export default class Categories extends React.Component {
    render(){
        return(
            <div className='container'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <div className='categories_links'>
                        <a href='#'>BLOG</a>
                        <a href='#'>EXPLORING</a>
                        <a href='#'>PHOTOGRAPHY</a>
                        <a href='#'>TRAVEL</a>
                    </div>
                </div>
            </div>
        )
    }
}