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
      <TextField label="TextField" error="error" />
      <br />
      <TextField label="TextField" placeholder="HelloPlaceholder" />
    </div>
  );
};