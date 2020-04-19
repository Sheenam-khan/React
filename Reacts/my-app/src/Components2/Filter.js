import React, { Component } from "react";
import { EuiSearchBar } from "@elastic/eui";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: EuiSearchBar.Query.MATCH_ALL,
    };
    console.log(this.state);
  }

  render() {
    const { query } = this.state;
    const { filterData } = this.props;
    console.log(this.state.query.text);
    return (
      <EuiSearchBar
        size="s"
        query={query.queryText}
        box={{
          placeholder: "Search",
          incremental: true,
        }}
        onChange={(query) => filterData(query.queryText)}
      />
    );
  }
}

export default Filter;
