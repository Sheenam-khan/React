import React, { Component } from 'react'
import ComponentD from './ComponentD'
import   UserContext, { UserConsumer } from './UserContext'
 
 
class ComponentC extends Component {

    render() {
        //  console.log(this.context)
   const cont=this.context
        return (
            <div>
                Component C 
         
         <button onClick={cont}>Show</button>
          
               
<ComponentD></ComponentD>
               
            </div>
        )
    }
}
ComponentC.contextType=UserContext
  

export default ComponentC
