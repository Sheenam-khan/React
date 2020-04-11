import React, { Component } from 'react'

class Clock extends Component {
   
    constructor(props){
       super(props)
      
       this.state={
           date:new Date().toDateString(),
        timerstarted:true,
        hours:new Date().getHours(),
        minutes:new Date().getMinutes(), 
        seconds:new Date().getSeconds(),
        ampm:''
        
  }
   }


   timerStart(e){
       e.preventDefault();
 
 
        setInterval(()=>{
 
         if(this.state.timerstarted){
        // console.log(this.state)
        this.setState((prevState)=>({date:prevState.date}))
        this.state.ampm=this.state.hours>=12 ? this.setState((prevState)=>({ampm:'pm'})):this.setState((prevState)=>({ampm:'am'}))
         
        //    const  hours=this.state.hours
        //    hours=hours%12
        //    hours=hours ? hours:this.setState((prevState)=>({hours:12}))
        //    const minutes=this.state.minutes
        //   minutes=minutes < 10 ?this.setState((prevState)=>({minutes:'0'+prevState.minutes})) :minutes

        if(this.state.minutes >=60 ){
            this.setState((prevState)=>({hours:prevState.hours+1 ,minutes:0,seconds:0}))
        }
        else if(this.state.seconds>=60){
            this.setState((prevState)=>({minutes:prevState.minutes+1,seconds:0}))
        }
        else{
           
        this.setState((prevState)=>({seconds:prevState.seconds+1}))
        }
    }
   },1000)

   }
    
   
    render() {
        return (
            <div>
              <div className="container">
                  <h2>React based Timer</h2>
                  <div className="timer-container">
                      <div className="current-timer">
                    {this.state.date}
                    <br></br>
                    {this.state.hours}:{this.state.minutes}:{this.state.seconds} <b>{this.state.ampm}</b> 
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
