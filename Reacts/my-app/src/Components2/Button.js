import React, { Component } from "react";

import { EuiButtonIcon } from "@elastic/eui";

class Button extends Component {
  deletRow = () => {
    const { callRef } = this.props;
    callRef();
  };

  render() {
    return (
      <div>
        <EuiButtonIcon iconType="trash" onClick={this.deletRow} />
      </div>
    );
  }
}

export default Button;
