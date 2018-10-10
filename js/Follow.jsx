import React from "react";
export default class Follow extends React.Component{
     render(){
         return (
             <div className='container'>
               <div className='follow'>
                   <h3 className='follow_title'>Follow Me</h3>
                   <div className='icons'>
                       <i className="fab fa-twitter"></i>
                       <i className="fab fa-facebook-f"></i>
                       <i className="fab fa-pinterest"></i>
                       <i className="fab fa-instagram"></i>
                       <i className="fab fa-youtube"></i>
                   </div>

               </div>
             </div>
         )

    }
}