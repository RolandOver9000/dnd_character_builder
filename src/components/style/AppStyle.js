import styled from "styled-components";
import OldPaper from "./image/OldPaper.jpg";

export default styled.div`
  & * {
    font-family: "DndFont";
    font-size: xx-large;
  }
  & .App {
    background-image: url(${OldPaper});
  }
`;
