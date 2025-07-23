import { _decorator, Collider2D, Component, Contact2DType, instantiate, IPhysics2DContact, log, math, Node, PhysicsSystem2D, Prefab, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {

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

  @property
  private hp: number = 1;

  protected onLoad(): void {
    // 碰撞检测
    this.node.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
  }

  protected start(): void {

    PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    const collider = this.node.getComponent(Collider2D);

    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    setTimeout(() => {
      console.log(1111111, this);
    console.log(2222222, this.node);
    console.log(3333333, this.node.getComponent(Collider2D));
    console.log(4444444, PhysicsSystem2D.instance);
    }, 1000);



  }

  protected onDestroy(): void {
    this.node.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
  }

  update(deltaTime: number) {
    this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime, this.node.position.z);

    if (this.node.position.y < -600) {
      this.node.destroy();
    }
  }

  onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null ) {
    console.log(66666666);

    log('onBeginContact', selfCollider, otherCollider, contact);
  }

}
