import React, { Component } from 'react'

  class EventBind extends Component {
 constructor(props) {
     super(props)
     this.state = {
      message:'show message'    
     }
    // this.clicHandler=this.clicHandler.bind(this)
 }
 
//  clicHandler(){
//      this.setState({
//          message:'goodbye'
//      })
// console.log(this) 
// }

clicHandler=()=>{
    this.setState({
        message:'goodbye'
    })
}

   
   
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
               {/* <button onClick={this.clicHandler.bind(this)}>click</button>  */}
            
          {/* <button onClick={()=>this.clicHandler()}>click</button>  */}
          <button onClick={this.clicHandler}>click</button> 

            </div>
        )
    }
}

export default EventBind
