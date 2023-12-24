# 타입스크립트 무작정 따라하기

## `.ts` 확장자 실행
```sh
npm i -g ts-node
ts-node hello.ts
```

## typescript 관련 라이브러리 설치
```sh
npm i -g typescript @types/node  # 그 외 필요하겠다 싶은 라이브러리 설치
```
## 번외: Javascript 프로젝트 생성하는 방법
1. 프로젝트 폴더를 하나 생성한다
2. `npm init` 를 누르고, 프로젝트 정보를 입력한다.
    - 연습용으로 쓸 경우, 그냥 엔터만 계속 눌러도 무방하다
    - 여기까지 하면 `package.json`이 만들어질 것이다
3. `package.json` 의 일부 내용을 아래 내용으로 복사-붙여넣기해서 갈아 끼운다
   - *지금 당장은* 이 항목들이 무엇을 의미하는지 몰라도 상관은 없다.
```json
...
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```
4. 프로젝트 루트에 `index.js` 에 코드를 작성한다
5. `npm start` 명령으로 실행한다

### Typescript 프로젝트를 생성하는 방법
1. Javscript 프로젝트의 3번까지 수행한다
2. `package.json`의 `scripts` 주변을 다음과 같이 수정한다

```json
...
  "main": "built/index.js",
  "scripts": {
    "start": "node built/index.js",
    "build": "tsc --build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```

3. 다음과 같은 내용을 `tsconfig.json` 이라는 이름으로 저장한다
   
```json
{
  "compilerOptions": {
    "outDir": "./built",  // 빌드된 JS 파일이 저장될 디렉토리
    "rootDir": "./src",   // TypeScript 소스 코드가 있는 디렉토리
    "strict": true,
    "esModuleInterop": true
    // 기타 필요한 TypeScript 컴파일러 옵션을 여기에 추가
  },
  "include": ["src/**/*"]  // 빌드할 소스 파일 위치
}
```

4. `src/index.ts` 에서 코드를 작성한다
5. `npm build` 해서 컴파일한 뒤, `npm start`로 실행한다