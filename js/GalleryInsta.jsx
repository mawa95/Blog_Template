import React from 'react';
export default class GalleryInsta extends React.Component{
    render(){
        return(
            <div className='container'>
                <h1 className='gallery_title'>Instagram Feed</h1>
                <div className='gallery'>

                    <div className='gallery_image'><img src='../images/kaboompics_Camilo%20beach%20(Praia%20do%20Camilo)%20in%20Lagos,%20Algarve,%20Portugal.jpg'></img></div>
                    <div className='gallery_image'><img src='../images/kaboompics_Elegant%20home%20office%20with%20golden%20accessories.%20MacBook,%20iPhone%20X,%20watch.jpg'></img></div>
                    <div className='gallery_image'><img src='../images/kaboompics_Old%20green%20tram,%20Lisbon,%20Portugal.jpg'></img></div>
                    <div className='gallery_image'><img src='../images/kaboompics_Preparing%20a%20yummy%20and%20healthy%20meal.jpg'></img></div>
                    <div className='gallery_image'><img src='../images/kaboompics_A%20woman%20in%20a%20yellow%20sweater%20with%20a%20sweet%20dog%20uses%20a%20laptop.jpg'></img></div>
                    <div className='gallery_image'><img src='../images/kaboompics_Tropical%20palm%20leaves,%20floral%20pattern%20background.jpg'></img></div>

                </div>
            </div>
        )
    }
}