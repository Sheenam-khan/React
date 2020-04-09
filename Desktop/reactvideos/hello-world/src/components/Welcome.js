import React, { Component } from 'react'

 class Welcome extends Component {
    render() {
 const {name,heroname}=this.props
//const  {state1,state2}=this.state
        return (
            <div>
                 <h1>class Compomnent</h1>
                {/* <h1>{this.props.name}:{this.props.heroname}</h1> */}
                <h1>{name}:{heroname}</h1>
            </div>
        )
    }
}

export default Welcome
