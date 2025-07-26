import { _decorator, Collider2D, Component, Contact2DType, Enum, EventTouch, input, Input, instantiate, IPhysics2DContact, log, Node, Prefab, Animation, director } from 'cc';
const { ccclass, property } = _decorator;

enum BulletType {
  NoneBullet,
  OneBullet,
  TwoBullet,
}

Enum(BulletType);

@ccclass('Player')
export class Player extends Component {

  @property(Node)
  private bulletParent: Node = null;

  @property(Prefab)
  private bullet1Prefab: Prefab = null;

  @property(Prefab)
  private bullet2Prefab: Prefab = null;

  @property({ type: Enum(BulletType) })
  private bulletType: BulletType = BulletType.OneBullet;

  @property
  private blowNum: number = 0;

  @property
  private hp: number = 3;

  private collider: Collider2D = null;
  private continuousTime: number = 0;
  private isExecutedAnimation: boolean = false;

  protected onLoad(): void {
    this.collider = this.node.getComponent(Collider2D);

    if (this.collider) {
      this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
    input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.createBullet();
  }

  protected onDestroy(): void {
    if (this.collider) {
      this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
    input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
  }

  update(deltaTime: number) {
    if (this.hp <= 0 && !this.isExecutedAnimation) {
      this.isExecutedAnimation = true;
      const animation = this.node.getChildByName('hero').getComponent(Animation)
      animation.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
      animation.play('PlayerDown');
    }
  }

  onAnimationFinished() {
    director.pause()
    // this.node.destroy();
  }

  onTouchMove(event: EventTouch) {
    const delta = event.getDelta();
    this.node.setPosition(this.node.position.x + delta.x, this.node.position.y + delta.y, this.node.position.z);
  }

  createBullet() {
    switch (this.bulletType) {
      case BulletType.OneBullet:
        this.createOneBullet();
        break;
      case BulletType.TwoBullet:
        this.createTwoBullet();
        break;
      default:
        break;
    }
  }

  async createOneBullet() {
    const bullet = instantiate(this.bullet1Prefab);
    const bulletComponent = bullet.getComponent('Bullet') as any;
    bullet.setParent(this.bulletParent);
    bullet.setPosition(this.node.position.x, 80, this.node.position.z);
    await new Promise(resolve => setTimeout(resolve, bulletComponent.createTime * 1000));
    this.createBullet();
  }

  async createTwoBullet() {
    const bullet1 = instantiate(this.bullet2Prefab);
    const bullet2 = instantiate(this.bullet2Prefab);
    const bullet1Component = bullet1.getComponent('Bullet') as any;
    bullet1.setParent(this.bulletParent);
    bullet2.setParent(this.bulletParent);
    bullet1.setPosition(this.node.position.x - 35, 35, this.node.position.z);
    bullet2.setPosition(this.node.position.x + 30, 35, this.node.position.z);
    await new Promise(resolve => setTimeout(resolve, bullet1Component.createTime * 1000));
    this.createBullet();
  }

  onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    if (otherCollider.node.name.includes('enemy')) {
      this.hp--;
      return
    }

    switch (otherCollider.tag) {
      case 0:
        this.getTwoBullet(otherCollider);
        break;
      case 1:
        this.getBlow(otherCollider);
        break;

    }
  }

  getTwoBullet(otherCollider: Collider2D) {
    const colliderComponent = otherCollider.getComponent('Reward') as any;
    this.continuousTime = colliderComponent.continuousTime;
    otherCollider.node.destroy();
    this.bulletType = BulletType.TwoBullet;
    this.schedule(() => {
      this.continuousTime--
      if (this.continuousTime <= 0) {
        this.bulletType = BulletType.OneBullet;
      }
    }, 1, this.continuousTime);

  }

  getBlow(otherCollider: Collider2D) {
    otherCollider.node.destroy();
    this.blowNum++;
  }

}
