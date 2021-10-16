import React from "react";
import Calendar from "../components/Calendar";
import Layout from "../components/Layout";
import { Button } from "../elements/index";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const 유저확인 = () => {
    dispatch(userActions.유저확인DB());
  };

  // const plusBtn = () => {
  //   history.push("/addgroup");
  // };

  function PlusBtn() {
    history.push("/conferenceDetail");
  }

  return (
    <>
      <Layout>
        <Button _onClick={() => 유저확인()}></Button>
      </Layout>

      <Grid />
      <Calendar />

      <Button is_float _onClick={PlusBtn}>
        <span style={{padding: "-20px"}}>+</span>
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
