import { _decorator, Component, Node, Vec2 } from 'cc';
import { Joystick } from '../../prefabs/Joystick/Joystick';
const { ccclass, property } = _decorator;

@ccclass('GameScene')
export class GameScene extends Component {
    @property(Joystick)
    joyStick!: Joystick;

    private _selfSpeed?: Vec2 = new Vec2(0, 0);

    onLoad() {
        // 初始化摇杆
        this.joyStick.options = {
            onOperate: v => {
                if (!this._selfSpeed) {
                    this._selfSpeed = new Vec2;
                }
                this._selfSpeed.set(v.x, v.y);
            },
            onOperateEnd: () => {
                this._selfSpeed = undefined;
            }
        }
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}

