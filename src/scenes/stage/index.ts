import { Block } from "@/classes/block";
import { Scene } from "phaser";

export class Stage extends Scene {
  private block!: Block;

  constructor() {
    super("stage-scene");
  }

  create(): void {
    this.block = new Block(this, 100, 100, 100, 100, Phaser.Display.Color.HexStringToColor("#ff0000"));
  }
}