import React, { useState } from "react";
import { Navbar, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavigationBar = ({ onFormSubmit }) => {
  const [isInput, SetInput] = useState("");
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={isExpanded}
      style={{ borderRadius: "0.5vw" }}
    >
      <LinkContainer to="/">
        <Navbar.Brand className="mt-2" onClick={() => setExpanded(false)}>
          Youtube Clone
        </Navbar.Brand>
      </LinkContainer>
      <form
        className={"form-inline"}
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit(isInput);
        }}
      >
        <label className="sr-only" for="video-search">
          Search
        </label>
        <input
          className={"form-control ml-2"}
          type="text"
          id={"video-search"}
          value={isInput}
          placeholder="Search"
          onChange={(e) => {
            SetInput(e.target.value);
          }}
        />
      </form>
    </Navbar>
  );
};

export default NavigationBar;
