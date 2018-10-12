import React from 'react';

export default class IkonSocial extends React.Component{
    render(){
        return(
            <div className='header_icons'>
                <a href='https://twitter.com/'><i className="fab fa-twitter"></i></a>
                <a href='https://www.facebook.com/'><i className="fab fa-facebook-f"></i></a>
                <a href='https://pl.pinterest.com'><i className="fab fa-pinterest"></i></a>
                <a href='https://www.instagram.com/'><i className="fab fa-instagram"></i></a>
                <a href='https://www.youtube.com/'><i className="fab fa-youtube"></i></a>
            </div>
        )
    }

}