import React, { Component } from 'react'
import B from './B'
class A extends Component {
    constructor(props) {
        super(props)
     this.childRef=React.createRef()
    }
    
    accessChild=()=>{
        // console.log(this.refs.child)
       // this.refs.child.increment()
       this.childRef.current.increment()
    }
    
    render() {
        return (
            <div>
              <B ref={this.childRef}/>
            {/* <B ref="child"/>    */}
            (parent)A<button onClick={this.accessChild}>count</button>
            </div>
        )
    }
}

export default A

