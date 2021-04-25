import React from "react";
import "./Sandbox.scss";

import { Button } from "../../component/Button";
import { TextField } from "../../component/TextField";
import { ImageField } from "../../component/ImageField";
import { AvatarField } from "../../component/AvatarField";
import { Wrapper } from "../../component/Wrapper";
import { Pagination } from "../../component/Pagination";
import { LeaderBoardItem } from "../LeaderBoardPage/LeaderBoardItem";
import { Loader } from "../../component/Loader";

export const SandboxPage = (): JSX.Element => {
  return (
    <Wrapper className="sandbox" size="l">
      SandboxPage
      <br />
      <Button>
        <>
          qwer
          <Loader />
        </>
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
      <br />
      <ul>
        <LeaderBoardItem
          rankingPosition={1}
          playerName="Devon Lane"
          score={41652}
        />
        <LeaderBoardItem
          rankingPosition={2}
          playerName="Annette Black"
          score={36047}
        />
        <LeaderBoardItem
          rankingPosition={3}
          playerName="Leslie Alexander"
          score={4432}
        />
      </ul>
    </Wrapper>
  );
};
