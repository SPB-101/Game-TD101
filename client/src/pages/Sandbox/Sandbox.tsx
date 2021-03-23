import React from "react";
import "./Sandbox.scss";

import { Button } from "../../component/Button";
import { TextField } from "../../component/TextField";

export const SandboxPage = (): JSX.Element => {
  return (
    <div className="sandbox">
      SandboxPage
      <br />
      <Button>Default</Button>
      <br />
      <Button primary={true}>Primary</Button>
      <br />
      <TextField name="name1" label="Login" error="this field requeued" />
      <br />
      <TextField name="name2" label="Password" placeholder="HelloPlaceholder" />
    </div>
  );
};
