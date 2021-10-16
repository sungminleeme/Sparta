import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
    postion,
  } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    postion: postion,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  postion: false,
  width: "100%",
  padding: "12px 0px",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #78c2ad;
  color: #fff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.postion ? `position: ${props.position};` : "")}
`;

const FloatButton = styled.button`
  width: 70px;
  height: 70px;
  background-color: #78C2AD;
  color: #fff;
  padding: 0px;
  box-size: border-box;
  font-size: 55px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 46px;
  text-align: center;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export default Button;
