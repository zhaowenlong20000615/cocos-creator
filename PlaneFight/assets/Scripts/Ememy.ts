import { _decorator, Component, instantiate, math, Node, Prefab, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Ememy')
export class Ememy extends Component {

  @property
  private speed: number = 100;

  @property
  private maxX: number = 0;

  @property
  private minX: number = 0;

  @property
  private pos: Vec3 = new Vec3(0, 0, 0);

  @property
  private createTime: number = 1;

  @property(Prefab)
  private ememyPrefab: Prefab = null;

  @property(Node)
  private parentNode: Node = null;

  onLoad() {
    this.schedule(this.createEmemy, this.createTime);
  }

  onDestroy() {
    this.unschedule(this.createEmemy);
  }

  update(deltaTime: number) {
    this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime, this.node.position.z);
  }

  createEmemy() {
    const ememy = instantiate(this.ememyPrefab);
    ememy.setPosition(math.randomRangeInt(this.minX, this.maxX), this.node.position.y, this.node.position.z);
    // this.parentNode.addChild(ememy);
  }

}
