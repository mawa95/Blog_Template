import React from "react";

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className='container'>
               <div className='aboute_me'>
                   <h3 className='about_title'>Aboute me</h3>
                   <div className='blogger_photo'>
                       <img src='../images/kaboompics_Young%20woman%20with%20basket%20full%20of%20flowers.jpg'></img>
                       <p>Hello, my name is Lavander. I am a blogger living in New York. This is my blog, where I post my
                           photos and traveling tips.
                       </p>
                   </div>
               </div>

            </div>
        )
    }
}