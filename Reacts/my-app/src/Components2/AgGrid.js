import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiButtonIcon, EuiSpacer } from "@elastic/eui";
import PopOver from "./PopOver";
import Pagination from "./Pagination";
import Filter from "./Filter";
import DelButton from "./Button";
import ComboBox from "./ComboBox";

class AgGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "Student ID",
          field: "studentID",
          checkboxSelection: true,
          sortable: true,
          rowDrag: true,
          cellClass: "grid-cell-centered",
          cellRenderer: function (params) {
            return parseInt(params.node.id) + 1;
          },
        },
        { headerName: "Name", field: "name", sortable: true, filter: true },
        { headerName: "Email", field: "email", sortable: true, filter: true },
        { headerName: "Branch", field: "branch", sortable: true, filter: true },
        { headerName: "DOB", field: "dob", sortable: true, filter: true },
        {
          headerName: "Contact ",
          field: "contact",
          sortable: true,
          filter: true,
        },

        ,
        {
          headerName: "Actions",
          field: "action",
          cellRendererFramework: DelButton,
          cellRendererParams: {
            callRef: this.deleteRow,
          },
        },
        {
          headerName: "Tags",
          field: "tag",
          cellRendererFramework: (params) => {
            return <ComboBox />;
          },
        },
      ],

      rowData: [
        {
          name: "Hardik",
          email: 'hardik.motwani@rapidops.com"',
          branch: "IT",
          dob: "12-11-1999",
          contact: 7982124770,
        },
        {
          name: "Meet",
          email: "meet.shah@rapidops.com",
          branch: "CS",
          dob: "12-1-98",
          contact: 9870912667,
        },
        {
          name: "Darshan",
          email: "darshan.raval@gmail.com",
          branch: "IT",
          dob: "11-9-90",
          contact: 8460556732,
        },
        {
          name: "Dhairya",
          email: "shahdhairya@gmail.com",
          branch: "CS",
          dob: "3-5-97",
          contact: 8488866756,
        },
        {
          name: "Kane",
          email: "kanewilliamson@gmail.com",
          branch: "IT",
          dob: "30-03-1997",
          contact: 8488866756,
        },
        {
          name: "Vaibhav",
          email: "kabira.vaibhav@gmail.com",
          branch: "CS",
          dob: "30-03-1987",
          contact: 9876512344,
        },
        {
          name: "Hardik",
          email: 'hardik.motwani@rapidops.com"',
          branch: "IT",
          dob: "12-11-1999",
          contact: 7982124770,
        },
        ,
        {
          name: "Dhairya",
          email: "shahdhairya@gmail.com",
          branch: "CS",
          dob: "3-5-97",
          contact: 8488866756,
        },
      ],

      paginationPageSize: 10,
      PAGE_COUNT: null,
      currentPage: 0,

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
      components: {
        boldRenderer: (params) => {
          return "<b>" + params.value.name + "</b>";
        },
      },
      pivotPanelShow: "always",
      rowGroupPanelShow: "always",
      rowSelection: "single",
      gridApi: "",
      gridColumnApi: "",
    };
  }

  onGridReady = (params) => {
    this.setState({
      gridApi: params.api,
      gridColumnApi: params.columnApi,
    });
    //  console.log(this.state.gridColumnApi.getColumn('name').visible))
    //  console.log(this.state.gridApi.paginationProxy.totalPages)//total page
    //  console.log(this.state.gridApi.paginationGetCurrentPage())//current page
    //  console.log( this.state.gridApi.paginationGetTotalPages())//total page
    //  console.log(this.state.gridApi.paginationGetPageSize()//page size
  };

  hideOrShowColumn = (field, flag) => {
    const { gridColumnApi } = this.state;
    gridColumnApi.setColumnVisible(field, !flag);
  };

  //Delete functionality
  deleteRow = () => {
    let { gridApi, rowData } = this.state;
    const selectedNode = gridApi.getSelectedNodes();
    const index = selectedNode[0].id;
    rowData.splice(selectedNode, 1);
    this.setState(
      {
        rowData: rowData,
      },
      () => console.log(this.state.rowData)
    );
    gridApi.setRowData(rowData);
    // const selectedData = gridApi.getSelectedRows();
    // gridApi.updateRowData({ remove: selectedData });
  };

  //Filter functionality
  filterData = (query) => {
    let { gridApi } = this.state;

    console.log(gridApi);
    console.log(query);

    if (gridApi !== undefined) {
      gridApi.setQuickFilter(query);
    }
  };

  //custom pagination
  onPageSizeChanged = (page) => {
    let { gridApi } = this.state;
    this.setState((prevs) => ({
      PAGE_COUNT: gridApi.paginationProxy.totalPages,
      paginationPageSize: prevs.paginationPageSize,
      currentPage: gridApi.paginationGetCurrentPage(),
    }));
    gridApi.paginationSetPageSize(Number(page) || "All");
  };

  //page change
  goToPage = (pageNumber) => {
    const { gridApi } = this.state;
// this.setState({
//   currentPage:pageNumber
// })

    gridApi.paginationGoToPage(pageNumber);
  };

  render() {
    const {
      defaultColDef,
      paginationPageSize,
      rowSelection,
      rowData,
      PAGE_COUNT,
      currentPage,
      columnDefs,
    } = this.state;

    //console.log(gridApi,columnDefs,rowData)

    return (
      <div
        className="ag-theme-alpine"
        style={{
          padding:"20px",
          marginTop:"20px",
          marginLeft: "2em",
          marginRight: "2em",
          height: "65vh",
          width: "95%",
        }}
      >
        
        <Filter  rowData={rowData} filterData={this.filterData} />
        
        <EuiSpacer />
        <div  style={{ float: "right" }}>
        <PopOver
          columnDefs={columnDefs}
          hideOrShowColumn={this.hideOrShowColumn}
         
        /></div>

        <EuiSpacer />

        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={this.state.rowData}
          rowDataChangeDetectionStrategy="IdentityCheck"
          onGridReady={this.onGridReady}
          debug={true}
          rowSelection={rowSelection}
          callback={this.callback}
          pagination={true}
          paginationPageSize={paginationPageSize}
        />

        <Pagination
          PAGE_COUNT={PAGE_COUNT}
          activePage={currentPage}
          customPagination={this.onPageSizeChanged}
          pageSize={paginationPageSize}
          pageChange={this.goToPage}
        />
      </div>
    );
  }
}

export default AgGrid;
