import React from "react";
import IkonSocial from './IkonSocial.jsx'
export default class Header extends React.Component{
    render(){

        return (
            <div className='container'>
                <div className='header'>
                    <IkonSocial/>
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