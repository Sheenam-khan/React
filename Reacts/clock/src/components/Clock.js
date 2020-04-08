import React, { Component } from 'react'

class Clock extends Component {
   constructor(props){
       super(props)
       this.state={
        timerstarted:true,
          hours:0,
          minutes:0,
          seconds:0
  }
   }

   timerStart(e){
       e.preventDefault();
setInterval(()=>{
    if(this.state.timerstarted){
        // console.log(this.state)
        if(this.state.minutes >=60){
            this.setState((prevState)=>({hours:prevState.hours+1 ,minutes:0,seconds:0}))
        }
        else if(this.state.seconds>=60){
            this.setState((prevState)=>({minutes:prevState.minutes+1,seconds:0}))
        }
        else{
           
        this.setState((prevState)=>({seconds:prevState.seconds+1}))
        }
    }
},10)

   }
    
   
    render() {
        return (
            <div>
              <div className="container">
                  <h2>React based Timer</h2>
                  <div className="timer-container">
                      <div className="current-timer">
                    {this.state.hours+" :"}{this.state.minutes+" :"}{this.state.seconds}
                      </div>
                     <div className="timer-controls">
                         <button className="btn btn-primary" onClick={this.timerStart.bind(this)}>Start</button>
                     </div>
                      
                  </div>

                  
                  
                  </div>  
            </div>
        )
    }
}

export default Clock
