import styled from "styled-components";
import OldPaper from "./image/OldPaper.jpg";

export default styled.div`
  & * {
    font-family: "DndFont";
    font-size: xx-large;
  }
  & .app {
    background-image: url(${OldPaper});
    width: 100%;
  }
`;
