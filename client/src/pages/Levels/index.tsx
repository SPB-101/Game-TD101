import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { Wrapper } from "@component/Wrapper";

import map1 from "../../game/img/map_1_small.jpg";
import map2 from "../../game/img/map_2_small.jpg";
import map3 from "../../game/img/map_3_small.jpg";
import map4 from "../../game/img/map_4_small.jpg";
import "./style.css";

const maps = [map1, map2, map3, map4];

export const LevelsPage = () => {
  const dispatch = useDispatch();
  const play = (id: number) => dispatch(push(`/level-${id}`));
  return (
    <div className="levels">
      {maps.map((v, i) => {
        return (
          <Wrapper size="s" className="levels_item" key={i}>
            <div className="levels_number">{i}</div>
            <img src={v} onClick={() => play(i)} />
          </Wrapper>
        );
      })}
    </div>
  );
};
