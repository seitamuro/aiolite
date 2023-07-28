import { GameObjects, Scene } from 'phaser';

export class LoadingScene extends Scene {
  private king!: GameObjects.Sprite;
  private player!: GameObjects.Sprite;

  constructor() {
    super("loading-scene");
  }

  create(): void {
    console.log("Loading scene was created");
    //this.scene.start("level-1-scene");
    this.scene.start("ui-scene");
    this.scene.start("stage-scene")
  }

  preload(): void {
    this.load.setBaseURL("/assets/");

    // player assets
    this.load.image("hana", "/sprites/hana.png");
    //this.load.atlas("a-king", "/spritesheets/a-king.png", "/spritesheets/a-king_atlas.json");

    // dungeon assets
    /*this.load.image({
      key: 'tiles',
      url: 'tilemaps/tiles/dungeon-16-16.png',
    });
    this.load.tilemapTiledJSON('dungeon', 'tilemaps/json/dungeon.json');
    this.load.spritesheet("tiles_spr", "/tilemaps/tiles/dungeon-16-16.png", { frameWidth: 16, frameHeight: 16 });
    */
  }
}