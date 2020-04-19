import React, { Component } from "react";
import {
  EuiFormRow,
  EuiPopover,
  EuiButtonToggle,
  EuiButton,
  EuiButtonIcon,
} from "@elastic/eui";

class PopOver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      toggle: [],
    };
  }
  onButtonClick = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  };

  closePopover = () => {
    this.setState({
      isPopoverOpen: false,
    });
  };

  //show Hide functionality
  hideColumnBtn = (i, column_name, flag) => {
    const { hideOrShowColumn } = this.props;
    console.log(i, column_name, flag);

    const arr = this.state.toggle;
    console.log(arr[i]);
    arr[i] = false;
    if (arr[i] == true && flag == false) {
      arr[i] = false;
    }
    if (arr[i] == false && flag == true) {
      arr[i] = true;
    }
    this.setState({
      toggle: arr,
    });
    hideOrShowColumn(column_name, flag);
  };

  componentDidMount = () => {
    console.log(this.props);
    const { columnDefs } = this.props;
    const arr = [];
    const value = true;
    let i = 0;
    if ((i, i < columnDefs.length, i++)) {
      arr.push(value);
    }
    this.setState(
      {
        toggle: arr,
      },
      () => console.log(this.state)
    );
  };
  render() {
    const { columnDefs } = this.props;
    let newArray = this.state.toggle;
    // console.log(columnDefs)
    const button = (
      <EuiButton
        iconType="gear"
        iconSide="right"
        onClick={() => this.onButtonClick()}
      />
    );
    return (
      <div>
        <EuiPopover
          className="pul-right button"
          iconSide="right"
          ownFocus
          button={button}
          isOpen={this.state.isPopoverOpen}
          closePopover={this.closePopover}
        >
          {columnDefs.map((column, index) => {
            console.log(newArray[index]);
            if (newArray[index] !== "undefined") {
              return (
                <div key={index}>
                  <EuiFormRow id="asdf" hasChildLabel={true}>
                    <EuiButtonToggle
                      label={column.field}
                      iconType={newArray[index] ? "eyeClosed" : "eye"}
                      iconSide="left"
                      onChange={(e) =>
                        this.hideColumnBtn(
                          index,
                          column.field,
                          e.target.checked
                        )
                      }
                    />
                  </EuiFormRow>
                </div>
              );
            }
          })}
        </EuiPopover>
      </div>
    );
  }
}

export default PopOver;
