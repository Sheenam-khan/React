import React, { Component } from 'react'
import B from './B'
class A extends Component {
    
    accessChild=()=>{
        console.log(this.refs.child)
        this.refs.child.increment()
    }
    
    render() {
        return (
            <div>
              
            <B ref="child"/>   
            (parent)A<button onClick={this.accessChild}>count</button>
            </div>
        )
    }
}

export default A

