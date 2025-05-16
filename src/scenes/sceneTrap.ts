import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export class SceneTrap extends Scene {
  plansza_pod_trap: Phaser.GameObjects.Image;
  dalej_powrot_do_gry: Phaser.GameObjects.Image;
  enter_key_trap: Phaser.Input.Keyboard.Key;
  dzwiek_pulapka:
    | Phaser.Sound.NoAudioSound
    | Phaser.Sound.HTML5AudioSound
    | Phaser.Sound.WebAudioSound;

  constructor() {
    super({
      key: "GameTrap",
    });
  }

  create() {
    console.log("nowa instancja Trap");
    //const sceneB: any = this.scene.get("GameSceneMain1");

    //dodawanie assetów
    this.plansza_pod_trap = this.add.image(700, 550, "zasadzka").setAlpha(0);

    this.dalej_powrot_do_gry = this.add
      .image(700, 680, "przycisk_dalej_imie")
      .setAlpha(0)
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.dalej_powrot_do_gry);

    //sound add
    this.dzwiek_pulapka = this.sound.add("ruch_do_tylu", { loop: false });

    //eventy
    const akcja_powrot_do_gry = () => {
      this.plansza_pod_trap.setAlpha(0);
      this.dalej_powrot_do_gry.setAlpha(0);

      const krok_do_tylu = this.scene.scene.events;
      krok_do_tylu.emit("krok-do-tylu-na-planszy");
    };
    //listener emiter-wpadka
    this.scene.get("GameSceneMain1").events.on("emiter-wpadka", () => {
      console.log("emiter-wpadka!");
      this.dzwiek_pulapka.play();
      this.plansza_pod_trap.setAlpha(1);
      this.dalej_powrot_do_gry.setAlpha(1);

      this.enter_key_trap = this.input.keyboard.addKey("Enter");

      this.enter_key_trap.on("down", () => {
        akcja_powrot_do_gry();
        this.input.keyboard.removeKey("Enter");
      });
    });

    this.scene.get("GameSceneMain2").events.on("emiter-wpadka", () => {
      console.log("emiter-wpadka!");
      this.plansza_pod_trap.setAlpha(1);
      this.dalej_powrot_do_gry.setAlpha(1);
      this.enter_key_trap = this.input.keyboard.addKey("Enter");

      this.enter_key_trap.on("down", () => {
        akcja_powrot_do_gry();
        this.input.keyboard.removeKey("Enter");
      });
    });

    this.dalej_powrot_do_gry.on("pointerdown", () => {
      akcja_powrot_do_gry();
      this.input.keyboard.removeKey("Enter");
    });
  }
}
