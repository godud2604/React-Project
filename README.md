# React-Project
React Mobile App Project <br>
=> [드림어반스퀘어](https://dream-urban.netlify.app/)
( 모바일 기기에 최적화되었습니다. )

---

## 사용 스택
React, Redux-Thunk, styled-components

---

## 기능
- 하단 네비게이션 바를 이용하여 router를 이동할 수 있습니다.
- 디자인 컴포넌트를 체계적으로 설계하여, 공통적인 컴포넌트 위주로 설계되어 유지보수가 편리합니다.
- Redux를 이용하여 유저의 로그인 상태를 전역적으로 관리합니다.
- github actions를 이용하여 push 할 때마다 자동으로 배포되도록 설정하였습니다.

---

## 앞으로
- TypeScript 적용하기
- light house 사용하여 웹 사이트의 품질 측정 후, 성능 개선하기
- IntersectionObserver API 를 사용하여 메인 스레드에 영향을 주지 않으면서 비동기적으로 요소 확인. getBoundingClientRect()를 호출 할 필요 없어 리플로우 현상 방지
- 이미지를 최적화 시켜서 렌더링 속도 향상 시키기
- 이미지 지연 로딩을 적용시커 Scroll 시 화면에 보이는 이미지만 로드
- React Query를 사용하여 server state 전역적으로 관리
