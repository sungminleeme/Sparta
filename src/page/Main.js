import React from "react";
import Calendar from "../components/Calendar";
import Layout from "../components/Layout";
import { Button } from "../elements/index";
import { useHistory } from "react-router";

const Main = (props) => {
  const history = useHistory();

  const plusBtn = () => {
    history.push("/addgroup");
  };

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

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

export default Main;
