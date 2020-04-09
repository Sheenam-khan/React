import React, { Component } from 'react'

  class LifecycleD extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'sheenam'
        }
        console.log('lifecycleD constructor');
    }
    

static getDerivedStateFromProps(props,state){
console.log('lifecycleD getDerivedStateFromProps')
return null;        
}
componentDidMount(){
    console.log('lifecycleD componentDidMount')

}
    
    render() {
        console.log('lifecycleD Render')

        return (
            <div>
                lifecycleD
            </div>
        )
    }
} 

export default LifecycleD
