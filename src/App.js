import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Pagination from "./components/Pagination";
import Users from "./components/Users";
import NavHeader from "./components/Navbar";
import { Table, Modal } from "react-bootstrap";

class App extends Component {
  state = {
    allusers: [],
    currentUsers: [],
    currentPage: null,
    totalPages: null,
    show: false,
    isOldestFirst: true
  };

  componentDidMount() {
    axios
      .get("https://demo0734009.mockable.io/users")
      .then(response => {
        this.setState({
          allusers: response.data
        });
      })
      .catch(error => console.log(error.response));

    this.pointerFirstName = true;
    this.pointerLastName = true;
    this.pointerCompanyName = true;
    this.pointerCity = true;
    this.pointerState = true;
    this.pointerZip = true;
    this.pointerEmail = true;
    this.pointerWeb = true;
    this.pointerAge = true;
  }

  sortByParam(str) {
    let { allusers } = this.state;
    let newAllusers;
    //console.log("newAllusers 1: ", newAllusers);
    if (this.state.isOldestFirst) {
      newAllusers = allusers.sort((a, b) => {
        if (a[str] > b[str]) return 1;
        else return -1;
      });
    } else {
      newAllusers = allusers.sort((a, b) => {
        if (a[str] < b[str]) return 1;
        else return -1;
      });
    }
    //console.log("Sorted array:", newAllusers);
    return newAllusers;
  }

  toggleSort = str => {
    this.changePointer(str);
    this.setState({
      isOldestFirst: !this.state.isOldestFirst,
      allusers: this.sortByParam(str)
    });

    this.refs.pagination.gotoPage(1);
  };

  changePointer = str => {
    if (str === "first_name") {
      this.pointerFirstName = !this.pointerFirstName;
    } else if (str === "last_name") {
      this.pointerLastName = !this.pointerLastName;
    } else if (str === "company_name") {
      this.pointerCompanyName = !this.pointerCompanyName;
    } else if (str === "city") {
      this.pointerCity = !this.pointerCity;
    } else if (str === "state") {
      this.pointerState = !this.pointerState;
    } else if (str === "zip") {
      this.pointerZip = !this.pointerZip;
    } else if (str === "web") {
      this.pointerWeb = !this.pointerWeb;
    } else if (str === "email") {
      this.pointerEmail = !this.pointerEmail;
    } else if (str === "age") {
      this.pointerAge = !this.pointerAge;
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = user => {
    this.setState({ show: true });
    this.userFirstName = user.first_name;
    this.userLastName = user.last_name;
    this.userCompanyName = user.company_name;
    this.userCity = user.city;
    this.userState = user.state;
    this.userZip = user.zip;
    this.userEmail = user.email;
    this.userWeb = user.web;
    this.userAge = user.age;
  };

  onPageChanged = data => {
    const { allusers } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentUsers = allusers.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentUsers, totalPages });
  };

  render() {
    const { allusers, currentUsers, currentPage, totalPages } = this.state;
    const totalUsers = allusers.length;

    if (totalUsers === 0) return null;

    return (
      <div className="App">
        <NavHeader totalPages={totalPages} currentPage={currentPage} />
        <div style={{ paddingTop: "3vw" }}>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th onClick={e => this.toggleSort("first_name")}>
                  First Name{" "}
                  <i
                    className={
                      this.pointerFirstName
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
                <th onClick={e => this.toggleSort("last_name")}>
                  Last Name{" "}
                  <i
                    className={
                      this.pointerLastName
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
                <th onClick={e => this.toggleSort("company_name")}>
                  Company{" "}
                  <i
                    className={
                      this.pointerCompanyName
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
                <th onClick={e => this.toggleSort("city")}>
                  City{" "}
                  <i
                    className={
                      this.pointerCity
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
                <th onClick={e => this.toggleSort("state")}>
                  State{" "}
                  <i
                    className={
                      this.pointerState
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
                <th onClick={e => this.toggleSort("zip")}>
                  Zip{" "}
                  <i
                    className={
                      this.pointerZip
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
                <th onClick={e => this.toggleSort("email")}>
                  Email{" "}
                  <i
                    className={
                      this.pointerEmail
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
                <th onClick={e => this.toggleSort("web")}>
                  Web{" "}
                  <i
                    className={
                      this.pointerWeb
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
                <th onClick={e => this.toggleSort("age")}>
                  Age{" "}
                  <i
                    className={
                      this.pointerAge
                        ? "fas fa-angle-double-down"
                        : "fas fa-angle-double-up"
                    }
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <Users
                  key={user.id}
                  users={user}
                  handleShow={this.handleShow}
                />
              ))}
            </tbody>
          </Table>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            totalRecords={totalUsers}
            pageLimit={5}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
            ref="pagination"
          />
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          style={{ backgroundColor: "rgba(228, 223, 218, 0.6)" }}
        >
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#007bff", color: "white" }}
          >
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: "#e4dfda",
              textAlign: "center",
              fontWeight: 700,
              color: "#4e4a4a"
            }}
          >
            <Table striped bordered hover responsive="sm">
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{this.userFirstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{this.userLastName}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>{this.userCompanyName}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{this.userCity}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{this.userState}</td>
                </tr>
                <tr>
                  <td>Zip</td>
                  <td>{this.userZip}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.userEmail}</td>
                </tr>
                <tr>
                  <td>Web</td>
                  <td>{this.userWeb}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{this.userAge}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer
            style={{ backgroundColor: "#007bff", padding: "8px 15px" }}
          >
            <button
              type="button"
              className="btn btn-default"
              style={{
                backgroundColor: "#007bff",
                border: "3px solid white",
                borderRadius: "8px",
                color: "white",
                fontWeight: "500",
                outline: "none"
              }}
              onClick={this.handleClose}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
