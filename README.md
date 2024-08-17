# 🧀 우아한 치즈케잌 알바생을 위한 급여 및 업무 관리 플랫폼

<img src="https://github.com/user-attachments/assets/275423fc-e1e2-4fba-973b-3f00f1a552cf" >

<h3 align="center">  
 배포사이트: https://woowahan-siblings.web.app
</h3>

<h3 align="center">  
 Test ID: woochee &nbsp; | &nbsp; Test PW: woochee123
</h3>

<br/>
<br/>

## 👨‍👨‍👦‍👦 팀원소개

|                                          이서윤                                           |                                           김대영                                           |                                           김동영                                           |                                           손성오                                           |                                                        권혜지                                                        |
| :---------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/89791868?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/106634493?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/147500032?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/131119152?v=4" width="150" height="150"> | <img src="https://github.com/user-attachments/assets/ff14c4e6-65de-43ec-89a1-26e0192b4151" width="150" height="150"> |
|           <div align="center">[@seoyoonyi](https://github.com/seoyoonyi)</div>            |         <div align="center">[@dev-meryoung](https://github.com/dev-meryoung)</div>         |             <div align="center">[@love1ace](https://github.com/love1ace)</div>             |           <div align="center">[@Sonseongoh](https://github.com/Sonseongoh)</div>           |                           <div align="center">[@hyeppyy](https://github.com/hyeppyy)</div>                           |
|                <div align="center">근무정정 페이지 개발<br>UI 디자인</div>                |                  <div align="center">로그인 페이지 개발<br>API 개발</div>                  |         <div align="center">일정 추가, 삭제 기능 개발<br>프로젝트 기초 세팅</div>          |            <div align="center">프로필 페이지 개발<br>급여확인 페이지 개발</div>            |                            <div align="center">홈페이지 개발<br>일정표 페이지 개발</div>                             |

&nbsp;

## 🔧 설치 및 실행

### 설치

```
npm install
```

### 서버 실행

```
npm run server
```

### 클라이언트 실행

```
npm run dev
```

Test ID: woochee
<br/>
Test PW: woochee123

&nbsp;

## 🧀 프로젝트 소개

### 우아한 치즈케이크 카페 알바생들의 급여 및 스케줄 관리 서비스, 우아한 치즈케이크

### ✅ 나의 근무 스케줄을 한눈에 확인하고 싶다면?

> 캘린더에서 사장님이 등록해둔 근무 스케줄을 확인할 수 있습니다.

### ✅ 근무 내용을 자유롭게 기록하고 관리하고 싶다면?

> 개인용 캘런더를 통해 나만의 일정표를 만들어 관리할 수 있습니다.

### ✅ 급여 누락 사항을 확인하고 즉시 정정을 요청하고 싶다면?

> 개인근무 일정표와 공식 근무 스케줄 예상 급여액을 확인하고, 차이가 있을 경우 정정 신청을 할 수 있습니다.

&nbsp;

## ✨ 기능 소개

### 로그인

-   서비스 접속 초기 화면으로 로그인 페이지가 나타납니다.
-   값이 잘못되었거나 빈칸일 때: 입력창 아래에 ‘아이디와 비밀번호를 확인해 주세요.’라는 에러 메시지를 출력합니다.
-   값이 올바를 때: 값이 존재할 경우 로그인 버튼이 활성화되고, 로그인 버튼 클릭 시 홈페이지로 이동합니다.

| 로그인                                                                                                          |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/53f64f54-c95e-431c-b06f-0cc743080f03"></img> |

### 로그아웃

-   프로필 페이지 하단 로그아웃 버튼을 클릭하면 로그인 페이지로 이동합니다.

| 로그아웃                                                                                                        |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/16cc3d6b-25c5-414c-8951-5c50bcbda101"></img> |

### 공식 근무 스케줄

-   근무 요약 카드를 통해 이번 달 근무 시간과 예상 급여액을 확인할 수 있습니다.
-   공식 근무 스케줄 캘린더를 통해 월 별 스케줄을 확인할 수 있습니다.
-   공식 근무 스케줄의 좌, 우 버튼을 누르면 오늘 날짜 기준 달의 이전 달, 다음 달이 표시됩니다.
-   개인근무 일정표와 다르게 공식 근무 스케줄은 읽기 전용으로, 스케줄을 수정할 수 없습니다.

| 공식 근무 스케줄                                                                                                |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/4c39b9e0-32e8-44a1-a35e-0bb615552b53"></img> |

### 개인근무 일정표

-   개인근무 일정표는 공식 스케줄과 다른, 개인근무 기록용 캘린더입니다.
-   초기 진입 시 일정이 없는 상태이며, 일정이 없는 날짜를 클릭하여 일정을 등록할 수 있습니다.
-   개인근무 일정표를 통해 월 별 스케줄을 확인할 수 있습니다.
-   개인근무 일정표의 좌, 우 버튼을 누르면 오늘 날짜 기준 달의 이전 달, 다음 달이 표시됩니다.

| 개인근무 일정표                                                                                                 |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/4383587d-6b41-4a76-be9a-900ef6638a4f"></img> |

### 개인근무 일정 상세페이지

| 조회                                                                                                            | 추가                                                                                                            | 수정                                                                                                            | 삭제                                                                                                            |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/c658b164-f62b-421f-bdd2-1afae47e8020"></img> | <img width="300px" src="https://github.com/user-attachments/assets/66f81824-a2f7-4955-9a1b-014b30d06b3d"></img> | <img width="300px" src="https://github.com/user-attachments/assets/0e63ffdf-911b-4272-8937-1621851b0ab0"></img> | <img width="300px" src="https://github.com/user-attachments/assets/7187eb33-e40c-4e22-af88-538ae452d2bb"></img> |

#### [조회]

-   개인근무 일정표에서 특정 날짜를 클릭하여 상세 페이지로 이동합니다.
-   개인근무 일정표에서 클릭한 날짜(년/월/일/요일)를 확인할 수 있습니다.
-   일정 목록에서 일정종류(오픈,미들,마감), 근무지점, 근무시간을 확인할 수 있습니다.
-   하루에 일할 수 있는 횟수가 최대 3개(오픈, 미들, 마감)이기 때문에, 일정 목록의 최대 갯수는 3개로 제한합니다.

#### [추가]

-   개인근무 일정 상세페이지에서 일정 추가 버튼을 클릭하면 일정 추가 모달 창이 열립니다.
-   근무일, 시급, 휴게시간은 고정 값이라 입력할 수 없고, 근무 시간 및 메모는 입력할 수 있습니다. 근무 시간 및 메모는 입력 필수 값으로, 빈칸 상태에서 저장 버튼을 클릭 시 해당 항목이 focusing 되고 값을 업데이트할 수 없습니다.
-   빈칸 없이 값을 변경한 후, 저장을 클릭하면 개인근무 일정 상세페이지와 개인근무 일정표에서의 값이 업데이트되고 모달창이 닫힙니다.
-   추가를 취소하고 싶으면 취소 버튼을 클릭하여 개인근무 일정 상세페이지로 돌아갑니다.

#### [수정]

-   개인근무 일정 상세페이지에서 근무 시간 및 메모를 수정하고 싶은 목록을 클릭하면 일정 수정 모달 창이 열립니다.
-   수정 버튼을 클릭 시 일정 수정 모달로 바뀌고 근무시간 및 메모 수정 가능 상태로 변경됩니다. 근무 시간 및 메모는 입력 필수 값으로, 빈칸 상태에서 저장 버튼을 클릭 시 해당 항목이 focusing 되고 값을 업데이트할 수 없습니다.
-   빈칸 없이 값을 변경한 후, 저장 버튼을 누르면 모달이 닫히고 개인근무 일정 상세페이지로 이동됩니다.

#### [삭제]

-   일정 조회 모달에서 삭제하려는 일정을 클릭한 후 삭제 버튼을 클릭하면 개인근무 일정 상세페이지 및 개인근무 일정표에서 해당 일정이 삭제됩니다.

### 급여확인

-   개인근무 일정표에 따른 예상 급여액과 근무시간, 공식 근무 스케줄에 따른 예상 급여액과 근무시간을 확인할 수 있습니다.
-   상단 화살표 버튼을 통해 원하는 연도, 월의 예상 급여액 및 급여 내역을 확인할 수 있습니다.
-   급여내역은 최대 8개가 보여지며 더보기 버튼 클릭 시 추가로 5개씩 보여집니다.
-   급여내역에서 날짜(월/일), 근무지점, 근무타임, 휴게시간, 급여액을 확인할 수 있습니다.

| 급여확인                                                                                                        |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/30c71404-bc64-4c63-beb5-30aa1476e11f"></img> |

### 급여 상세 내역

-   급여내역에서 상세 조회하려는 내역을 클릭하여 급여 상세 내역 페이지로 이동합니다.
-   급여 상세 내역에서 근무지점, 급여액, 근무일(년/월/일), 근무 시간, 휴게 시간, 시급 정보를 확인할 수 있습니다.

| 급여 상세 내역                                                                                                  |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/c1bf638c-a40e-4048-aa38-259ac181e390"></img> |

### 정정신청 내역

-   급여 페이지에서 정정신청 탭을 클릭하여 진입합니다.

*   개인근무 일정표와 공식 근무 스케줄 예상 급여액에 차이가 있을 경우 정정 신청을 할 수 있습니다.
*   정정신청 내역은 최대 10개가 보여지며 더보기 버튼 클릭 시 추가로 5개씩 보여집니다.
*   각 내역에서 요청날짜, 근무정정 유형, 승인상태를 확인할 수 있으며, 필터링(근무정정 유형, 승인상태)하여 원하는 정보만을 확인할 수 있습니다.
    -   요청날짜:년-월-일 형식
    -   근무정정 유형: 대타근무, 특별근무, 휴가, 조퇴
    -   승인상태: 대기, 승인, 반려

| 정정신청 내역                                                                                                   |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/5e62fe7d-59be-426f-897e-5e6c1961bed3"></img> |

### 정정신청 상세 내역

-   정정신청 내역에서 상세 조회하려는 내역을 클릭하여 정정신청 상세 내역 페이지로 이동합니다.
-   정정신청 상세 내역에서 근무일(년/월/일), 근무 시간, 사유내용, 설명 정보를 확인할 수 있습니다.

| 정정신청 상세 내역                                                                                              |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/ae4abaa0-8960-40a0-b77f-1d4eb98b38f1"></img> |

### 근무 정정신청

-   정정신청 탭에서 근무정정 신청 버튼 클릭 시 정정신청 페이지에 진입합니다.
-   근무일(기본값: 오늘), 근무 시간(필수), 사유내용(필수), 메모(선택)를 입력하고 신청 버튼을 클릭합니다.
    -   필수값인 근무 시간, 사유내용 값이 비어있으면 해당 항목이 focusing 되고 정정 신청할 수 없습니다.
    -   빈칸 없이 값이 작성된 경우, 정정신청 내역 페이지로 이동되고 내역에서 신청내역을 확인할 수 있습니다.
-   취소 버튼을 누르면 급여 페이지로 돌아갑니다.

| 정정신청                                                                                                        |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/aaf7aa30-190f-4d44-b495-3522720973d2"></img> |

### 프로필

-   내 프로필 정보를 확인할 수 있습니다.
    -   이름
    -   근무지점
    -   근무스케줄: 요일(근무타입)

| 프로필                                                                                                          |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/404b7d96-ef14-41a1-9af4-a2f234f6dd57"></img> |

&nbsp;

## 🗓️ 프로젝트 기간

| 종류                  | 기간              |
| --------------------- | ----------------- |
| 기획                  | 24.7.22 ~ 24.7.24 |
| 디자인                | 24.7.25 ~ 24.8.4  |
| 퍼블리싱 및 기능 구현 | 24.7.29 ~ 24.8.8  |

&nbsp;

## 📚 기술스택

| 기술                                                                                                                     | 도입 이유                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)            | 컴포넌트 기반 아키텍처로 재사용성과 유지보수성이 높고 가상 DOM을 사용하여 효율적인 렌더링 제공 가능 |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) | 정적 타입 검사로 코드 안정성을 향상시키고 개발 시 오류를 조기에 발견 가능                           |
| ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)                | 애플리케이션의 상태를 하나의 스토어에서 관리하여 데이터 흐름 파악 용이                              |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)                  | JavaScript를 서버 사이드에서 실행 가능하고 비동기 I/O 처리로 높은 성능 제공                         |
| ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)                   | 빠른 개발 서버 시작 및 빌드 시간 제공 가능                                                          |
| ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)             | 서버리스 아키텍처로 백엔드 개발 시간 단축 가능                                                      |
| ![Emotion](https://img.shields.io/badge/emotion-%23FF69B4.svg?style=for-the-badge&logo=emotion&logoColor=white)          | CSS-in-JS 라이브러리로 컴포넌트 기반 스타일링 가능, 동적 스타일링 용이                              |

&nbsp;

## ERD 구조

<img width="600" alt="스크린샷 2024-08-07 오후 6 30 14" src="https://github.com/user-attachments/assets/ea4b9878-ee7c-4ea2-a7fe-72eb782943be">

&nbsp;

## 🙆‍♂️ 협업 방식

### 💬 GitHub를 사용한 Issue와 PR 관리

-   PR 생성 시 나 제외 모든 팀원에게 리뷰를 요청합니다. PR 승인은 최소 2명 이상이 필요합니다.
-   마지막 승인자가 머지 및 브랜치 삭제 버튼을 누르도록 하여 불필요한 브랜치가 저장소에 남지 않도록 관리합니다.
-   코드 리뷰 중 발생한 피드백은 PR의 코멘트로 남기며, 필요한 수정 사항을 PR 작성자가 반영합니다.

![pr](https://github.com/user-attachments/assets/b2f840d1-8873-48ca-ae9e-d3e4cb2fc70c)

![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/Dev-FE-1/woowahan-siblings?color=green)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-closed/Dev-FE-1/woowahan-siblings?color=blue)
![GitHub pull requests closed](https://img.shields.io/github/issues-pr/Dev-FE-1/woowahan-siblings?color=green)
![GitHub pull requests closed](https://img.shields.io/github/issues-pr-closed/Dev-FE-1/woowahan-siblings?color=blue)

&nbsp;

### 📝 브랜치 전략

-   Git-Flow를 기반으로 작업을 진행했습니다.
-   develop 브랜치에서의 검증 후, 검증이 완료되면 최종적으로 main 브랜치로 이동합니다. 배포 전에 충분한 테스트를 통해 안정성을 보장할 수 있고 배포 후 발생할 수 있는 오류를 최소화할 수 있습니다.
-   기능 개발은 feature 브랜치에서 진행하고, 버그 수정은 hotfix 브랜치에서 진행합니다. 이를 통해 여러 개발자가 동시에 작업하더라도 충돌을 줄이고 협업 효율성을 높일 수 있습니다.

<img width="822" alt="스크린샷 2024-08-07 오후 4 29 45" src="https://github.com/user-attachments/assets/1cbcb156-7a6b-4195-8ab8-e2234bf5bd87">

&nbsp;

### 👥 협업 효율화

GitHub 리포지토리와 Slack을 연동하여 작업 상황을 실시간으로 공유하고, 즉각적인 피드백을 주고받을 수 있었습니다.

<img width="470" alt="스크린샷 2024-08-07 오후 3 42 03" src="https://github.com/user-attachments/assets/c3bd921a-660e-4559-b87d-2b6bb2945d57">

&nbsp;

### 📚 코딩 컨벤션 정의

프로젝트의 일관성을 유지하고 협업을 효율적으로 진행하기 위하여 여러 코딩 컨벤션을 도입했습니다.

[깃허브 위키에서 자세한 컨벤션 확인하기](https://github.com/Dev-FE-1/woowahan-siblings/wiki/Git-Rule)
