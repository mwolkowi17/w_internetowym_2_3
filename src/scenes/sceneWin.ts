import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export class SceneWin extends Scene {
  plansza_wygrana: Phaser.GameObjects.Image;
  zakoncz_gre_przycisk: Phaser.GameObjects.Image;
  gram_jeszcze_przycisk: Phaser.GameObjects.Image;
  fanfary:
    | Phaser.Sound.NoAudioSound
    | Phaser.Sound.HTML5AudioSound
    | Phaser.Sound.WebAudioSound;
  ramka_button: Phaser.GameObjects.Image;
  tab_key: Phaser.Input.Keyboard.Key;
  enter_key: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: "GameWin",
    });
  }

  create() {
    this.add.image(960, 540, "plansza_level2");
    this.plansza_wygrana = this.add.image(940, 540, "zakonczenie_plansza");

    this.zakoncz_gre_przycisk = this.add
      .image(1300, 715, "zakoncz_gre_przycisk")
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.zakoncz_gre_przycisk);

    this.gram_jeszcze_przycisk = this.add
      .image(600, 715, "gram_jeszcze_przycisk")
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.gram_jeszcze_przycisk);

    this.ramka_button = this.add.image(600, 715, "ramka_button").setAlpha(1);

    //dźwięki
    this.fanfary = this.sound.add("fanfary", { loop: false });
    this.fanfary.play();

    const lewy_przycisk = () => {
      if (this.scene.isActive("GameQuizz")) {
        this.scene.get("GameQuizz").events.removeAllListeners(); // tu trzeba sprawdzić!!!
      }
      if (this.scene.isActive("GameTrap")) {
        this.scene.get("GameTrap").events.removeAllListeners(); // tu trzeba sprawdzić!!!
      }
      this.scene.start("GameSceneMain1");
    };
    const prawy_przycisk = () => {
      this.scene.start("GameSceneStart");
    };

    //eventy
    this.zakoncz_gre_przycisk.on("pointerdown", () => {
      prawy_przycisk();
    });

    this.gram_jeszcze_przycisk.on("pointerdown", () => {
      lewy_przycisk();
    });

    this.tab_key = this.input.keyboard.addKey("TAB");

    let right_tab = false;
    let wybrany_przycisk = 2;

    this.tab_key.on("down", () => {
      right_tab = !right_tab;
      if (right_tab) {
        console.log("righ tab");
        this.ramka_button.setX(1300);
        wybrany_przycisk = 1;
      } else {
        console.log("left tab");
        this.ramka_button.setX(600);
        wybrany_przycisk = 2;
      }
    });

    this.enter_key = this.input.keyboard.addKey("Enter");
    this.enter_key.on("down", () => {
      if (wybrany_przycisk === 2) {
        lewy_przycisk();
      }
      if (wybrany_przycisk === 1) {
        prawy_przycisk();
      }
    });
  }
}
