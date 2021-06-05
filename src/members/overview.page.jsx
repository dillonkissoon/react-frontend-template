import React from "react";
import DefaultAppShell from "../layout/default.shell";

import Container from "react-bootstrap/Container";

const AccountOverview = () => {
  return (
    <>
      <DefaultAppShell>
        <Container>
          <h1>Account Overview</h1>
          <p>User authenticated</p>
        </Container>
      </DefaultAppShell>
    </>
  );
};

export default AccountOverview;
