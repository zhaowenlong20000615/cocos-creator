import { _decorator, Animation, Component, EventKeyboard, EventMouse, Input, input, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    private animation: Animation = null

    start() {
      this.animation = this.node.getComponent(Animation)
      input.on(Input.EventType.MOUSE_DOWN , this.onMouseDown, this)
      input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this)
    }

  

    onMouseDown(event: EventMouse) {
      const mouseCode = event.getButton()
      if (mouseCode === 0) return this.jumpStep(mouseCode + 1)
      if( mouseCode === 2) return this.jumpStep(mouseCode)
    }

    onMouseUp(event: EventMouse) {
    }


    jumpStep(type: number) {
      const animateName = type === 1 ? 'JumpOneStep' : 'JumpTwoStep'
      const pos = this.node.getPosition()
      // this.node.setPosition(pos.x + type * 40, pos.y, pos.z)
      this.animation.play(animateName)
      // 监听动画每帧更新，调整x的基准位置
  this.animation.on(Animation.EventType.PLAY, () => {
    const currentPos = this.node.getPosition()
    console.log(pos.x + (currentPos.x));
    
    // 动画的x值 + 起始位置 = 最终位置
    this.node.setPosition(pos.x + (currentPos.x), currentPos.y, currentPos.z)
  })
    }

    update(deltaTime: number) {
      
    }

    protected onDestroy(): void {
        input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this)
        input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this)
    }
  }
