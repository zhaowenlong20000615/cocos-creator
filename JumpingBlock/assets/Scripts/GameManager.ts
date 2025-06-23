import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

enum BlockType {
  NONE,
  WHITE
}

@ccclass('GameManager')
export class GameManager extends Component {

    @property
    blockLen = 50
    @property(Prefab)
    blockPrefab: Prefab = null

    private topBlockType:BlockType = BlockType.NONE

    start() {
      this.generateBlock()
    }

    update(deltaTime: number) {

    }

    generateBlock() {
      for (let i = 1; i < this.blockLen; i++) {
         const random = Math.round(Math.random())
         if(random <= 0) continue
         const prefab = instantiate(this.blockPrefab)
         if(this.topBlockType === BlockType.NONE) {

         }

        this.node.addChild(prefab)
        prefab.setPosition(i * 40, 0, 0)
        this.topBlockType = BlockType[random.toString()]
      }
    }
}
