interface MyStorage<T> {
  [key: string]: T
}

class LocalStorage<T> {
  private storage: MyStorage<T>
  constructor() {
    this.storage = {}
  }
  get(key: string): T {
    return this.storage[key];
  }
  set(key: string, value: T) {
    if (this.storage[key] === undefined) {
      this.storage[key] = value;
    }
  }
  delete(key: string) {
    if (this.storage[key] !== undefined) {
      delete this.storage[key];
    }
  }
  clear() {
    this.storage = {};
  }
}

const stringLocalStorage = new LocalStorage<string>();
stringLocalStorage.set('name', 'heizle')
stringLocalStorage.get('name')
// get에 마우스 커서를 가져가면 아래와 같이 get의 return 값이 string으로 추론된다
// (method) LocalStorage<string>.get(key: string): string

const booleanLocalStorage = new LocalStorage<boolean>();
booleanLocalStorage.get('name')
// get에 마우스 커서를 가져가면 아래와 같이 get의 return 값이 boolean으로 추론된다
// (method) LocalStorage<boolean>.get(key: string): boolean

// LocalStorage 인스턴스를 생성할때 T의 타입값을 받아 타입스크립트는 입력된 타입으로 모든 T 값을 추론한다.
// 한 가지 타입을 설정하지 않고 blueprint를 통해 여러가지 타입의 같은 동작을 하는 인스턴스를 만들 수 있다.