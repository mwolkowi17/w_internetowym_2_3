import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export class SceneInstruction extends Scene {
  przycisk_dalej: Phaser.GameObjects.Image;
  enter_key: Phaser.Input.Keyboard.Key;
  constructor() {
    super({
      key: "GameSceneInstruction",
    });
  }

  create(): void {
    this.add.image(960, 540, "plansza_zasady_gry");
    this.przycisk_dalej = this.add
      .image(960, 970, "przycisk_dalej_imie")
      .setAlpha(1)
      .setInteractive();

    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_dalej);

    const startGame = () => {
      this.scene.start("GameSceneLevelOne");
    };

    this.przycisk_dalej.on("pointerdown", () => {
      startGame();
    });

    //dodanie eventów z klawiatury
    this.enter_key = this.input.keyboard.addKey("Enter");

    this.enter_key.on("down", () => {
      startGame();
    });
  }
}
