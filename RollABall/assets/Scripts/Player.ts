import { _decorator, Component, EventKeyboard, Input, input, KeyCode, log, Node, RigidBody, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property
    public speed = 5;
    @property
    public moveForce = 15;

    private moveDir: Vec2 = Vec2.ZERO
    private rgb: RigidBody = null

    start() {
      this.rgb = this.getComponent(RigidBody)
    }

    protected onLoad(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
    }

    protected onDestroy(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
          case KeyCode.KEY_W:
            this.moveDir = new Vec2(this.moveDir.x, -1)
            break
          case KeyCode.KEY_S:
            this.moveDir = new Vec2(this.moveDir.x, 1)
            break
          case KeyCode.KEY_A:
            this.moveDir = new Vec2(-1, this.moveDir.y)
            break
          case KeyCode.KEY_D:
            this.moveDir = new Vec2(1, this.moveDir.y)
            break
        }

        // console.log(this.moveDir);
    }

    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
          case KeyCode.KEY_W:
            this.moveDir = new Vec2(this.moveDir.x, 0)
            break
          case KeyCode.KEY_S:
            this.moveDir = new Vec2(this.moveDir.x, 0)
            break
          case KeyCode.KEY_A:
            this.moveDir = new Vec2(0, this.moveDir.y)
            break
          case KeyCode.KEY_D:
            this.moveDir = new Vec2(0, this.moveDir.y)
            break
        }

        // console.log(this.moveDir);

    }

    onKeyPressing(event: EventKeyboard) {
        // console.log(event.keyCode);
    }



    update(deltaTime: number) {
      const pos = this.node.position
      // console.log(this.moveDir)
      // if (!this.moveDir)  return
        // this.node.setPosition(pos.x + this.moveDir.x * this.speed * deltaTime, pos.y, pos.z + this.moveDir.y * this.speed * deltaTime)
      this.rgb.applyForce(new Vec3(this.moveDir.x, 0, this.moveDir.y).multiplyScalar(this.moveForce))
    }
}
