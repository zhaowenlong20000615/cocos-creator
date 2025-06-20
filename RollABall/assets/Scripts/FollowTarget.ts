import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FollowTarget')
export class FollowTarget extends Component {
    @property(Node)
    public target:Node;

    private offset:Vec3 = null;

    start() {
        const p1 = this.node.position
        const p2 = this.target.position
        this.offset = new Vec3(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z)
    }

    lateUpdate(deltaTime: number) {
        if (!this.target) return;
        this.node.setPosition(this.target.x + this.offset.x, this.target.y + this.offset.y, this.target.z + this.offset.z);
    }
}

