import { Scene } from "phaser";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";
import { PawnMaps } from "../lib/pawn-maps";
import { Traps } from "../lib/traps";

export class SceneMain2 extends Scene {
  krok_gracz1_na_planszy: number;
  ilosc_szans: number;
  pozycje_pionka_gracza1: number[][];
  postac1: Phaser.GameObjects.Image;
  ikona_szansa1: Phaser.GameObjects.Image;
  ikona_szansa2: Phaser.GameObjects.Image;
  ikona_szansa3: Phaser.GameObjects.Image;
  ikona_szansa4: Phaser.GameObjects.Image;
  przycisk_rzut_kostka: Phaser.GameObjects.Image;
  kostka_wynik1: Phaser.GameObjects.Image;
  kostka_wynik2: Phaser.GameObjects.Image;
  kostka_wynik3: Phaser.GameObjects.Image;
  kostka_wynik4: Phaser.GameObjects.Image;
  kostka_wynik5: Phaser.GameObjects.Image;
  kostka_wynik6: Phaser.GameObjects.Image;
  ruch_gracza: Phaser.GameObjects.Image;
  klik_sound:
    | Phaser.Sound.NoAudioSound
    | Phaser.Sound.HTML5AudioSound
    | Phaser.Sound.WebAudioSound;
  space_key: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: "GameSceneMain2",
    });
  }

  create() {
    //pozycja startowa gracza nr 1
    this.krok_gracz1_na_planszy = 0;

    //zdefinowanie pozycji (mapy wszystkich pozycji) gracza nr 1
    this.pozycje_pionka_gracza1 = new PawnMaps().pionek_gracza1;

    //początkowa ilość "szans"
    this.ilosc_szans = 4;

    //ADDING ASSETS TO SCENE
    this.add.image(960, 540, "plansza_level2");

    //dodanie pionka
    this.postac1 = this.add.image(100, 390, "pionek1");

    //przycisk rzutu kostką
    this.przycisk_rzut_kostka = this.add
      .image(1673, 615, "rzut_przycisk1")
      .setInteractive()
      .setAlpha(1);

    metodyPomocnicze.myEventPoinerOverOut(this.przycisk_rzut_kostka);

    //sound add
    this.klik_sound = this.sound.add("klik", { loop: false });

    this.ruch_gracza = this.add
      .image(1672, 615, "ruch_gracza")
      .setInteractive()
      .setAlpha(0);

    //ikony szans - ile graczowi pozostało jeszcze po odpwiedziach na pytania w quizzach
    this.ikona_szansa1 = this.add.image(1510, 424, "zycie1").setAlpha(1);
    this.ikona_szansa2 = this.add.image(1610, 424, "zycie1").setAlpha(1);
    this.ikona_szansa3 = this.add.image(1710, 424, "zycie1").setAlpha(1);
    this.ikona_szansa4 = this.add.image(1810, 424, "zycie1").setAlpha(1);

    //kostki do rzutu - widoki wyniku wyrzyconego
    //kolekcja wszystkich możliwych widoków
    const kostki: Phaser.GameObjects.Image[] = [];

    //poszczególne widoki
    this.kostka_wynik1 = this.add
      .image(1675, 812, "kostka_wyniki1")
      .setAlpha(0);

    kostki.push(this.kostka_wynik1);

    this.kostka_wynik2 = this.add
      .image(1675, 812, "kostka_wyniki2")
      .setAlpha(0);

    kostki.push(this.kostka_wynik2);

    this.kostka_wynik3 = this.add
      .image(1675, 812, "kostka_wyniki3")
      .setAlpha(0);

    kostki.push(this.kostka_wynik3);

    this.kostka_wynik4 = this.add
      .image(1675, 812, "kostka_wyniki4")
      .setAlpha(0);

    kostki.push(this.kostka_wynik4);

    this.kostka_wynik5 = this.add
      .image(1675, 812, "kostka_wyniki5")
      .setAlpha(0);

    kostki.push(this.kostka_wynik5);

    this.kostka_wynik6 = this.add
      .image(1675, 812, "kostka_wyniki6")
      .setAlpha(0);

    kostki.push(this.kostka_wynik6);

    //inicjalizacja nowej instancji osadzonej sceny GameQuizz
    if (!this.scene.isActive("GameQuizz2")) {
      this.scene.run("GameQuizz2");
    }

    //inicjalizacja nowej instancji osadzonej sceny GameTrap
    if (!this.scene.isActive("GameTrap")) {
      this.scene.run("GameTrap");
    }

    //EVENTY

    //flaga true/false pokazująca czy gracz nr 1 nie przeszedł całej planszy, wartość falsce wskazuje zakończenie ruchu na planszy
    let kontrolka_ruch_na_planszy: boolean = true;

    // licznik ruchu na planszy - faktyczny ruch pionka
    let ruch_lokalny: number = 0;

    //to co dzieje się jako następstwo akcji rzut kostką
    const rzut_kostka = () => {
      console.log("rzut kostką!");
      this.klik_sound.play();
      this.przycisk_rzut_kostka.setAlpha(0);
      this.ruch_gracza.setAlpha(1);

      //========================================================================================
      let i = 0; //  set your counter to 0

      //========================================================================================

      //uruchomienie mechanizmu losującego (line 195)
      let wynik_rzutu = metodyPomocnicze.rzucaj();
      console.log(wynik_rzutu);

      //wyświetlenie wyrzuconego wyniku na kostce (line 159)
      metodyPomocnicze.pokaz_kostke(wynik_rzutu, kostki);

      //!!============================ruch pionka loop =========================================
      const myLoopPionek = (arg_A: any, arg_B: any, arg_C: any) => {
        //  create a loop function
        setTimeout(function () {
          //  call a 1s setTimeout when the loop is called

          arg_A.setPosition(arg_B[arg_C + i][0], arg_B[arg_C + i][1]);
          if (ruch_lokalny >= 15) {
            console.log("Zwycięstwo!");
            kontrolka_ruch_na_planszy = false;
            console.log("wygrałeś!!!");
            wywolanie_sceny_koncowej();
          }

          // funkcja która sprawdza czy jest quizz i go odpala
          pulapka_czy_quizz();

          ruch_lokalny++;

          i++; //  increment the counter
          if (i <= wynik_rzutu && ruch_lokalny <= 15) {
            myLoopPionek(arg_A, arg_B, arg_C); //  ..  again which will trigger another
          } //  ..  setTimeout()
        }, 1000);
      };

      //wyświetlenie pozycji pionka gracza nr 1 po rzucie
      if (kontrolka_ruch_na_planszy === true) {
        //  start the loop
        myLoopPionek(
          this.postac1,
          this.pozycje_pionka_gracza1,
          this.krok_gracz1_na_planszy
        );

        this.krok_gracz1_na_planszy =
          this.krok_gracz1_na_planszy + wynik_rzutu + 1;
        console.log("krok na planszy: " + this.krok_gracz1_na_planszy);
      }
      //instancja obieku odpowiadającego za pułapki
      const trap = new Traps();

      //funkcja sprawdzająca czy koniec ruchu na planszy i odpalająca quizz lub pułapkę
      const pulapka_czy_quizz = () => {
        if (i === wynik_rzutu && kontrolka_ruch_na_planszy === true) {
          console.log("pulapka albo quizz!!!");
          console.log(trap.czy_polapka(this.krok_gracz1_na_planszy));
          //  tu w momencie kiedy gracz zanjdzie się na polu pułapka będzie go cofało a jak nie to odpala quizz
          if (trap.czy_polapka(this.krok_gracz1_na_planszy)) {
            console.log("wpadka");

            const emiter_wpadka = this.scene.scene.events;
            setTimeout(() => {
              emiter_wpadka.emit("emiter-wpadka");
            }, 1000);
          } else {
            const ee = this.scene.scene.events;
            setTimeout(() => {
              ee.emit("krok-na-planszy", this.krok_gracz1_na_planszy);
            }, 1000);
            this.przycisk_rzut_kostka.setAlpha(0);
          }
        }
      };

      const wywolanie_sceny_koncowej = () => {
        this.scene.start("GameWin");
      };
    };

    this.przycisk_rzut_kostka.on("pointerdown", () => {
      rzut_kostka();
    });

    //dodanie eventów z klawiatury
    //Spacja która powoduje rzucenie kostką
    this.space_key = this.input.keyboard.addKey("Space");

    this.space_key.on("down", () => {
      rzut_kostka();
      this.input.keyboard.removeKey("Space");
    });

    //event listener który "nasłuchuje" kiedy quizz się skończy
    this.scene.get("GameQuizz2").events.on("powrot-do-gry1", () => {
      this.ruch_gracza.setAlpha(0);
      this.przycisk_rzut_kostka.setAlpha(1);
      this.input.keyboard.removeAllKeys(true); //usuwa wszystkie klawisze aby się nic nie dublowało
      //dodanie rzutu kostką po quizzie
      this.space_key = this.input.keyboard.addKey("Space");
      this.space_key.on("down", () => {
        rzut_kostka();
        this.input.keyboard.removeKey("Space");
      });
    });

    //event listener który "nasłuchuje" kiedy odpwiedź quizzu będzie zła
    this.scene.get("GameQuizz2").events.on("odpowiedz-zla", () => {
      console.log("zła odpowiedź");
      this.ilosc_szans = this.ilosc_szans - 1;
      console.log("ilosc_szans:" + this.ilosc_szans);
      if (this.ilosc_szans === 3) {
        this.ikona_szansa4.setAlpha(0);
      }
      if (this.ilosc_szans === 2) {
        this.ikona_szansa3.setAlpha(0);
      }
      if (this.ilosc_szans === 1) {
        this.ikona_szansa2.setAlpha(0);
      }
      if (this.ilosc_szans === 0) {
        this.ikona_szansa1.setAlpha(0);
        console.log("przegrałeś!!!");
        const emit_zakonczenie = this.scene.scene.events;
        emit_zakonczenie.emit("zakonczenie");
        this.scene.start("GameLoose");
      }
    });

    //event listener który "nasłuchuje" kiedy krok do tyłu
    this.scene.get("GameTrap").events.on("krok-do-tylu-na-planszy", () => {
      console.log("emmiter - krok do tyłu");
      console.log(this.krok_gracz1_na_planszy);
      this.krok_gracz1_na_planszy = this.krok_gracz1_na_planszy - 2;
      ruch_lokalny = ruch_lokalny - 2;
      console.log(this.krok_gracz1_na_planszy);

      this.postac1.setPosition(
        this.pozycje_pionka_gracza1[this.krok_gracz1_na_planszy - 1][0],
        this.pozycje_pionka_gracza1[this.krok_gracz1_na_planszy - 1][1]
      );
      this.ruch_gracza.setAlpha(0);
      this.przycisk_rzut_kostka.setAlpha(1);
      this.input.keyboard.removeAllKeys(true); //usuwa wszystkie klawisze aby się nic nie dublowało
      //dodanie rzutu kostką po pułapce
      this.space_key = this.input.keyboard.addKey("Space");
      this.space_key.on("down", () => {
        rzut_kostka();
        this.input.keyboard.removeKey("Space");
      });
    });
  }
}
