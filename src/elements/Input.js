import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
<<<<<<< HEAD
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    is_Submit,
    onSubmit,
  } = props;
=======
  const { label, placeholder, _onChange, type, multiLine, value, is_Submit, onSubmit } = props;
>>>>>>> f8a1bf2892e4031c5397865b46331314beb97e3e

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_Submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
<<<<<<< HEAD
            onKeyPress={(e) => {
              if (e.key === "Enter") {
=======
            onKeyPress={(e)=>{
              if(e.key === "Enter"){
>>>>>>> f8a1bf2892e4031c5397865b46331314beb97e3e
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력하세요",
  type: "text",
  value: "",
  is_Submit: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 14px;
  box-sizing: border-box;
`;
const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 14px;
  box-sizing: border-box;
`;

export default Input;
