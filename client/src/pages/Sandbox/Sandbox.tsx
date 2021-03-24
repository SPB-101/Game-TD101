import React from "react";
import "./Sandbox.scss";

import { Button } from "../../component/Button";
import { TextField } from "../../component/TextField";
import { Pagination } from "../../component/Pagination";
import { LeaderBoardItem } from "../../component/LeaderBoardItem";

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
    </div>
  );
};
