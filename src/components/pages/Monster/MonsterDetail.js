import React, {
  Component,
  useState,
  useEffect,
  useLayoutEffect,
  forceUpdate,
  useContext,
} from "react";
import { Router, Route, Link, RouteHandler } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";
import Monster from "./Monster";
import { MonsterContext } from "./MonsterContext";
import "./styling.css";

const Monsters = (props) => {
  const [monsters, setMonsters] = useContext(MonsterContext);

  //   if (!isLoaded) {
  //     return (
  //       <div>
  //         ..Loading
  //       </div>
  //     );
  //   } else {

  return (
    <div>
      {monsters.map((item) => (
        <div
          class="grid-container"
          style={{
            padding: `42px`,
            margin: `30px 0px 0px 0px`,
            background: `#F5F5DC`,
          }}
        >
          <div
            class="Character-Name"
            style={{
              outline: `2px solidblack`,
              padding: `42px`,
              margin: `30px 0px 0px 0px`,
            }}
          >
            {item.name}
          </div>
          <div class="Skills" style={{ outline: `2px solid black` }}>
            sdfsdfsdfsdf hskfhsad kjlfhsdkjlfh dsjkfhsadklf skfh askfh sdkhas
            kfhs fhs fkhs
          </div>
          <div class="Class" style={{ outline: `2px solid blue` }}>
            saf
          </div>
          <div class="HP" style={{ outline: `2px solid blue` }}>
            sadf
          </div>
          <div class="Inventory" style={{ outline: `2px solid blue` }}>
            asdf
          </div>
          <div class="Traits" style={{ outline: `2px solid blue` }}>
            sdfsfsdf
          </div>
          <div class="Attacks" style={{ outline: `2px solid blue` }}>
            safdsdfsdfs
          </div>
          <div class="STR" style={{ outline: `2px solid blue` }}>
            sfsdfsdfsdaf
          </div>
          <div class="DEX" style={{ outline: `2px solid blue` }}>
            safsdfsdf
          </div>
          <div class="CONST" style={{ outline: `2px solid blue` }}>
            sdfsadfsdaf
          </div>
          <div class="Int" style={{ outline: `2px solid blue` }}>
            sadfsdafsadf
          </div>
          <div class="WIS" style={{ outline: `2px solid blue` }}>
            asdfsdfsdaf
          </div>
          <div class="CHAR" style={{ outline: `2px solid blue` }}>
            asdfsadfsadf
          </div>
        </div>
      ))}
      ;
    </div>
  );
  //   }
};

export default Monsters;
