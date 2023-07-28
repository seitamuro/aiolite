import { Block } from "@/classes/block";
import { Player } from "@/classes/player";
import { Scene } from "phaser";

export class Stage extends Scene {
  private block!: Block;
  private player!: Phaser.GameObjects.Sprite;

  constructor() {
    super("stage-scene");
  }

  create(): void {
    this.block = new Block(this, 100, 200, 100, 100, Phaser.Display.Color.HexStringToColor("#ff0000"));
    this.player = new Player(this, 100, 100);
    this.physics.add.collider(this.player, this.block);
  }

  update(): void {
    this.player.update();
  }
}