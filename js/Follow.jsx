import React from "react";
import IkonSocial from './IkonSocial.jsx'
export default class Follow extends React.Component{
     render(){
         return (
             <div className='container'>
               <div className='follow'>
                   <h3 className='follow_title'>Follow Me</h3>
                   <div className='icons'>
                       <a href='https://twitter.com/'><i className="fab fa-twitter"></i></a>
                       <a href='https://www.facebook.com/'><i className="fab fa-facebook-f"></i></a>
                       <a href='https://pl.pinterest.com'><i className="fab fa-pinterest"></i></a>
                       <a href='https://www.instagram.com/'><i className="fab fa-instagram"></i></a>
                       <a href='https://www.youtube.com/'><i className="fab fa-youtube"></i></a>
                   </div>
               </div>
             </div>
         )

    }
}