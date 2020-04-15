import React, { Component } from 'react'

  class DeleteRow extends Component {
    render() {
        return (
            <div>
              <button  delete={()=>this.deleteRow(this.props.node)}>Delete</button>  
            </div>
        )
    }
}

export default DeleteRow
