import { _decorator, Component, Enum, EventTouch, input, Input, instantiate, Node, Prefab, Vec3 } from 'cc';
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

    @property({type: Enum(BulletType)})
    private bulletType: BulletType = BulletType.OneBullet;


    start() {
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.createBullet();
    }

    update(deltaTime: number) {

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
        bullet.setPosition(this.node.position.x, this.node.position.y + 80, this.node.position.z);
        await new Promise(resolve => setTimeout(resolve, bulletComponent.createTime * 1000));
        this.createBullet();
    }

    async createTwoBullet() {
        const bullet1 = instantiate(this.bullet2Prefab);
        const bullet2 = instantiate(this.bullet2Prefab);
        const bullet1Component = bullet1.getComponent('Bullet') as any;
        bullet1.setParent(this.bulletParent);
        bullet2.setParent(this.bulletParent);
        bullet1.setPosition(this.node.position.x - 41, this.node.position.y + 35, this.node.position.z);
        bullet2.setPosition(this.node.position.x + 25, this.node.position.y + 35, this.node.position.z);
        await new Promise(resolve => setTimeout(resolve, bullet1Component.createTime * 1000));
        this.createBullet();
    }
}
