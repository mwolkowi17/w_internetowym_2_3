import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export class GameStart extends Scene {
  przycisk_start: Phaser.GameObjects.Image;
  enter_key: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: "GameSceneStart",
    });
  }

  create(): void {
    //adding assets to stage
    this.add.image(960, 540, "plansza_start");
    localStorage.setItem("player1", "");

    this.przycisk_start = this.add
      .image(960, 700, "przycisk_start")
      .setAlpha(1)
      .setInteractive();

    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_start);

    const startInstruction = () => {
      this.scene.start("GameSceneInstruction");
    };

    //dodanie eventów z klawiatury
    this.enter_key = this.input.keyboard.addKey("Enter");

    this.enter_key.on("down", () => {
      startInstruction();
    });

    this.przycisk_start.on("pointerdown", () => {
      startInstruction();
    });
  }
}
