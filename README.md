# typescript-recap

## ts파일에서 js모듈과 파일 사용 방법
### js모듈 사용 방법
ts파일에서 js패키지를 사용하기 위해서는 typescript에서 참조해야하는 d.ts 파일을 추가하면 된다.

### js파일 사용 방법
ts파일에서 js파일을 사용하기 위해서는 tsconfig에서 ```"AllowJs": true```로 설정 한다.
그리고 js파일에서 @ts-check 주석을 입력하여 타입을 적용할 수 있게 한다.
```
// js파일 예시
// @ts-check
/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}
```

## simple blockchain
### class Block
- interface
- class implements interface
- static method
- public method initialize

### class Blockchain
- class type
- Encapsulation
- Immutability

## polymorphism
### polymorphism.ts
- Generic type을 이용한 parametric polymorphism(매개변수적 다형성)
- 타입 안정성