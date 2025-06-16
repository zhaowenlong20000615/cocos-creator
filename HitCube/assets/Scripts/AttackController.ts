import { _decorator, Component, Node, Prefab, input, Input, EventTouch, instantiate, RigidBody, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AttackController')
export class AttackController extends Component {

    @property(Prefab)
    public bulletPrefab: Prefab = null
    @property
    public fireRate:number = 0.3;
    @property
    public bulletSpeed:number = 0;

    private isTouching:boolean = false;
    private fireTimer=0;

    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this)
    }

    update(deltaTime: number) {
        if (!this.isTouching) return
        this.fireTimer += deltaTime
        if(this.fireTimer <= this.fireRate) return
        this.fire()
        this.fireTimer = 0
    }

    fire() {
        const bullte = instantiate(this.bulletPrefab)
        bullte.setParent(this.node)
        bullte.setWorldPosition(this.node.position)
        const rgd = bullte.getComponent(RigidBody)
        rgd.setLinearVelocity(new Vec3(0, 0, -this.bulletSpeed))
    }

    private onTouchStart(event: EventTouch) {
        this.isTouching = true
    }

    private onTouchEnd(event: EventTouch) {
        this.isTouching = false
    }

}

