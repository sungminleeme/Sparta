import React from "react";
import Calendar from "../components/Calendar";
import Layout from "../components/Layout";
import { Button } from "../elements/index";
import { useHistory } from "react-router";
import styled from "styled-components";

const Main = (props) => {
  const history = useHistory();

  // const plusBtn = () => {
  //   history.push("/addgroup");
  // };

  function PlusBtn() {
    history.push("/conferenceDetail");
    console.log("눌러지냐?");
  }

  return (
    <>
      
      <Layout></Layout>
      <Grid />
      <Calendar />

      <Button is_float _onClick={PlusBtn}>
        +
      </Button>
    </>
  );
};

const Grid = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Main;
