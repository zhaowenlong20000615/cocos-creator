import { _decorator, Component, EventKeyboard, EventMouse, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    start() {
      input.on(Input.EventType.MOUSE_DOWN , this.onMouseDown, this)
      input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this)
    }

    update(deltaTime: number) {

    }

    onMouseDown(event: EventMouse) {
      const mouseCode = event.getButton()
      if (mouseCode === 0) return this.jumpStep(mouseCode + 1)
      if( mouseCode === 2) return this.jumpStep(mouseCode)


      console.log(event.getButton())
    }

    onMouseUp(event: EventMouse) {
    }


    jumpStep(type: number) {
      const pos = this.node.getPosition()
      this.node.setPosition(pos.x + type * 40, pos.y, pos.z)
    }

    protected onDestroy(): void {
        input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this)
        input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this)
    }
  }
