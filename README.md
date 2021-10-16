
# SPARTA Conference log

[시연영상 바로보기](https://www.youtube.com/watch?v=3qWBMpdNZpE)

<img width="453" alt="스크린샷 2021-10-17 오전 1 27 13" src="https://user-images.githubusercontent.com/85213997/137595008-5cb75b9a-b5f6-4328-b61f-f20c92b43d01.png">



## 목차
### 1. [프로젝트 소개](#프로젝트-소개)<br/>
### 2. [팀원소개](#팀원소개)<br/>
### 3. [사용기술](#-tools)<br/>
### 4. [배운 점](#배운-점)<br/>
### 5. [API설계](#API설계)<br/>



## 프로젝트 소개


```
시간관리에 향상을 위한 회의록 서비스
```
### [React x Spring] 스파르타 회의록 ! 🤓 👍<br/>
시간과 회의내용을 날짜별로 확인 할 수 있는 서비스입니다. <br/>
시간관리,스케쥴 관리에 유용하게 쓰일 수 있습니다. <br/>


## 팀원소개

### FRONT END

- 안송현(https://github.com/thdgus90)
- 이성민(https://github.com/sungminleeme)
- 신유빈(https://github.com/sinyubin)

### BACK END

- 강준규(https://github.com/Smallzoo-dev)
- 배나영(https://github.com/NayoungBae)
- 박기남(https://github.com/salmon2)

## 🛠 Tools
- React
- Redux
- styled-components
- Spring
- AWS S3


## 배운 점

- API의 중요성
  
- JWT토큰을 이용한 회원가입, 로그인 유지 구현
- JWT를 쿠키 vs localstorage에 저장하는 방식의 장단점을 배울 수 있었다.
- JWT토큰을 이용하여 매 통신 시마다 헤더에 토큰을 담아 보내 유효성 검증
```
const instance = axios.create({
  //서버주소
  baseURL: "http://3.35.174.4/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `${getCookie("token")}`,
  },
});
```

## API설계
###[전체 API설계](https://capable-thistle-ae7.notion.site/59b197d284c141f784ed4f878ffcc99c?v=0ba0d0b36e8b4ef58f066737005c051d)
## API설계

