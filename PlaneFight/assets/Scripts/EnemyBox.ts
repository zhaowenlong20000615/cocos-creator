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
  }

  createMoreTypeEnemy(prefab: Prefab) {
    const ememy = instantiate(prefab);
    const enemyComponent = ememy.getComponent('Enemy') as any;
    this.node.addChild(ememy);
    this.scheduleOnce(() => this.createMoreTypeEnemy(prefab), enemyComponent.createTime);
  }
}
