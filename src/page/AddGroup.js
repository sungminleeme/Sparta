import React from "react";

import { Grid, Button, Text } from "../elements/index";

const AddGroup = (props) => {
  return (
    <Grid>
      <Grid margin="50px 30px" padding="50px 300px">
        {/* input1 */}
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              그룹명 이름
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="그룹명을 입력하시오"
          />
        </div>

        {/* input2 */}
        <div class="input-group mb-3">
          <div class="input-group-prepend" style={{ width: "100px" }}>
            <label class="input-group-text" for="inputGroupSelect01">
              그룹원 선택
            </label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">사람1</option>
            <option value="2">사람2</option>
          </select>
        </div>

        {/* input3 */}
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">그룹 설명</span>
          </div>
          <textarea
            class="form-control"
            aria-label="With textarea"
            placeholder="프로젝트 위한 그룸"
          ></textarea>
        </div>
      </Grid>

      <Grid padding="0px 300px" is_flex>
        <Button width="200px" margin="100px">
          SUBMIT
        </Button>
        <Button width="200px">CANCEL</Button>
      </Grid>
    </Grid>
  );
};

export default AddGroup;
