import { _decorator, Component, instantiate, Node } from 'cc';
import { EnemyBox } from './EnemyBox';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    protected start(): void {
      this.createEnemy();
    }

    createEnemy() {
      EnemyBox.getInstance().createEnemy();
    }
}
