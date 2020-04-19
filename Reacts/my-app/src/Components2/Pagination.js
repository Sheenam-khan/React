//Pagination
import React, { Component } from "react";
import {
  EuiButtonEmpty,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPagination,
  EuiPopover,
} from "@elastic/eui";
class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      
    };
  }
  goToPage = (pageNumber) => {
    const { pageChange} = this.props;

    pageChange(pageNumber);
  };

  onButtonClick = () => {
    this.setState(
      {
        isPopoverOpen: !this.state.isPopoverOpen,
      },
      () => console.log(this.state.isPopoverOpen)
    );
  };

  closePopover = (value) => {
    const { customPagination } = this.props;
    this.setState({
      isPopoverOpen: false,
    });
    customPagination(value);
  };
  render() {
    const { pageSize, PAGE_COUNT, activePage } = this.props;
    const { isPopoverOpen } = this.state;

    const button = (
      <EuiButtonEmpty
        size="s"
        color="text"
        iconType="arrowDown"
        iconSide="right"
        onClick={this.onButtonClick}
      >
        Rows per page: {pageSize || "All"}
      </EuiButtonEmpty>
    );

    const items = [
      <EuiContextMenuItem
        key="all"
        icon={pageSize === "All" ? "check" : "empty"}
        onClick={() => {
          this.closePopover();
        }}
      >
        All rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="2 rows"
        icon={pageSize === 2 ? "check" : "empty"}
        onClick={() => {
          this.closePopover(2);
        }}
      >
        2 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="4 rows"
        icon={pageSize === 4 ? "check" : "empty"}
        onClick={() => {
          this.closePopover(4);
        }}
      >
        4 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="6 rows"
        icon={pageSize === 2 ? "check" : "empty"}
        onClick={() => {
          this.closePopover(6);
        }}
      >
        6 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="8 rows"
        icon={pageSize === 8 ? "check" : "empty"}
        onClick={() => {
          this.closePopover(8);
        }}
      >
        8 rows
      </EuiContextMenuItem>,
    ];
    return (
      <div>
        <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiPopover
              button={button}
              isOpen={isPopoverOpen}
              closePopover={this.closePopover}
            >
              {items.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </EuiPopover>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiPagination
              pageCount={PAGE_COUNT}
              activePage={activePage}
              onPageClick={(activePage) => this.goToPage(activePage)}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  }
}

export default Pagination;
