import React from "react";
import "./Sandbox.scss";

import { Button } from "../../component/Button";
import { TextField } from "../../component/TextField";

export const SandboxPage = (): JSX.Element => {
  return (
    <div className="sandbox">
      SandboxPage
      <br />
      <Button>Button</Button>
      <br />
      <Button>Button 2</Button>
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
    </div>
  );
};
