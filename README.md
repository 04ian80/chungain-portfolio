## 종아인의 포트폴리오

React를 사용하여 만든 포트폴리오입니다.

### 배포 링크

[종아인의 포트폴리오](http://04ian80-chungain.s3-website.ap-northeast-2.amazonaws.com/)

- AWS S3로 배포한 후, GitHub Action으로 배포 자동화를 구축하였습니다.
- 비용 문제로 한달 간 AWS 임시 배포 후 Netlify로 변경할 예정입니다. (~8월 26일)

### 사용스택

- 언어: TypeScript
- JS 라이브러리 : React
- 스타일링: Sass, react-icons

### 구현 사항

- 자기 소개 페이지
- 기술 스택 페이지
- 프로젝트 페이지
- 교육/활동 페이지
- react-router-dom을 사용한 페이지 이동

### 로컬 실행 방법

1. git을 clone합니다.

```bash
git clone https://github.com/04ian80/chungain-portfolio.git
```

2. `chungain-portfolio`폴더로 이동해줍니다.

```bash
cd chungain-portfolio
```

3. package들을 설치해줍니다.

```bash
npm install
```

4. 아래 명령어를 실행하면 localhost:3000포트에서 실행이 됩니다.

```bash
npm start
```
