import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export class SceneLevelTwo extends Scene {
  przycisk_level_one: Phaser.GameObjects.Image;
  przycisk_level_two: Phaser.GameObjects.Image;
  ramka_button: Phaser.GameObjects.Image;
  tab_key: Phaser.Input.Keyboard.Key;
  enter_key: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: "GameSceneLevelTwo",
    });
  }

  create(): void {
    //this.scene.remove("GameSceneMain1");

    this.add.image(960, 540, "plansza_poziom1_wybor");
    this.przycisk_level_one = this.add
      .image(550, 540, "poziom1_button")
      .setAlpha(1)
      .setInteractive();

    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_level_one);

    this.przycisk_level_two = this.add
      .image(1360, 540, "poziom2_button")
      .setAlpha(1)
      .setInteractive();

    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_level_two);

    this.ramka_button = this.add.image(1360, 540, "ramka_button").setAlpha(1);

    const lewy_przycisk = () => {
      console.log(this.scene.isActive("GameSceneMain1"));
      console.log(this.scene.isActive("GameQuizz"));
      console.log(this.scene.isActive("GameTrap"));
      if (this.scene.isActive("GameQuizz")) {
        this.scene.get("GameQuizz").events.removeAllListeners();
      }
      if (this.scene.isActive("GameTrap")) {
        this.scene.get("GameTrap").events.removeAllListeners();
      }
      this.scene.start("GameSceneMain1");
    };

    const prawy_przycisk = () => {
      console.log("Start Level 2");
      if (this.scene.isActive("GameQuizz2")) {
        this.scene.get("GameQuizz2").events.removeAllListeners();
      }

      if (this.scene.isActive("GameTrap")) {
        this.scene.get("GameTrap").events.removeAllListeners();
      }
      this.scene.start("GameSceneMain2");
    };

    this.przycisk_level_one.on("pointerdown", () => {
      lewy_przycisk();
    });

    this.przycisk_level_two.on("pointerdown", () => {
      prawy_przycisk();
    });

    this.tab_key = this.input.keyboard.addKey("TAB");

    let right_tab = true;
    let wybrany_przycisk = 1;

    this.tab_key.on("down", () => {
      right_tab = !right_tab;
      if (right_tab) {
        console.log("righ tab");
        this.ramka_button.setX(1360);
        wybrany_przycisk = 1;
      } else {
        console.log("left tab");
        this.ramka_button.setX(550);
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
