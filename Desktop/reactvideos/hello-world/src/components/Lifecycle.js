import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
import LifecycleD from './lifecycleD'
  class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'sheenam'
        }
        console.log('lifecycle constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycle getDerivedStateFromProps')
        return null   
    }
     

componentDidMount(){
    console.log('lifecycle componentDidMount')

}
    
    render() {
        console.log('lifecycle Render')

        return (
            <div>
                lifecyleA
                <LifecycleB></LifecycleB>
             
            </div>
        )
    }
}
class LifecycleE extends Lifecycle {
    constructor(props){
        super(props)
        this.state={
            name:'sheenam'
        }
        console.log('lifecycleE constructor')
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('lifecycleE getDerivedStateFromProps')
        return null   
    }
     

componentDidMount(){
    console.log('lifecycleE componentDidMount')

}
    
    render() {
        console.log('lifecycleE Render')

        return (
            <div>
                LifecycleE
                <LifecycleD></LifecycleD>
            </div>
        )
    }
}
 
export default LifecycleE ;
 