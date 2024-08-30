import { init, exit } from './myPackage';
// tsconfig.json에 "jsAllow": true 를 설정하면 js파일을 불러올 수 있게 됨
// All imports in import declaration are unused.ts(6192)
// (alias) function init(config: any): boolean
// 그냥 js파일을 불러왔을떄는 타입이 다 any로 추론됨
//
// if js 파일을 그대로 남기고 싶을때 but, 타입 안정성을 어느정도 추구하고 싶을떄는
// => js 파일에 @ts-check를 추가해준다!

init({
  debug: true,
  url: '/'
});
exit(1);