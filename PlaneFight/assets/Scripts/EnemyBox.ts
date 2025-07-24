import { _decorator, Component, find, instantiate, math, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyBox')
export class EnemyBox extends Component {

  private static _instance: EnemyBox = null;

  public static getInstance(): EnemyBox {
    return EnemyBox._instance;
  }

  @property(Prefab)
  private ememy0Prefab: Prefab = null;

  @property(Prefab)
  private ememy1Prefab: Prefab = null;

  @property(Prefab)
  private ememy2Prefab: Prefab = null;

  onLoad() {
    EnemyBox._instance = this;
  }

  protected onDestroy(): void {
    this.unscheduleAllCallbacks();
  }

  createEnemy() {
    this.createMoreTypeEnemy(this.ememy0Prefab);
    this.createMoreTypeEnemy(this.ememy1Prefab);
    this.createMoreTypeEnemy(this.ememy2Prefab);
  }

  createMoreTypeEnemy(prefab: Prefab) {
    const ememy = instantiate(prefab);
    const enemyComponent = ememy.getComponent('Enemy') as any;
    const pos = enemyComponent.pos;
    const minX = enemyComponent.minX;
    const maxX = enemyComponent.maxX;

    const x = math.randomRange(minX, maxX);
    ememy.setPosition(x, pos.y, pos.z);
    this.scheduleOnce(() => {
      this.node.addChild(ememy);
      this.createMoreTypeEnemy(prefab)
    }, enemyComponent.createTime);
  }
}
