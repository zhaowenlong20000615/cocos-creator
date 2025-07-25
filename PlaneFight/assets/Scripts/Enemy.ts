import { _decorator, Animation, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, Vec3 } from 'cc';
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
  private downAnimation: string = '';

  @property
  private hitAnimation: string = '';

  @property
  private hp: number = 1;

  private collider: Collider2D = null;
  private targetToDestroy: Node = null;
  private isExecuteAnimation: boolean = false;
  private isHit: boolean = false;
  private isHitAnimation: boolean = false;

  protected onLoad(): void {
    this.collider = this.node.getComponent(Collider2D);
    if (this.collider) {
      this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
  }

  protected onDestroy(): void {
    const collider = this.node.getComponent(Collider2D);
    if (collider) {
      collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
  }


  update(deltaTime: number) {
    if (this.targetToDestroy) {
      this.targetToDestroy.destroy();
      this.targetToDestroy = null;
    }

    this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime, this.node.position.z);

    const anim = this.node.getComponent(Animation);
    if (this.hp <= 0 && !this.isExecuteAnimation) {
      this.isExecuteAnimation = true;
      anim.once(Animation.EventType.FINISHED, this.onAnimationFinished, this);
      anim.play(this.downAnimation);
    }

    if (this.hp > 0 && this.hitAnimation !== '' && this.isHit && !this.isHitAnimation) {
      this.isHitAnimation = true;
      anim.once(Animation.EventType.FINISHED, () => {
        this.isHit = false;
        this.isHitAnimation = false;
      }, this);
      anim.play(this.hitAnimation);
    }

    if (this.node.position.y < -600) {
      this.node.destroy();
    }
  }

  onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    this.hp--;

    this.targetToDestroy = otherCollider.node;
    this.isHit = true;
  }

  onAnimationFinished() {
    this.node.destroy();
  }

}
