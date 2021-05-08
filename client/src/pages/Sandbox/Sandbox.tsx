import React from "react";

import { Button } from "@component/Button";
import { TextField } from "@component/TextField";
import { Wrapper } from "@component/Wrapper";
import { Pagination } from "@component/Pagination";
import { Loader } from "@component/Loader";

import "./Sandbox.scss";

export const SandboxPage = () => {
  return (
    <Wrapper className="sandbox" size="l">
      SandboxPage
      <br />
      <Button>
        <Loader />
      </Button>
      <br />
      <Button>Button</Button>
      <br />
      <Button classType="primary">primary</Button>
      <br />
      <Button classType="danger">danger</Button>
      <br />
      <TextField name="login" label="Login" error="error" />
      <br />
      <TextField
        name="pass"
        type="password"
        label="Password"
        className="text-field--password"
        placeholder="HelloPlaceholder"
      />
      <br />
      <TextField
        name="placeholder"
        label="placeholder"
        placeholder="placeholder"
      />
      <br />
      <Pagination totalRecords={67} />
    </Wrapper>
  );
};
