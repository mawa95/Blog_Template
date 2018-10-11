import React from "react";


// export default class MobileMenu extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Menu show={true}/>
//             </div>
//         )
//
//     }
//}
export default class Menu extends  React.Component{
    state = {
        show: this.props.show,
    };

    handleClick = () => {
        this.setState({
            show: !this.state.show
        })
    };
    render(){
        const style = {
            display: this.state.show ? 'none' : 'block'
        };
        return(
            <div className={'menu '+ this.props.class} >
                <button onClick={this.handleClick} className='buttonHamburger'><i className="fas fa-ellipsis-v"></i><i className="fas fa-bars"></i></button>
                <ul className='menu list' style={ style }>
                    <li><a href='#'>Home</a></li><hr/>
                    <li><a href='#'>Features</a></li><hr/>
                    <li><a href='#'>Blog</a></li><hr/>
                    <li><a href='#'>Travel</a></li>
                </ul>
            </div>
        )
    }

}




// class MenuList extends React.Component{
//     state = {
//         show: this.props.show,
//     };
//     handleClick2 = () => {
//         this.setState({
//             show: !this.state.show
//         })
//     };
//     render(){
//         const style = {
//             display  : this.state.show ? 'none' : 'block'
//         };
//         return(
//             <div style={style}>
//                 <ul>
//                     <li>Home</li>
//                     <li>Features</li>
//                     <li>Blog</li>
//                     <li>Travel</li>
//                 </ul>
//                 <div onClick={this.handleClick2}>zamnij</div>
//             </div>
//         )
//     }
// }
//

