import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import deleteRow from './DeleteRow'
import { EuiIcon } from "@elastic/eui";
import { EuiButtonEmpty, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
export class AgGrid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newFilterData: null,
      columnDefs: [
        {headerName: 'Name', field: 'name', sortable: true, filter: true,  rowGroup: true },
        {headerName: 'Email', field: 'email', sortable: true, filter: true},
        {headerName: 'Branch', field: 'branch', sortable: true, filter: true},
        {headerName: 'DOB', field: 'dob', sortable: true, filter: true},
        {headerName: 'Contact ', field: 'contact', sortable: true, filter: true}
       , {headerName:'Actions',field:'action',
      cellRendererFramework:function(){
        return ( <EuiFlexGroup gutterSize="s" alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiButtonEmpty
            color="text"
            onClick={() => this.deleteRow()}
          >
            <i className="material-icons">delete</i>
            
          </EuiButtonEmpty>
        </EuiFlexItem>
      </EuiFlexGroup>)   
        }
    }
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

      autoGroupColumnDef: {
        paginationPageSize: 10,
        paginationNumberFormatter: function(params) {
          return '[' + params.value.toLocaleString() + ']';
        }
    
       },

      defaultColDef: {
       //checkboxSelection:true,
        editable: true,
        sortable: true,
        resizable: true,
        filter: true,
        pagination:true,
        rowSelection:'single',
  
      },
    
    };
    this.newFilterData = this.newFilterData.bind(this);
    this.deleteRow = this.deleteRow.bind(this)

  }
  
  componentWillMount() {
    this.setState({
      newFilterData: this.state.rowData
    })
  }


  onGridReady = (params) => {
    this.gridApi = params.api;
  }

deleteRow=()=>{

  const selectedData = this.gridApi.getSelectedRows();
  this.gridApi.updateRowData({ remove: selectedData });
}


  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map(node => node.data)
    const selectedDataStringPresentation = selectedData.map(a => a.name + ' ' + a.email + ' From ' + a.branch).join('\n ')

    alert(`Selected nodes: ${'\n'}${selectedDataStringPresentation}`)
  }

   


  onPageSizeChanged = newPageSize => {
    let value = document.getElementById('page-size').value;
    this.gridApi.paginationSetPageSize(Number(value));
  };

  newFilterData = (e) => {
     let updateList = this.state.rowData;
     updateList = updateList.filter(item => {
      return item.name.toLowerCase().search(
        e.target.value.toLowerCase()
      ) !== -1
    })
    this.setState({
      newFilterData: updateList
    })


  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '55vh',
          width: '100%'
        }}
      >
       <EuiFlexGroup gutterSize="s" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              color="text"
              onClick={() => window.alert("Button clicked")}
            >
              Text
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>
      <div className="test-container">
        <div className="test-header">
        {/* <input type="text" id="filter-text-box" placeholder="Filter..." oninput="onFilterTextBoxChanged()"/> */}

          Page Size:
          <select onChange={() => this.onPageSizeChanged()} id="page-size">
  
            <option value="1" selected='' >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
     <br></br>
  
      <input className="p-2 m-2 " type="text" onChange={this.newFilterData} placeholder="Search" />
       <br></br>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          autoGroupColumnDef={this.state.autoGroupColumnDef}
          defaultColDef={this.state.defaultColDef}
          rowData={this.state.newFilterData}
          rowDataChangeDetectionStrategy='IdentityCheck'
          onGridReady={this.onGridReady}
         rowSelection="multiple"
         // rowSelection={this.rowSelection}
          pagination="true"
          debug={true}         
      
          pagination={true}
          paginationPageSize={this.state.paginationPageSize}
          paginationNumberFormatter={this.state.paginationNumberFormatter}
        // paginationAutoPageSize="true"
        >
        </AgGridReact>
        <br></br>
        <button className=" btn btn-primary p-2 m-2 " onClick={this.onButtonClick}>Get selected rows</button>
        <button onClick={()=>this.deleteRow()}><i class="material-icons"> delete</i></button>

      </div>
    );
  }
}

export default AgGrid
