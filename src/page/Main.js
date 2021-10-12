import React from "react";
import Calendar from "../components/Calendar";
import styled from "styled-components";
import Layout from "../components/Layout";

const Main = () => {
  return (
    <>
      <Layout>Header</Layout>
      <Calendar />
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
