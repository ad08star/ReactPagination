import React, { Component, Fragment } from "react";

export default class Users extends Component {
  render() {
    console.log("inside user");
    return (
      <Fragment>
        <tr>
          <td
            onClick={() => this.props.handleShow(this.props.users)}
            style={{ cursor: "pointer" }}
          >
            {this.props.users.first_name}
          </td>
          <td>{this.props.users.last_name}</td>
          <td>{this.props.users.company_name}</td>
          <td>{this.props.users.city}</td>
          <td>{this.props.users.state}</td>
          <td>{this.props.users.zip}</td>
          <td>{this.props.users.email}</td>
          <td>{this.props.users.web}</td>
          <td>{this.props.users.age}</td>
        </tr>
      </Fragment>
    );
  }
}
