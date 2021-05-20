import React from "react";
import map1 from "../../game/img/map_1_small.jpg";
import map2 from "../../game/img/map_2_small.jpg";
import map3 from "../../game/img/map_3_small.jpg";
import map4 from "../../game/img/map_4_small.jpg";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import "./LevelsPage.css";

export const LevelsPage = () => {
  const dispatch = useDispatch();
  const play = (id: number) => dispatch(push(`/level-${id}`));
  return (
    <table className="levels">
      <tbody>
        <tr>
          <td>
            <img className="level" src={map1} onClick={() => play(0)} />
          </td>
          <td>
            <img className="level" src={map2} onClick={() => play(1)} />
          </td>
        </tr>
        <tr>
          <td>
            <img className="level" src={map3} onClick={() => play(2)} />
          </td>
          <td>
            <img className="level" src={map4} onClick={() => play(3)} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
