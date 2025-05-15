import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export class SceneLoose extends Scene {
  plansza_przegrana: Phaser.GameObjects.Image;
  zakoncz_gre_przycisk: Phaser.GameObjects.Image;
  gram_jeszcze_przycisk: Phaser.GameObjects.Image;
  loose_sound:
    | Phaser.Sound.NoAudioSound
    | Phaser.Sound.HTML5AudioSound
    | Phaser.Sound.WebAudioSound;
  ramka_button: Phaser.GameObjects.Image;
  tab_key: Phaser.Input.Keyboard.Key;
  enter_key: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: "GameLoose",
    });
  }

  create() {
    //adding assets
    this.add.image(960, 540, "plansza_poziom1");
    this.plansza_przegrana = this.add.image(960, 540, "przegrana_plansza");

    this.zakoncz_gre_przycisk = this.add
      .image(1300, 715, "zakoncz_gre_przycisk")
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.zakoncz_gre_przycisk);

    this.gram_jeszcze_przycisk = this.add
      .image(600, 715, "gram_dalej")
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.gram_jeszcze_przycisk);

    this.ramka_button = this.add.image(600, 715, "ramka_button").setAlpha(1);

    //dźwięki
    this.loose_sound = this.sound.add("przegrana_gra", { loop: false });
    this.loose_sound.play();

    const lewy_przycisk = () => {
      if (this.scene.isActive("GameQuizz")) {
        this.scene.get("GameQuizz").events.removeAllListeners();
      }
      if (this.scene.isActive("GameTrap")) {
        this.scene.get("GameTrap").events.removeAllListeners();
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

    //eventy z klawiatury
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
