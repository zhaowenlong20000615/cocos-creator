import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Aa')
export class Aa extends Component {
    start() {

    }

    update(deltaTime: number) {
        const pos = this.node.position
        if(pos.y > -10) return
        this.node.destroy()
    }
}

