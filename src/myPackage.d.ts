interface Config {
  url: string;
}

// declare module "package이름" {} 으로 설정
declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}