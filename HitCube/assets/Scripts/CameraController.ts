import { _decorator, Component, EventTouch, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraController')
export class CameraController extends Component {
    @property
    private moveScale: number = 0.05

    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this)
    }

    protected onDestroy(): void {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this)
    }

    update(deltaTime: number) {
        
    }

    private onTouchStart(event: EventTouch) {
        console.log('onTouchStart', event);
    }

    private onTouchMove(event: EventTouch) {
        const pos = this.node.position
        this.node.setPosition(pos.x + event.getDeltaX() * this.moveScale, pos.y + event.getDeltaY() * this.moveScale, pos.z)
    }

    private onTouchEnd(event: EventTouch) {
        console.log('onTouchEnd', event);
    }
    
}


