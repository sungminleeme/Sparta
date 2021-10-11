import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";

const Signup = () => {
    return (
    <React.Fragment>
        <div style={{padding: "16px"}}>
        
        <Text size="32px" bold>
          회원가입
        </Text>

        <div style={{padding: "16px"}}>
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
          />
        </div>

        <div style={{padding: "16px"}}>
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
          />
        </div>

        <div style={{padding: "16px"}}>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
        </div>

        <div style={{padding: "16px"}}>
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
          />
        </div>

        <Button text="회원가입하기"></Button>
      </div>
    </React.Fragment>
    )
}

Signup.defaultProps = {};

export default Signup;