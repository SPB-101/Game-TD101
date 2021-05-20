import React from "react";
import background from "../../game/img/background1.jpg";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export const LevelsPage = () => {
  const dispatch = useDispatch();
  const play = (id: number) => dispatch(push(`/level-${id}`));
  return (
    <table className="levels">
      <tbody>
        <tr>
          <td>
            <img className="level" src={background} onClick={() => play(0)} />
          </td>
          <td>
            <img className="level" src={background} onClick={() => play(1)} />
          </td>
        </tr>
        <tr>
          <td>
            <img className="level" src={background} onClick={() => play(2)} />
          </td>
          <td>
            <img className="level" src={background} onClick={() => play(3)} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
