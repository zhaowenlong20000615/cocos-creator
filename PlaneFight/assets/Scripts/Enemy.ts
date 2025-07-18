import { _decorator, Component, instantiate, log, math, Node, Prefab, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {
  private static _instance: Enemy = null;

  private constructor() {
    super();
  }

  public static getInstance(): Enemy {
    if (!Enemy._instance) {
      Enemy._instance = new Enemy();
    }
    return Enemy._instance;
  }

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

  update(deltaTime: number) {
    this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime, this.node.position.z);
  }

}
