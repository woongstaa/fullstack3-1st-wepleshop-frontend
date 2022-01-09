## Wepleshop 프로젝트 소개

- [마플](https://marpple.shop/kr/) 클론 프로젝트
- 짧은 프로젝트 기간으로 메인 페이지, 상품 상세 페이지, 회원가입 및 로그인 부분 클론코딩
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 개발 인원 및 기간

- 개발기간 : 2021/12/27 ~ 2022/1/7
- 개발 인원 : 이진웅, 최종민, 장종현, 박효상, 김영욱
- [프론트 github 링크](https://github.com/wecode-bootcamp-korea/fullstack3-1st-wepleshop-frontend)
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/fullstack3-1st-wepleshop-backend)

### 프로젝트 선정이유

- 이 사이트는,

### 데모 영상(이미지 클릭)

<img width="1440" alt="스크린샷 2022-01-09 오후 3 10 41" src="https://user-images.githubusercontent.com/92710433/148671374-b0bd46c7-5d63-497f-bf05-b446d03c026a.png">


<br>

## 적용 기술 및 구현 기능

### 적용 기술

> - Front-End : React.js, sass
> - Back-End : Node.js, Express, Prisma, nodemon, JWT, Bcrypt, My SQL, CORS
> - Common : RESTful API
> - Community Tools : Slack, Zoom, Notion

### 구현 기능

#### 공통

- 회원가입 / 로그인
  - 아이디 패스워드 유효성 검증 기능
  - 로그인시 백엔드 API를 이용해 토큰 발행

- Top / Footer / Nav 
  -  각 부분 컴포넌트화하여 재사용 가능하도록 구현

#### 메인 페이지

- 상품 리스트 API 호출하여 UI 구현
  - 상품 좋아요 기능
  - 재고 10개 미만일 때 재고 고지 및 품절시 품절 고지
  - 상품 필터링기능

- Carousel UI 구현 
  - 외부 라이브러리 없이 자체 구현
  - 오른쪽 버튼, 왼쪽 버튼 상관없이 제대로 작동
  - 일정 시간 초과시 자동 애니메이션 기능 (구현 예정) 

#### 상세 페이지
- 제품 사이즈, 색상, 개수 선택
- 상세 이미지 슬라이드 구현

## Reference

- 이 프로젝트는 [마플](https://marpple.shop/kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
