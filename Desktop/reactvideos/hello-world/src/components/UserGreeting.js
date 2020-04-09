import React, { Component } from 'react'

 class UserGreeting extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        //conditional renderding
        //short circuit operator
 return this.state.isLoggedIn && <div>welcome sheenam</div>


 //ternary operatory
// return (
//     this.state.isLoggedIn ?
//     <div>welcome sheenam</div> :
//     <div>welcome khan</div>
// )

// //element variable
//         let message
//         if(this.state.isLoggedIn){
//             message=<div>welcome seenam</div>
//         }
//         else{
//             message=<div>welcome khan</div>
//         }
// return <div>{message}</div>

//  if(this.state.isLoggedIn){
// return(
//     <div>rashmin sir</div>
// )}
// else{
//     return(
//         <div>HARDIK sir</div>
//     )
// }
    
        // return (
        //     <div>
        //        <div>welcome rashmin sir</div> 
        //        <div>welcome hardik sir</div> 
        //     </div>
        // )
    }
}

export default UserGreeting
