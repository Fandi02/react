import logo from "./logo.svg";
import "./App.css";
import { ListHandphones, NavbarComponent } from "./components";
import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHandphones: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "brands")
      .then((response) => {
        const listHandphones = response.data.data;
        this.setState({ listHandphones });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { listHandphones } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <Row>
          {listHandphones &&
            listHandphones.map((data) => (
              <ListHandphones key={data.id} data={data} />
            ))}
        </Row>
      </div>
    );
  }
}
