import React, { Component } from 'react'
import ComponentC from './ComponentC'
 

  class ComponentB extends Component {
    render() {
        return (
            <div>
        <ComponentC></ComponentC>
            </div>
        )
    }
}

export default ComponentB
