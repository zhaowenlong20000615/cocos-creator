import { _decorator, Component, instantiate, Node } from 'cc';
import { EnemyBox } from './EnemyBox';
import { RewardBox } from './RewardBox';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    protected start(): void {
      this.createEnemy();
      this.createReward();
    }

    createEnemy() {
      EnemyBox.getInstance().createEnemy();
    }

    createReward() {
      RewardBox.getInstance().createReward();
    }
}
