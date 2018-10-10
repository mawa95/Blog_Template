import React from "react";

export default class Header extends React.Component{
    render(){

        return (
            <div className='container'>
                <div className='header'>
                    <div className='header_icons'>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                    <div className='header_search'>
                        <form>
                            <input type="text" placeholder="Search for..."></input>
                            <i className="fas fa-search"></i>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}