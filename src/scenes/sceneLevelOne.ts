import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export class SceneLevelOne extends Scene {
  przycisk_level_one: Phaser.GameObjects.Image;
  enter_key: Phaser.Input.Keyboard.Key;
  constructor() {
    super({
      key: "GameSceneLevelOne",
    });
  }

  create(): void {
    this.add.image(960, 540, "plansza_poziom1_wybor");
    this.przycisk_level_one = this.add
      .image(550, 540, "poziom1_button")
      .setAlpha(1)
      .setInteractive();

    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_level_one);

    const Start_Level_One = () => {
      if (this.scene.isActive("GameQuizz")) {
        this.scene.get("GameQuizz").events.removeAllListeners(); // tu trzeba sprawdzić!!!
      }
      if (this.scene.isActive("GameTrap")) {
        this.scene.get("GameTrap").events.removeAllListeners(); // tu trzeba sprawdzić!!!
      }
      this.scene.start("GameSceneMain1");
    };

    //eventy
    this.przycisk_level_one.on("pointerdown", () => {
      Start_Level_One();
    });

    //dodanie eventów z klawiatury
    this.enter_key = this.input.keyboard.addKey("Enter");

    this.enter_key.on("down", () => {
      Start_Level_One();
    });
  }
}
