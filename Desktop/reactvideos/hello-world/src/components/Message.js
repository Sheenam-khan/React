import React, { Component } from 'react'

 class Message extends Component {
   constructor(props) {
       super(props)
       this.state={
           message:'seenam',
           time:new Date().toLocaleString()
       }
       console.log(this.state);

   }

   changeMessage(){
    this.setState({
        message:"see"
     })
   }

  
  componentDidMount(){
    setInterval(() => {
        this.setState({time:new Date().toLocaleString})
    }, 1000)

  } 

   
    render() {
        return (
            <div>
  <h1>{this.state.message}</h1>
        <h1>{this.state.time}</h1>
  <button onClick={()=>this.changeMessage()}>change</button>
            </div>
        )
    }
}

export default Message
