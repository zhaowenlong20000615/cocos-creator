import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {

    @property
    private speed: number = 1000;

    @property
    private createTime: number = 0.5;


    update(deltaTime: number) {
        this.node.setPosition(this.node.position.x, this.node.position.y + this.speed * deltaTime, this.node.position.z);
        if (this.node.position.y > 700) {
          this.node.destroy();
      }
    }
}
