import React from 'react';


export default class Categories extends React.Component {
    render(){
        return(
            <div className='container'>
                <div className='categories'>
                    <h3 className='categories_title'>Categories</h3>
                    <div className='categories_links'>
                        <a href='#'>BLOG</a><hr/>
                        <a href='#'>EXPLORING</a><hr/>
                        <a href='#'>PHOTOGRAPHY</a><hr/>
                        <a href='#'>TRAVEL</a>
                    </div>
                </div>
            </div>
        )
    }
}