import { init, exit } from 'myPackage';
// error
// Could not find a declaration file for module 'myPackage'. 
// '/Users/haiin/Documents/projects/typescript-recap/src/myPackage.js' implicitly has an 'any' type.ts(7016)
// js 파일인데 ts파일에서 참조할 타입들이 없어서 생기는 에러. myPackage.d.ts 파일 필요

init({
  url: '/'
})

exit(1)
// (alias) exit(code: number): number
// 위처럼 typescript에서 추적이 가능하게 됨 -> myPackage.d.ts파일로 가능하게 함
// !!! module로 패키지를 가져와서 사용하고 싶은데 js 파일인 경우 적용됨