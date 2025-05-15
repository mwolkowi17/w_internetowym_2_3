import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";
import { Quests2 } from "../lib/quests-source2";

export class SceneQuizz2 extends Scene {
  plansza_pod_quizz: Phaser.GameObjects.Image;
  tresc_pytanie: Phaser.GameObjects.Text;
  odpowiedz1_text: Phaser.GameObjects.Text;
  odpowiedz2_text: Phaser.GameObjects.Text;
  odpowiedz3_text: Phaser.GameObjects.Text;
  odpowiedz1: Phaser.GameObjects.Image;
  odpowiedz2: Phaser.GameObjects.Image;
  odpowiedz3: Phaser.GameObjects.Image;
  przycisk_sprawdz: Phaser.GameObjects.Image;
  zaznaczenie: Phaser.GameObjects.Image;
  ifOdpowiedzPoprawna: boolean;
  przycisk_dalej: Phaser.GameObjects.Image;
  odpowiedz_dobra_plansza: Phaser.GameObjects.Image;
  odpowiedz_zla_plansza: Phaser.GameObjects.Image;
  dobra_sound:
    | Phaser.Sound.NoAudioSound
    | Phaser.Sound.HTML5AudioSound
    | Phaser.Sound.WebAudioSound;
  zla_sound:
    | Phaser.Sound.NoAudioSound
    | Phaser.Sound.HTML5AudioSound
    | Phaser.Sound.WebAudioSound;
  enter_key_quizz: Phaser.Input.Keyboard.Key;
  enter_key_quizz_2: Phaser.Input.Keyboard.Key;
  ramka_odpowiedz: Phaser.GameObjects.Image;
  tab_key: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: "GameQuizz2",
    });
  }

  create() {
    console.log("nowa instancja Quizz2");
    const quizz_assets_data = new Quests2();

    //tak dostajemy się do danych z innych scen
    const sceneB: any = this.scene.get("GameSceneMain2");

    //dodawanie assetów
    this.plansza_pod_quizz = this.add
      .image(700, 550, quizz_assets_data.tab_quizz[0].pytanie)
      .setAlpha(0);

    this.tresc_pytanie = this.add
      .text(182, 355, quizz_assets_data.tab_quizz[0].tresc, {
        fontSize: "42px",
        fontStyle: "bold",
        fontFamily: "Proxima Nova",
        color: "#1d3850",
      })
      .setAlpha(0);

    // używam tego fontu - https://www.cdnfonts.com/proxima-nova-condensed.font
    this.odpowiedz1_text = this.add
      .text(300, 460, quizz_assets_data.tab_quizz[0].odpowiedz_text[0][0], {
        fontSize: "42px",
        fontStyle: "bold",
        fontFamily: "Proxima Nova",
        color: "#1d3850",
      })
      .setAlpha(0);

    this.odpowiedz2_text = this.add
      .text(300, 585, quizz_assets_data.tab_quizz[0].odpowiedz_text[0][1], {
        fontSize: "42px",
        fontStyle: "bold",
        fontFamily: "Proxima Nova",
        color: "#1d3850",
      })
      .setAlpha(0);

    this.odpowiedz3_text = this.add
      .text(300, 710, quizz_assets_data.tab_quizz[0].odpowiedz_text[0][2], {
        fontSize: "42px",
        fontStyle: "bold",
        fontFamily: "Proxima Nova",
        color: "#1d3850",
      })
      .setAlpha(0);

    this.odpowiedz1 = this.add
      .image(200, 485, "kratka")
      .setAlpha(0)
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.odpowiedz1);

    this.odpowiedz2 = this.add
      .image(200, 610, "kratka")
      .setAlpha(0)
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.odpowiedz2);

    this.odpowiedz3 = this.add
      .image(200, 735, "kratka")
      .setAlpha(0)
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.odpowiedz3);

    this.ramka_odpowiedz = this.add
      .image(200, 485, "ramka_odpowiedz")
      .setAlpha(0);

    this.przycisk_sprawdz = this.add
      .image(460, 850, "przycisk_sprawdz")
      .setInteractive()
      .setAlpha(0);
    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_sprawdz);

    // zaznaczenie odowiedz - krzyzyk
    this.zaznaczenie = this.add.image(200, 483, "zaznaczenie").setAlpha(0);

    this.odpowiedz_dobra_plansza = this.add
      .image(700, 550, "odpowiedz_dobra1")
      .setAlpha(0);

    this.odpowiedz_zla_plansza = this.add
      .image(700, 550, "odpowiedz_zla1")
      .setAlpha(0);

    this.przycisk_dalej = this.add
      .image(700, 680, "przycisk_dalej_imie")
      .setAlpha(0)
      .setInteractive();
    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_dalej);

    //sound add
    this.dobra_sound = this.sound.add("dobra_odp", { loop: false });
    this.zla_sound = this.sound.add("zla_odp", { loop: false });

    //eventy

    let nr_zestawu;
    //event listener - nasłuchuje kiedy wyświetlić quizz
    this.scene.get("GameSceneMain2").events.on(
      "krok-na-planszy",
      () => {
        console.log("krok na planszy emit Quizz:");
        setTimeout(() => {
          nr_zestawu = Math.floor(Math.random() * 3);
          this.plansza_pod_quizz.setAlpha(1);
          this.plansza_pod_quizz.setTexture(
            //quizz_assets_data.pokaz_zadanie(sceneB.krok_gracz1_na_planszy)[0]
            quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
              .pytanie
          );
          this.tresc_pytanie.setAlpha(1);
          this.tresc_pytanie.setText(
            quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
              .tresc
          );

          this.odpowiedz1_text.setText(
            quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
              .odpowiedz_text[nr_zestawu][0]
          );
          this.odpowiedz2_text.setText(
            quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
              .odpowiedz_text[nr_zestawu][1]
          );
          this.odpowiedz3_text.setText(
            quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
              .odpowiedz_text[nr_zestawu][2]
          );
          this.odpowiedz1_text.setAlpha(1);
          this.odpowiedz2_text.setAlpha(1);
          this.odpowiedz3_text.setAlpha(1);
          this.odpowiedz1.setAlpha(1);
          this.odpowiedz2.setAlpha(1);
          this.odpowiedz3.setAlpha(1);
          //this.ramka_odpowiedz.setAlpha(1);

          //eventy z klawiatury Tab - zmienianie zaznaczenia
          this.tab_key = this.input.keyboard.addKey("TAB");
          let wybrany_przycisk = 1;

          this.zaznaczenie.setY(735);
          this.zaznaczenie.setAlpha(0);
          this.przycisk_sprawdz.setAlpha(0);
          if (
            //quizz_assets_data.pokaz_zadanie(sceneB.krok_gracz1_na_planszy)[1] === 3
            quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
              .odpowiedz_text[nr_zestawu][3] === 3
          ) {
            this.ifOdpowiedzPoprawna = true;
          } else {
            this.ifOdpowiedzPoprawna = false;
          }

          this.tab_key.on("down", () => {
            this.ramka_odpowiedz.setAlpha(1);
            if (wybrany_przycisk === 1) {
              this.ramka_odpowiedz.setY(485);
              odowiedz1_reakcja();
              setTimeout(() => {
                wybrany_przycisk = 2;
              });
            }
            if (wybrany_przycisk === 2) {
              this.ramka_odpowiedz.setY(610);
              odowiedz2_reakcja();
              setTimeout(() => {
                wybrany_przycisk = 3;
              });
            }

            if (wybrany_przycisk === 3) {
              this.ramka_odpowiedz.setY(735);
              odowiedz3_reakcja();
              setTimeout(() => {
                wybrany_przycisk = 1;
              });
            }
          });
        });
      },
      this
    );

    // eventy poszczególnych odpwiedzi
    // funkcje odpalane w eventach
    const odowiedz1_reakcja = () => {
      this.zaznaczenie.setY(483);
      this.zaznaczenie.setAlpha(1);
      this.przycisk_sprawdz.setAlpha(1);

      // event enter z klawiatury
      if (this.enter_key_quizz === undefined) {
        this.enter_key_quizz = this.input.keyboard.addKey("Enter");
        console.log("eneter odp1");
        this.enter_key_quizz.on("down", () => {
          sprawdz_odpowiedzi_akcja();
          this.input.keyboard.removeAllKeys(true);
          this.enter_key_quizz = undefined;
        });
      }
      if (
        //quizz_assets_data.pokaz_zadanie(sceneB.krok_gracz1_na_planszy)[1] === 1
        quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
          .odpowiedz_text[nr_zestawu][3] === 1
      ) {
        this.ifOdpowiedzPoprawna = true;
      } else {
        this.ifOdpowiedzPoprawna = false;
      }
    };
    const odowiedz2_reakcja = () => {
      this.zaznaczenie.setY(610);
      this.zaznaczenie.setAlpha(1);
      this.przycisk_sprawdz.setAlpha(1);
      if (this.enter_key_quizz === undefined) {
        this.enter_key_quizz = this.input.keyboard.addKey("Enter");
        console.log("enter2");
        this.enter_key_quizz.on("down", () => {
          sprawdz_odpowiedzi_akcja();
          this.input.keyboard.removeAllKeys(true);
          this.enter_key_quizz = undefined;
        });
      }
      if (
        //quizz_assets_data.pokaz_zadanie(sceneB.krok_gracz1_na_planszy)[1] === 2
        quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
          .odpowiedz_text[nr_zestawu][3] === 2
      ) {
        this.ifOdpowiedzPoprawna = true;
      } else {
        this.ifOdpowiedzPoprawna = false;
      }
    };
    const odowiedz3_reakcja = () => {
      this.zaznaczenie.setY(735);
      this.zaznaczenie.setAlpha(1);
      this.przycisk_sprawdz.setAlpha(1);
      if (this.enter_key_quizz === undefined) {
        this.enter_key_quizz = this.input.keyboard.addKey("Enter");
        console.log("enter2");
        this.enter_key_quizz.on("down", () => {
          sprawdz_odpowiedzi_akcja();
          this.input.keyboard.removeAllKeys(true);
          this.enter_key_quizz = undefined;
        });
      }
      if (
        //quizz_assets_data.pokaz_zadanie(sceneB.krok_gracz1_na_planszy)[1] === 3
        quizz_assets_data.pokaz_zadanie_2(sceneB.krok_gracz1_na_planszy)
          .odpowiedz_text[nr_zestawu][3] === 3
      ) {
        this.ifOdpowiedzPoprawna = true;
      } else {
        this.ifOdpowiedzPoprawna = false;
      }
    };

    this.odpowiedz1.on("pointerdown", () => {
      odowiedz1_reakcja();
    });

    this.odpowiedz2.on("pointerdown", () => {
      odowiedz2_reakcja();
    });

    this.odpowiedz3.on("pointerdown", () => {
      odowiedz3_reakcja();
    });

    const powrot_do_gry_po_quizzie = () => {
      this.odpowiedz_dobra_plansza.setAlpha(0);
      this.odpowiedz_zla_plansza.setAlpha(0);
      this.przycisk_dalej.setAlpha(0);
      this.plansza_pod_quizz.setAlpha(0);
      this.odpowiedz1_text.setAlpha(0);
      this.odpowiedz2_text.setAlpha(0);
      this.odpowiedz3_text.setAlpha(0);
      this.odpowiedz1.setAlpha(0);
      this.odpowiedz2.setAlpha(0);
      this.odpowiedz3.setAlpha(0);
      this.zaznaczenie.setAlpha(0);
      this.ramka_odpowiedz.setAlpha(0);
      this.tresc_pytanie.setAlpha(0);

      const powrot_emiter = this.scene.scene.events;
      powrot_emiter.emit("powrot-do-gry1");
    };

    const sprawdz_odpowiedzi_akcja = () => {
      this.przycisk_sprawdz.setAlpha(0);

      setTimeout(() => {
        this.enter_key_quizz = undefined;
        this.input.keyboard.removeAllKeys(true);
        this.enter_key_quizz_2 = this.input.keyboard.addKey("Enter");

        this.enter_key_quizz_2.on("down", () => {
          powrot_do_gry_po_quizzie();
          this.input.keyboard.removeKey("Enter");
        });
      });

      this.ramka_odpowiedz.setAlpha(0);
      this.input.keyboard.removeKey("TAB");
      if (this.ifOdpowiedzPoprawna) {
        this.odpowiedz_dobra_plansza.setAlpha(1);
        this.przycisk_dalej.setAlpha(1);
        this.dobra_sound.play();
      } else {
        this.odpowiedz_zla_plansza.setAlpha(1);
        //emitowanie eventu odpowiedz zła
        this.przycisk_dalej.setAlpha(1);
        this.zla_sound.play();
        const emit_odpowiedz_zla = this.scene.scene.events;
        emit_odpowiedz_zla.emit("odpowiedz-zla");
      }
    };

    // sprawdź odpowiedzi
    this.przycisk_sprawdz.on("pointerdown", () => {
      sprawdz_odpowiedzi_akcja();
    });

    this.przycisk_dalej.on("pointerdown", () => {
      powrot_do_gry_po_quizzie();
      this.input.keyboard.removeKey("Enter");
    });

    // wyłączenie plansz quizzów po zakończeniu
    this.scene.get("GameSceneMain2").events.on("zakonczenie", () => {
      this.odpowiedz_zla_plansza.setAlpha(0);
      this.plansza_pod_quizz.setAlpha(0);
      this.odpowiedz1.setAlpha(0);
      this.odpowiedz2.setAlpha(0);
      this.odpowiedz3.setAlpha(0);
      this.odpowiedz1_text.setAlpha(0);
      this.odpowiedz2_text.setAlpha(0);
      this.odpowiedz3_text.setAlpha(0);
      this.zaznaczenie.setAlpha(0);
      this.przycisk_dalej.setAlpha(0);
      this.ramka_odpowiedz.setAlpha(0);
    });
  }
}
