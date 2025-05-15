import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export class GameName extends Scene {
  przycisk_dalej: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: "GameSceneName",
    });
  }

  create(): void {
    //adding assets to stage
    this.add.image(960, 540, "plansza_imie");

    this.przycisk_dalej = this.add
      .image(960, 750, "przycisk_dalej_imie")
      .setAlpha(1)
      .setInteractive();

    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_dalej);

    this.przycisk_dalej.on("pointerdown", () => {
      console.log("Dalej");
    });
  }
}
