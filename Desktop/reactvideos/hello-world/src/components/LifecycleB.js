import React, { Component } from 'react'

class LifecycleB extends  Component {
    constructor(props){
        super(props)
        this.state={
            name:'sheenam'
        }
        console.log('lifecycleB constructor');
    }
    

static getDerivedStateFromProps(props,state){
console.log('lifecycleB getDerivedStateFromProps')
return null;        
}
componentDidMount(){
    console.log('lifecycleB componentDidMount')

}
    
    render() {
        console.log('lifecycleB Render')

        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
