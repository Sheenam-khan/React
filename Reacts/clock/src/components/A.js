import React, { Component } from 'react'
import B from './B'
class A extends Component {
    constructor(props) {
        super(props)
      this.currentRef=React.createRef();
    }
    accessChild=()=>{
        console.log(this.refs.child)
         this.currentRef.current.increment()
      //  this.refs.child.increment()
    }
    
    render() {
        return (
            <div>
              
       {/* <Child ref="child"/>    */}
            <B ref={this.currentRef}/>   
            (parent)A<button onClick={this.accessChild}>count</button>
            </div>
        )
    }
}

export default A

