import { Physics } from "phaser";

/**
 * プレイヤーの乗る足場を表すクラス
 */
export class Block extends Phaser.GameObjects.Rectangle {

  /**
   * コンストラクタ
   * 
   * @param {Phaser.Scene} scene シーン
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {number} width 幅
   * @param {number} height 高さ
   * @param {Phaser.Display.Color} color 色
   */
  constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, color: Phaser.Display.Color) {
    super(scene, x, y, width, height, color.color);
    scene.add.existing(this);
    scene.physics.add.staticGroup(this);
  }
}