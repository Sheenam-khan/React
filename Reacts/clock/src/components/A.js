<<<<<<< HEAD
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

=======
import React, { Component } from 'react'
import B from './B'
class A extends Component {
    constructor(props) {
        super(props)
      this.currentRef=React.createRef();
    }
    accessChild=()=>{
       // console.log(this.refs.child)
         this.currentRef.current.increment()
     // this.refs.child.increment()
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

>>>>>>> bb4e026241136a37bb7dac44f50e8c1676fa5d13
