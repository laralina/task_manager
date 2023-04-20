
# wanted-pre-onboarding-frontend
![자산 1@5x](https://user-images.githubusercontent.com/118322531/233009277-a2b675a6-6378-4302-aca1-272c06e5b7da.png)


원티드 프리온보딩 프론트엔드 선발과제
<br />
**작성자 : 김수현**

```
npm install
npm start
```
---

### 📎 배포 링크
[바로가기 (클릭!)](http://asapsuhyeon.s3-website-ap-northeast-1.amazonaws.com/)


### 📅 개발 기간
2023.4.18~ 2023.4.19

### 🔧 기술 스택
[![My Skills](https://skillicons.dev/icons?i=js,react,styledcomponents,aws&perline=4)](https://skillicons.dev)

## 🌟 구현 사항


#### 1. SignUp
![chrome-capture-2023-3-19](https://user-images.githubusercontent.com/118322531/233036012-5faa0404-fbca-4633-b390-a4d9543fa090.gif)
- [X] 유효성 검사 (이메일 조건: @ 포함 / 비밀번호 조건: 8자 이상)
- [X] 조건 충족 시 Button Disabled 해제 (색상 변경)
- [X] 회원가입 완료 시 Modal 출력
- [X] 확인 Button 클릭 시 /signin으로 이동




#### 2. SignIn
![chrome-capture-2023-3-19 (1)](https://user-images.githubusercontent.com/118322531/233036416-1dc2bb90-f018-445c-b158-13c73dc37ba1.gif)
- [X] 유효성 검사 (이메일 조건: @ 포함 / 비밀번호 조건: 8자 이상)
- [X] 조건 충족 시 Button Disabled 해제 (색상 변경)
- [X] Sign In Button 클릭 시 /todo로 이동



#### 3.Todo
![chrome-capture-2023-3-19 (2)](https://user-images.githubusercontent.com/118322531/233036717-f449459b-0cdd-4190-9b39-10ad0445a01a.gif)
![chrome-capture-2023-3-19 (3)](https://user-images.githubusercontent.com/118322531/233037065-a9adcc4a-5840-4ea4-b508-67c9e28d083f.gif)

- [X] Input에 값 입력 후 Button 클릭 시 새로운 Card 생성
- [X] Checkbox 상태에 따라 API상의 data(isCompleted) boolean 값 변경
- [X] Modify 버튼 클릭 시 수정 모드로 전환
- [X] Cancel 버튼 클릭 시 수정 모드 취소
- [X] Delete 버튼 클릭 시 해당 Card 삭제
```
+ 페이지 및 컴포넌트 간 자연스러운 전환을 위해 css 애니메이션 설정
+ AWS를 통한 사이트 배포 완료
```

## 🔥 개선 필요 사항
- [ ] 통신 실패 시의 Error Handling, 또 사용자가 이를 인지할 수 있도록 UI/UX적으로 추가 구현 필요
- [ ] fetch 구문 더 깔끔하고 효율적으로 사용하는 방법 연구 필요
- [ ] useEffect 대신 async,await 등의 방법을 사용할 수 없을지? 연구 필요



