import { createGlobalStyle } from "styled-components";
import DndFont from "./DndFont.TTF";

export default createGlobalStyle`
  @font-face {
      font-family: "DndFont";
      src: url(${DndFont}) format("truetype");
    }
`;
