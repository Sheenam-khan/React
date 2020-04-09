import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            comments:'' ,
            topic:'react'
        }
    }
    handleUserName=(event)=>{
        this.setState({
            username:event.target.value,
        
        },  console.log(this.username))
      
    }

    handleComments=(event)=>{
        this.setState({
            comments:event.target.value,
        
        },  console.log(this.username))
    }
    
    handleTopicChange=event=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
      alert(`${this.state.username}  ${this.state.comments}  ${this.state.topic}`)
    }

    render() {
const {username,comments,topic}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
           <div>
<label>UserName</label>     
<input type="text" value={username} 
onChange={this.handleUserName} />

            </div>
            <div>
<label>comments</label>
<textarea value={comments} onChange={this.handleComments}></textarea>
            </div>

            <div>
                <label>Topic</label>
            <select value={topic}  onClick={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
            </select>
            </div>
            <button type="submit">Submit</button>
            </form>
    
        )
    }
}

export default Form
