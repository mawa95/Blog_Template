import React from 'react';

import RecentPosts from './RecentPosts.jsx'
export default class PopularPosts extends React.Component{
    render(){
        return(
            <div className='container'>
                <RecentPosts/>
            </div>
        )
    }
}