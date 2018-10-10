import React from 'react';
export default class RecentPosts extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='recentPosts'>
                    <h1>Recent Posts</h1>
                    <div className='recentPost'>
                        <div className='img'><img src='../images/kaboompics_Plants%20of%20Portugal.jpg'></img></div>
                        <h3>Exploring My <br/>Surroundings</h3>
                        <div className='post_description'>MARCH 27, 2018</div>
                    </div>
                    <div className='recentPost'>
                        <div className='img'> <img src='../images/kaboompics_Group%20of%20people%20examining%20a%20map.jpg'></img></div>
                        <h3>Travel on a low <br/>budget</h3>
                        <div className='post_description'>NOV 27, 2017</div>
                    </div>
                    <div className='recentPost'>
                        <div className='img'><img src='../images/kaboompics_Palm%20trees%20in%20Spain.jpg'></img></div>
                        <h3>Hiking in<br/> the woods</h3>
                        <div className='post_description'>JULY 15, 2018</div>
                    </div>

                </div>
            </div>
        )
    }
}