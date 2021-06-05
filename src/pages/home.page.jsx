import React from "react";

// react bootstrap
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

// components
import DefaultAppShell from "./../layout/default.shell";

const HomePage = () => {
  return (
    <>
      <DefaultAppShell>
        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <h1>Home Page</h1>
          <p>This is an example of a Page.</p>
        </Container>
      </DefaultAppShell>
    </>
  );
};

export default HomePage;
