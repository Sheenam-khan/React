import React, { Component } from 'react'
import './Style.css'
 class Form extends Component {
   
 constructor(props){
    super(props);
    this.state = { fname: '', lname: '', act: 0,
    index: '',datas:[] };
  }
 
  handleChange = ({ target }) => {
     this.setState({ [target.name]: target.value });
  };

  
 handleSubmit = event => {
    const datas=this.state.datas
    event.preventDefault();
    if(this.state.act===0){
  const info={
      fname:this.state.fname,
      lname:this.state.lname
  }
 
  datas.push(info)
    }
    else{
        let index = this.state.index;
        datas[index].fname = this.state.fname;
        datas[index].lname= this.state.lname;
    }
  this.setState({
      datas:datas,
      act:0,
      fname:'',
      lname:''
  },console.log(datas))

  };
 
fRemove=(index)=>{
let datas=this.state.datas
datas.splice(index,1)
this.setState({
    datas:datas,
})
}

 
fEdit=(i)=>{
 console.log(i);
    // let data = this.state.datas.find(d=>d===i);
  let fname=this.state.fname
  let lname=this.state.lname
   let datas=this.state.datas[i]

   fname=datas.fname
   lname=datas.lname
    this.setState({
        fname:fname,
        lname:lname,
       index:i,
       act:1
    });
}

  render() {
    return (
    <div>
        <form  onSubmit={this.handleSubmit} className="myForm">
          <label htmlFor="fname">First name</label>
          <input
          className="formField" 
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}
          />
 <br></br>
          <label htmlFor="lname">last name</label>
          <input
          className="formField" 
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.handleChange}
          />


          <button type="submit">Add</button>
        </form>
        <br></br>
        <div>
        <table  className="table table-striped table-light">
                    <thead>
                        <tr>
                          <td>#</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Options</td>
                        </tr>
                    </thead>
                    <tbody className="myList">
                        {this.state.datas.map((data,index)=>{
                            return(
                          <tr key={index} className="myList">
                          <td>{index+1}</td>
                          <td>{data.fname}</td>
                          <td>{data.lname}</td>
                          <td>
                          <button onClick={()=>this.fRemove(index)} className="myListButton">remove </button>
                          <button onClick={()=>this.fEdit(index)} className="myListButton">edit </button>
                        </td>
                         </tr>
                            )
                         })}
                       
               </tbody>
           </table>
           </div>
        </div>
    );
  }
}

export default Form
