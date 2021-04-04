import React from "react";
import "./Sandbox.scss";

import { Button } from "../../component/Button";
import { TextField } from "../../component/TextField";
import { ImageField } from "../../component/ImageField";
import { AvatarField } from "../../component/AvatarField";
import { Wrapper } from "../../component/Wrapper";

export const SandboxPage = (): JSX.Element => {
  return (
    <Wrapper className="sandbox" size="m">
      SandboxPage
      <br />
      <ImageField name="avatar" label="Avatar" />
      <br />
      <AvatarField title="Avatar profile" name="avatar" label="Upload image" />
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
    </Wrapper>
  );
};
