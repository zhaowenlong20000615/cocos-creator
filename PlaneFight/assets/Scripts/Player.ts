import { _decorator, Component, EventTouch, input, Input, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property
    private speed: number = 1000;


    start() {
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    update(deltaTime: number) {

    }

    onTouchMove(event: EventTouch) {
      const delta = event.getDelta();
      this.node.setPosition(this.node.position.x + delta.x, this.node.position.y + delta.y, this.node.position.z);
    }
}
