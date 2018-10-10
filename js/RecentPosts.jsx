import React from 'react';
export default class RecentPosts extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='recentPosts'>
                    <h1>Recent Posts</h1>
                    <div className='recentPost'>
                        <img src='../images/kaboompics_Plants%20of%20Portugal.jpg'></img><hr/>
                        <h3>Exploring My Surroundings</h3>
                        <div className='post_description'>MARCH 27, 2017</div>
                    </div>
                    <div className='recentPost'>
                        <img src='../images/kaboompics_Group%20of%20people%20examining%20a%20map.jpg'></img><hr/>
                        <h3>Exploring My Surroundings</h3>
                        <div className='post_description'>MARCH 27, 2017</div>
                    </div>
                    <div className='recentPost'>
                        <img src='../images/kaboompics_Palm%20trees%20in%20Spain.jpg'></img>
                        <h3>Exploring My Surroundings</h3>
                        <div className='post_description'>MARCH 27, 2017</div>
                    </div>

                </div>
            </div>
        )
    }
}