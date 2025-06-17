import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Aa')
export class Aa extends Component {
    start() {

    }

    update(deltaTime: number) {
        console.log(this.node.position);
        
        const pos = this.node.position
        if(pos.z > -50) return
        this.node.destroy()
    }
}

