 
import React, { Component } from 'react'

 class B extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.increment=this.increment.bind(this)
    }
    
    increment(){
        this.setState(prevState=>
        ({count:prevState.count+2}),
     ()=> console.log('callback value',this.state.count))
     console.log(this.state.count)  
    }
    render() {
        return (
            <div>
                <h3>div=>{this.state.count}</h3>
            </div>
        )
    }
}

export default B
 
 
 
