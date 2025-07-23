import { _decorator, Component, instantiate, math, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RewardBox')
export class RewardBox extends Component {

  private static _instance: RewardBox = null;

  public static getInstance(): RewardBox {
    return RewardBox._instance;
  }

  @property(Prefab)
  private twoBlletPrefab: Prefab = null;

  @property(Prefab)
  private blowPrefab: Prefab = null;

  onLoad() {
    RewardBox._instance = this;
  }

  createReward() {
    this.createMoreTypeReward(this.twoBlletPrefab);
    this.createMoreTypeReward(this.blowPrefab);
  }

  createMoreTypeReward(prefab: Prefab) {
    const reward = instantiate(prefab);
    const rewardNode = reward.getComponent('Reward') as any;
    const minX = rewardNode.minX;
    const maxX = rewardNode.maxX;
    const y = rewardNode.y;
    const createTime = rewardNode.createTime;
    const x = math.randomRange(minX, maxX);
    reward.setPosition(x, y, 0);
    this.node.addChild(reward);
    this.scheduleOnce(() => this.createMoreTypeReward(prefab), createTime);
  }

}
