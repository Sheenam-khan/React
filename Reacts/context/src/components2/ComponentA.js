import React, { Component } from 'react'
import ComponentB from './ComponentB'
import { UserProvider } from './UserContext'
import ComponentC from './ComponentC'
 
  class ComponentA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:1
        }
       
    }
    
     providervalue= ()=>{
        this.setState({
            count:this.state.count+1
        },
        console.log(this.state.count))
         }

    
    render() {
        
  const increment=this.providervalue.bind(this)

    const {count}=this.state
        return (
            <div>
                  <UserProvider value={increment}>
                    <ComponentC/>
                  </UserProvider>
               <ComponentB/>  
            </div>
        )
    }
}

export default ComponentA
