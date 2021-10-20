import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="q"
            placeholder="Search Products..."
            className="mr-sm-2 ml-sm-5 "
            onChange={(e) => setKeyword(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Button type="submit" variant="outline-success" className="p-2 ">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
