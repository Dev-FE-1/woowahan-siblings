# 👨‍👨‍👦‍👦 팀원소개

| <div style="text-align: center;">이서윤</div>                                                                        |                                    <div style="text-align: center;">김대영</div>                                     |                                                                        <div style="text-align: center;">김동영</div> |                                                                        <div style="text-align: center;">손성오</div> |                                                                        <div style="text-align: center;">권혜지</div> |
| :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/c6368cb6-e896-4566-84ea-37085702b7bb" width="100" height="100"> | <img src="https://github.com/user-attachments/assets/ec1b6dbd-752a-41ea-9046-e17976b620fe" width="100" height="100"> | <img src="https://github.com/user-attachments/assets/33917380-d94e-4bdc-ace3-e025b1408986" width="100" height="100"> | <img src="https://github.com/user-attachments/assets/3cb867b8-5cda-4851-87cd-20f2b82d8c44" width="100" height="100"> | <img src="https://github.com/user-attachments/assets/ff14c4e6-65de-43ec-89a1-26e0192b4151" width="100" height="100"> |
| <div style="text-align: center;">[@seoyoonyi](https://github.com/seoyoonyi)</div>                                    |               <div style="text-align: center;">[@dev-meryoung](https://github.com/dev-meryoung)</div>                |                                      <div style="text-align: center;">[@love1ace](https://github.com/love1ace)</div> |                                  <div style="text-align: center;">[@Sonseongoh](https://github.com/Sonseongoh)</div> |                                        <div style="text-align: center;">[@hyeppyy](https://github.com/hyeppyy)</div> |
| <div style="text-align: center;">근무정정 페이지 개발<br/>UI 디자인</div>                                            |                        <div style="text-align: center;">로그인 페이지 개발<br>API 개발</div>                         |                               <div style="text-align: center;">일정 추가, 삭제 기능 개발<br>프로젝트 기초 세팅</div> |                                   <div style="text-align: center;">프로필 페이지 개발<br/>급여확인 페이지 개발</div> |                                          <div style="text-align: center;"> 홈페이지 개발<br>일정표 페이지 개발</div> |

&nbsp;

# 🔧 설치 및 실행

## 설치

```
npm install
```

## 서버 실행

```
npm run server
```

## 클라이언트 실행

```
npm run dev
```

Test ID: woochee
<br/>
Test PW: woochee123

&nbsp;

# 🧀 프로젝트 소개

<span style="font-size: 20px; font-weight:600;">✅ 나의 근무 스케줄을 한눈에 확인하고 싶다면?</span>

> 캘린더에서 사장님이 등록해둔 근무 스케줄을 확인할 수 있습니다.

<span style="font-size: 20px; font-weight:600;">✅ 근무 내용을 자유롭게 기록하고 관리하고 싶다면?</span>

> 개인용 캘런더를 통해 나만의 일정표를 만들어 관리할 수 있습니다.

<span style="font-size: 20px; font-weight:600;">✅ 급여 누락 사항을 확인하고 즉시 정정을 요청하고 싶다면?</span>

> 개인근무 일정표와 공식 근무 스케줄 예상 급여액을 확인하고, 차이가 있을 경우 정정 신청을 할 수 있습니다.

&nbsp;

# ✨ 기능 소개

## 로그인

-   서비스 접속 초기화면으로 로그인페이지가 나타납니다.
-   값이 잘못되었거나 빈칸일때: 입력창 아래에 ‘아이디와 비밀번호를 확인해 주세요.’ 라는 에러메시지를 출력합니다.
-   값이 올바를 때: 값이 존재할 경우 로그인 버튼이 활성화되고, 로그인 버튼 클릭 시 홈페이지로 이동합니다.

| 로그인                           |
| -------------------------------- |
| <img width="300px" src=""></img> |

## 로그아웃

-   프로필 페이지 하단 로그아웃 버튼을 클릭하면 로그인 페이지로 이동합니다.

| 로그아웃                         |
| -------------------------------- |
| <img width="300px" src=""></img> |

## 공식 근무 스케줄

-   근무요약카드를 통해 이번달 근무 시간과 예상 급여액을 확인할 수 있습니다.
-   공식 근무 스케줄 캘린더를 통해 월 별 스케줄을 확인할 수 있습니다.
-   공식 근무 스케줄의 좌,우 버튼을 누르면 오늘날짜 기준 달의 이전달, 다음달이 표시됩니다.
-   개인근무 일정표와 다르게 공식 근무 스케줄은 읽기 전용으로, 스케줄을 수정할 수 없습니다.

| 공식 근무 스케줄                 |
| -------------------------------- |
| <img width="300px" src=""></img> |

## 개인근무 일정표

-   개인근무 일정표는 공식 스케줄과 다른, 개인근무 기록용 캘린더 입니다.
-   초기진입 시 일정이 없는 상태이며, 일정이 없는 날짜를 클릭하여 일정을 등록할 수 있습니다.
-   개인근무 일정표를 통해 월 별 스케줄을 확인할 수 있습니다.
-   개인근무 일정표의 좌,우 버튼을 누르면 오늘날짜 기준 달의 이전달, 다음달이 표시됩니다.

| 개인근무 일정표                                                                                                 |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/1fe1dea0-b619-4af5-b1d3-8b24c0d517bc"></img> |

## 개인근무 일정 상세페이지

-   개인근무 일정표에서 특정 날짜를 클릭하여 상세 페이지로 이동합니다.
-   개인근무 일정표에서 클릭한 날짜(년/월/일/요일)를 확인할 수 있습니다.
-   일정 목록에서 일정종류(오픈,미들,마감), 근무지점, 근무시간을 확인할 수 있습니다.
-   하루에 일할 수 있는 횟수가 최대 3개(오픈, 미들, 마감)이기 때문에, 일정 목록의 최대 갯수는 3개로 제한합니다.

| 조회                                                                                                            | 추가                             | 수정                             | 삭제                             |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/86682331-206d-424a-9780-f1ff749e5a54"></img> | <img width="300px" src=""></img> | <img width="300px" src=""></img> | <img width="300px" src=""></img> |

### [추가]

-   개인근무 일정 상세페이지에서 일정 추가 버튼을 클릭하면 일정 추가 모달 창이 열립니다.
-   근무일, 시급, 휴게시간은 고정값이라 입력할 수 없고, 근무 시간 및 메모는 입력할 수 있습니다. 근무 시간 및 메모는 입력 필수 값으로, 빈 칸 상태에서 저장 버튼을 클릭 시 해당 항목이 focusing 되고 값을 업데이트 할 수 없습니다.
-   빈 칸 없이 값을 변경한 후, 저장을 클릭하면 개인근무 일정 상세페이지와 개인근무 일정표에서의 값이 업데이트 되고 모달창이 닫힙니다.
-   추가를 취소하고 싶으면 취소 버튼을 클릭하여 개인근무 일정 상세페이지로 돌아갑니다.

### [수정]

-   개인근무 일정 상세페이지에서 근무 시간 및 메모를 수정하고 싶은 목록을 클릭하면 일정 수정 모달 창이 열립니다.
-   수정버튼을 클릭 시 일정 수정 모달로 바뀌고 근무시간 및 메모 수정 가능 상태로 변경됩니다. 근무 시간 및 메모는 입력 필수 값으로, 빈 칸 상태에서 저장 버튼을 클릭 시 해당 항목이 focusing 되고 값을 업데이트 할 수 없습니다.
-   빈 칸 없이 값을 변경한 후, 저장버튼을 누르면 모달이 닫히고 개인근무 일정 상세페이지로 이동됩니다.

### [삭제]

-   일정 조회 모달에서 삭제하려는 일정을 클릭한 후 삭제버튼을 클릭하면 개인근무 일정 상세페이지 및 개인근무 일정표에서 해당 일정이 삭제됩니다.

## 급여확인

-   개인근무 일정표에 따른 예상 급여액과 근무시간, 공식 근무 스케줄에 따른 예상 급여액과 근무시간을 확인할 수 있습니다.
-   상단 화살표 버튼을 통해 원하는 연도, 월의 예상 급여액 및 급여 내역을 확인할 수 있습니다.
-   급여내역은 최대 8개가 보여지며 더보기 버튼 클릭 시 추가로 5개씩 보여집니다.
-   급여내역에서 날짜(월/일), 근무지점, 근무타임, 휴게시간, 급여액을 확인할 수 있습니다.

| 급여확인                         |
| -------------------------------- |
| <img width="300px" src=""></img> |

## 급여 상세 내역

-   급여내역에서 상세 조회하려는 내역을 클릭하여 급여 상세 내역 페이지로 이동합니다.
-   급여 상세 내역에서 근무지점, 급여액, 근무일(년/월/일), 근무 시간, 휴게 시간, 시급 정보를 확인할 수 있습니다.

| 급여 상세 내역                   |
| -------------------------------- |
| <img width="300px" src=""></img> |

## 정정신청

-   정정신청 탭에서 근무정정 신청 버튼 클릭 시 정정신청 페이지에 진입합니다.
-   근무일(기본값: 오늘), 근무 시간(필수), 사유내용(필수), 메모(선택)를 입력하고 신청버튼을 클릭합니다.
    -   필수값인 근무 시간, 사유내용 값이 비어있으면 해당 항목이 focusing 되고 정정 신청 할 수 없습니다.
    -   빈 칸 없이 값이 작성된 경우, 정정신청 내역 페이지로 이동되고 내역에서 신청내역을 확인할 수 있습니다.
-   취소 버튼을 누르면 급여 페이지로 돌아갑니다.

| 정정신청                         |
| -------------------------------- |
| <img width="300px" src=""></img> |

## 프로필

-   내 프로필 정보를 확인할 수 있습니다.
    -   이름
    -   근무지점
    -   근무스케줄: 요일(근무타입)

| 프로필                                                                                                          |
| --------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="https://github.com/user-attachments/assets/41f292c1-0304-4119-b877-6406af6c0513"></img> |

&nbsp;

# 🗓️ 프로젝트 기간

| 종류                  | 기간              |
| --------------------- | ----------------- |
| 기획                  | 24.7.22 ~ 24.7.24 |
| 디자인                | 24.7.25 ~ 24.8.4  |
| 퍼블리싱 및 기능 구현 | 24.7.29 ~ 24.8.8  |

&nbsp;

# 📚 기술스택

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

# ERD 구조

<img width="600" alt="스크린샷 2024-08-07 오후 6 30 14" src="https://github.com/user-attachments/assets/ea4b9878-ee7c-4ea2-a7fe-72eb782943be">

&nbsp;

# 🙆‍♂️ 협업 방식

<span style="font-size: 20px; font-weight:600;">GitHub를 사용한 Issue와 PR 관리
</span>

-   PR 생성 시 나 제외 모든 팀원에게 리뷰를 요청합니다. PR 승인은 최소 2명 이상이 필요합니다.
-   마지막 승인자가 머지 및 브랜치 삭제 버튼을 누르도록 하여 불필요한 브랜치가 저장소에 남지 않도록 관리합니다.
-   코드 리뷰 중 발생한 피드백은 PR의 코멘트로 남기며, 필요한 수정 사항을 PR 작성자가 반영합니다.

![pr](https://github.com/user-attachments/assets/b2f840d1-8873-48ca-ae9e-d3e4cb2fc70c)

![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/Dev-FE-1/woowahan-siblings?color=green)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-closed/Dev-FE-1/woowahan-siblings?color=blue)
![GitHub pull requests closed](https://img.shields.io/github/issues-pr/Dev-FE-1/woowahan-siblings?color=green)
![GitHub pull requests closed](https://img.shields.io/github/issues-pr-closed/Dev-FE-1/woowahan-siblings?color=blue)

&nbsp;

<span style="font-size: 20px; font-weight:600;">브랜치 전략</span>

-   Git-Flow를 기반으로 작업을 진행했습니다.
-   develop 브랜치에서의 검증 후, 검증이 완료되면 최종적으로 main 브랜치로 이동합니다. 배포 전에 충분한 테스트를 통해 안정성을 보장할 수 있고 배포 후 발생할 수 있는 오류를 최소화할 수 있습니다.
-   기능 개발은 feature 브랜치에서 진행하고, 버그 수정은 hotfix 브랜치에서 진행합니다. 이를 통해 여러 개발자가 동시에 작업하더라도 충돌을 줄이고 협업 효율성을 높일 수 있습니다.

<img width="822" alt="스크린샷 2024-08-07 오후 4 29 45" src="https://github.com/user-attachments/assets/1cbcb156-7a6b-4195-8ab8-e2234bf5bd87">

&nbsp;

<span style="font-size: 20px; font-weight:600;">협업 효율화</span>

GitHub 리포지토리와 Slack을 연동하여 작업 상황을 실시간으로 공유하고, 즉각적인 피드백을 주고받을 수 있었습니다.

<img width="470" alt="스크린샷 2024-08-07 오후 3 42 03" src="https://github.com/user-attachments/assets/c3bd921a-660e-4559-b87d-2b6bb2945d57">

&nbsp;

<span style="font-size: 20px; font-weight:600;">코딩 컨벤션 정의</span>

프로젝트의 일관성을 유지하고 협업을 효율적으로 진행하기 위하여 여러 코딩 컨벤션을 도입했습니다.

[깃허브 위키에서 자세한 컨벤션 확인하기](https://github.com/Dev-FE-1/woowahan-siblings/wiki/Git-Rule)
