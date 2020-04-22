import styled from "styled-components";

export default styled.div`
  & .left-side-container {
    background-color: #333;
    text-align: center;
    width: 70%;
  }
  & .first-row,
  .second-row {
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    display: block;
  }
  & .second-row,
  a {
    color: #fff;
    font-size: 40px;
  }
  & .side-picture {
    display: initial;
  }
  & .register-login {
    color: #fff;
    text-align: center;
    padding: 10px;
    font-size: 50px;
    height: 100%;
    width: 30%;
  }
  & .home-page {
    display: inline-flex;
    width: 100%;
    height: 100%;
  }
  & .dnd-logo {
    max-width: 100%;
    max-height: 100%;
  }
`;
