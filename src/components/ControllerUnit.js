
/**
 * ControllerUnit
 */
import React, { Component } from 'react';

class ControllerUnit extends Component {

  handleClick = (event) => {

    if (this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }

    event.preventDefault();
    event.stopPropagation();
  }

  render() {

    var controllerUnitClass = "controller-unit";

    if (this.props.arrange.isCenter) {
      controllerUnitClass += " is-center"

      if (this.props.arrange.isInverse) {
        controllerUnitClass += " is-inverse"
      }

    }

    return (
      <span className={controllerUnitClass}
            onClick={this.handleClick}>

      </span>
    )
  }

}

module.exports = ControllerUnit;
