import crypto from 'crypto';

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(public prevHash: string, public height: number, public data: string) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  public getPrevHash() {
    if (this.blocks.length === 0) { return '' }
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addHash(data: string) {
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    // 중요! no return this.blocks;
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addHash('First')
blockchain.addHash('Second')
blockchain.addHash('Third')
blockchain.addHash('Fourth')

blockchain.getBlocks().push(new Block('???', 1111, 'hackedddddd'))
console.log(blockchain.getBlocks())

// public getBlocks() {
//   return this.blocks;
// }
// 위 처럼 원본 배열의 참조를 직접 반환하게 되면 호출자가 이 배열을 수정하면 원본 데이터도 바뀌게 된다.
// [
//   Block {
//     prevHash: '',
//     height: 1,
//     data: 'First',
//     hash: '266fdcb1065975f25a2726228d0078374043b2f86ccaea23fb6316435253a094'
//   },
//   Block {
//     prevHash: '266fdcb1065975f25a2726228d0078374043b2f86ccaea23fb6316435253a094',
//     height: 2,
//     data: 'Second',
//     hash: 'cd8b5f2a1bc709994740219dcc47ef8d899981488a5fe2a58ac9f1827cd28727'
//   },
//   Block {
//     prevHash: 'cd8b5f2a1bc709994740219dcc47ef8d899981488a5fe2a58ac9f1827cd28727',
//     height: 3,
//     data: 'Third',
//     hash: '85cef5111609d0704b720d5e1bfb944d29928bad171f4da668f933f145f2f82e'
//   },
//   Block {
//     prevHash: '85cef5111609d0704b720d5e1bfb944d29928bad171f4da668f933f145f2f82e',
//     height: 4,
//     data: 'Fourth',
//     hash: 'fd00ff899e5e3c3d05995350ce7cf76293f65b4dcd954d442a2cfc87ea7a8796'
//   },
//   Block {
//     prevHash: '???',
//     height: 1111,
//     data: 'hackedddddd',
//     hash: '3cfe879757fdfe824e6b5f95c2c1c2f98a75a818ffbc26573a0bc601d11b422a'
//   }
// ]
// -----------------------
// public getBlocks() {
//   return [...this.blocks];
// }
// 위 처럼 새로운 배열을 만들어 새 배열의 참조를 반환하게 되면 호출자가 이 배열을 수정해도 원본 데이터는 변경되지 않는다.
// 캡슐화의 불변성을 위해 반환시에는 원본배열이 아닌 새로운 배열의 참조를 반환해야 한다.
// [
//   Block {
//     prevHash: '',
//     height: 1,
//     data: 'First',
//     hash: '266fdcb1065975f25a2726228d0078374043b2f86ccaea23fb6316435253a094'
//   },
//   Block {
//     prevHash: '266fdcb1065975f25a2726228d0078374043b2f86ccaea23fb6316435253a094',
//     height: 2,
//     data: 'Second',
//     hash: 'cd8b5f2a1bc709994740219dcc47ef8d899981488a5fe2a58ac9f1827cd28727'
//   },
//   Block {
//     prevHash: 'cd8b5f2a1bc709994740219dcc47ef8d899981488a5fe2a58ac9f1827cd28727',
//     height: 3,
//     data: 'Third',
//     hash: '85cef5111609d0704b720d5e1bfb944d29928bad171f4da668f933f145f2f82e'
//   },
//   Block {
//     prevHash: '85cef5111609d0704b720d5e1bfb944d29928bad171f4da668f933f145f2f82e',
//     height: 4,
//     data: 'Fourth',
//     hash: 'fd00ff899e5e3c3d05995350ce7cf76293f65b4dcd954d442a2cfc87ea7a8796'
//   },
//   Block {
//     prevHash: '???',
//     height: 1111,
//     data: 'hackedddddd',
//     hash: '3cfe879757fdfe824e6b5f95c2c1c2f98a75a818ffbc26573a0bc601d11b422a'
//   }
// ]