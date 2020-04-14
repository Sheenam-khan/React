import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
 
import 'ag-grid-enterprise';
 
class App extends React.Component {
  constructor(props) {
    super(props)

this.state = {
  columnDefs: [
    {headerName: 'Name', field: 'name', sortable: true, filter: true,  rowGroup: true },
    {headerName: 'Email', field: 'email', sortable: true, filter: true},
    {headerName: 'Branch', field: 'branch', sortable: true, filter: true},
    {headerName: 'DOB', field: 'dob', sortable: true, filter: true},
    {headerName: 'Contact ', field: 'contact', sortable: true, filter: true}
   , {headerName:'Options',field:'options'}
  ],
  
  rowData: [
    {name: 'Hardik', email: 'hardik.motwani@rapidops.com"', branch:"IT",dob:'12-11-1999',contact: 7982124770,option:'Edit' },
    {name: 'Meet', email: 'meet.shah@rapidops.com', branch:"CS",dob:'12-1-98',contact: 9870912667 },
    {name: 'Darshan', email: 'darshan.raval@gmail.com', branch:"IT", dob:'11-9-90',contact:  8460556732 },
    {name: 'Dhairya', email: 'shahdhairya@gmail.com', branch:"CS", dob:'3-5-97',contact:  8488866756 },
    {name: 'Kane',   email: "kanewilliamson@gmail.com",  branch: "IT",dob: "30-03-1997", contact:  8488866756 },
    {name: 'Vaibhav',   email: "kabira.vaibhav@gmail.com",  branch: "CS",dob: "30-03-1987", contact:  9876512344  }
, {name: 'Hardik', email: 'hardik.motwani@rapidops.com"', branch:"IT",dob:'12-11-1999',contact: 7982124770 },
   
  ], 
  items:[],
 
  autoGroupColumnDef: {
    cellRenderer:'agGroupCellRenderer',
    cellRendererParams: {
       checkbox: true
    }, 
    defaultColDef: {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    },
    
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    paginationPageSize: 10,
    paginationNumberFormatter: function(params) {
      return '[' + params.value.toLocaleString() + ']';
    },
  
  
  
  }
  }
this.filterList = this.filterList.bind(this);
  }


  onPageSizeChanged = newPageSize => {
    var value = document.getElementById('page-size').value;
    this.gridApi.paginationSetPageSize(Number(value));
  };

componentWillMount(){
  this.setState({
    items:this.state.rowData
  })
}

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/albums')
  //   .then(res => res.json())
  //   .then(rowData => this.setState({ rowData }))
  //   .catch(err => console.log(err));
  // }

  // onButtonClick = () => {
  //   const selectedNodes = this.gridApi.getSelectedNodes();
  //  const selectedData = selectedNodes.map(node => node.data);
  //  const selectedDataStringPresentation = selectedData.map(node => node.userId + '' + node.title).join(',');
  //    alert(`Selected Nodes: ${
  //     selectedDataStringPresentation}`);
  // }

  filterList(e){
    let input = e.target.value;
    console.log(this.props)
    console.log(this.gridApi)
    let updateList=this.state.items
    console.log(updateList)
    updateList=updateList.filter(item=>{
      return item.name.toLowerCase().search(input.toLowerCase())!==-1
    })
    this.setState({
      items:updateList
    })
    
 
}
  render() {
 
    return (

      <div style={{ width: '100%', height: '100%' }}>
      <div className="test-container">
        <div className="test-header">
          Page Size:
          <select onChange={() => this.onPageSizeChanged()} id="page-size">
            <option value="1" selected="">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        </div>
     <br></br>
      <div
        className='ag-theme-balham'
        style={{
          width: 1400,
          height: 600
        }}
        >     
 
 <div className='control' style={{minWidth: "300px"}}>
 <input type="text" onChange={this.filterList}  style={{width: "100%"}} placeholder='Filter by' type='text'/>
                                </div>
        {/* <button onClick={this.onButtonClick}>Get Selected Rows</button> */}

<br></br>
{console.log(this.state.columnDefs)}
      <AgGridReact
      columnDefs = {this.state.columnDefs}
      
      autoGroupColumnDef={this.state.autoGroupColumnDef}
       defaultColDef={this.state.defaultColDef}
      rowData={this.state.rowData}
      rowSelection = "multiple"
     
      debug={true}         
      rowSelection={this.state.rowSelection}
      rowGroupPanelShow={this.state.rowGroupPanelShow}
      pivotPanelShow={this.state.pivotPanelShow}
      enableRangeSelection={true}
      pagination={true}
      paginationPageSize={this.state.paginationPageSize}
      paginationNumberFormatter={this.state.paginationNumberFormatter}
      onGridReady={params => this.gridApi = params.api}
      groupSelectsChildren={true} 
      rowData={this.state.items} 
      />
         </div>
      
  </div>
)
  }


}

export default App;

