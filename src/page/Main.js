import React from "react";
import Calendar from "../components/Calendar";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Button } from "../elements/index";
import { useHistory } from "react-router";

const Main = (props) => {
  const history = useHistory();

  function PlusBtn() {
    history.push("/addgroup");
    console.log("눌러지냐?");
  }

  return (
    <>
      <Layout>Header</Layout>
      <Calendar />
      <Button is_float onClick={PlusBtn}>
        +
      </Button>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Main;
