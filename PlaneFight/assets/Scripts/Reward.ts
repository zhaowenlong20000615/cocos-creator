import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Reward')
export class Reward extends Component {

    @property
    private speed: number = 500;

    @property
    private minX: number = -200;

    @property
    private maxX: number = 200;

    @property
    private y: number = 35;

    @property
    private createTime: number = 5;

    @property
    private continuousTime: number = 10;



    update(deltaTime: number) {
        this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime, this.node.position.z);

        if (this.node.position.y < -600) {
          this.node.destroy();
        }
    }
}
