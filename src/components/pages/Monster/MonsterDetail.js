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
        <div class="grid-container">
          <div
            class="Character-Name"
            style={{ outline: `2px dashed black`, padding: `42px` }}
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
          <div class="HP" style={{ outline: `2px dashed blue` }}>
            sadf
          </div>
          <div class="Inventory" style={{ outline: `2px dashed blue` }}>
            asdf
          </div>
          <div class="Traits" style={{ outline: `2px dashed blue` }}>
            sdfsfsdf
          </div>
          <div class="Attacks" style={{ outline: `2px dashed blue` }}>
            safdsdfsdfs
          </div>
          <div class="STR" style={{ outline: `2px dashed blue` }}>
            sfsdfsdfsdaf
          </div>
          <div class="DEX" style={{ outline: `2px dashed blue` }}>
            safsdfsdf
          </div>
          <div class="CONST" style={{ outline: `2px dashed blue` }}>
            sdfsadfsdaf
          </div>
          <div class="Int" style={{ outline: `2px dashed blue` }}>
            sadfsdafsadf
          </div>
          <div class="WIS" style={{ outline: `2px dashed blue` }}>
            asdfsdfsdaf
          </div>
          <div class="CHAR" style={{ outline: `2px dashed blue` }}>
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
