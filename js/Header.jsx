import React from "react";

export default class Header extends React.Component{
    render(){

        return (
            <div className='container'>
                <div className='header'>
                    <div className='header_icons'>
                        <a href='https://twitter.com/'><i className="fab fa-twitter"></i></a>
                        <a href='https://www.facebook.com/'><i className="fab fa-facebook-f"></i></a>
                        <a href='https://pl.pinterest.com'><i className="fab fa-pinterest"></i></a>
                        <a href='https://www.instagram.com/'><i className="fab fa-instagram"></i></a>
                        <a href='https://www.youtube.com/'><i className="fab fa-youtube"></i></a>
                    </div>
                    <div className='header_search'>
                        <form className='header_form'>
                            <input type="text" placeholder="SEARCH AND HIT ENTER..."></input>
                            <i className="fas fa-search"></i>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}