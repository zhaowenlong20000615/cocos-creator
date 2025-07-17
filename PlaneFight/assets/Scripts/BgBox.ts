import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgBox')
export class BgBox extends Component {

  @property(Node)
  private bg1: Node = null;

  @property(Node)
  private bg2: Node = null;

  @property
  private speed: number = 100;

  start() {

  }

  update(deltaTime: number) {
    this.bg1.setPosition(this.bg1.position.x, this.bg1.position.y - this.speed * deltaTime, this.bg1.position.z);
    this.bg2.setPosition(this.bg2.position.x, this.bg2.position.y - this.speed * deltaTime, this.bg2.position.z);

    if (this.bg1.position.y < -852){
      this.bg1.setPosition(this.bg1.position.x, this.bg2.position.y + 852, this.bg1.position.z);
    }

    if (this.bg2.position.y < -852) {
      this.bg2.setPosition(this.bg2.position.x, this.bg1.position.y + 852, this.bg2.position.z);
    }

  }
}
