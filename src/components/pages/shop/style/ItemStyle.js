import styled from "styled-components";
import CardStyle1 from "./image/cardstyle1.jpg";

export default styled.div`
  & * .card-content {
    width: 100%;
    height: 100%;
    width: 250px;
    height: 250px;
    margin: 15px 14px;
    justify-content: center;
    display: flex;
    align-items: center;
    background-image: url(${CardStyle1});
    background-size: contain;
  }
  & .card-content:hover {
    opacity: 1;

    transform: scale(1.05, 1.05);
  }
  & .ant-card-body {
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    justify-content: center;
    display: flex;
    align-items: center;
    display: inline-grid;
    text-align: center;
  }
  & .card-title {
    display: block;
  }
  & .card-value {
    display: block;
  }

  & p {
    font-weight: 1000;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  & .ant-card-bordered {
    border: 2px solid black;
  }
`;
