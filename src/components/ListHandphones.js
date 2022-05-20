import { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import React from "react";

const ListHandphones = ({ listHandphones }) => {
  return (
    <Col md={4} xs={6} className="mb-5">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          {/* <Card.Title>{listHandphones.brand_name}</Card.Title> */}
          <Card.Title>Title Handphone</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListHandphones;
