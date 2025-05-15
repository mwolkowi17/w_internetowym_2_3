interface quizz_pojedyncz {
  id: number;
  pytanie: string;
  odpowiedz: number;
  odpowiedz_text: any[][];
  tresc: string;
}

export class Quests {
  kolekcja_assetów: any[][];
  numery_pol_quizz: number[];
  tab_quizz: quizz_pojedyncz[];

  constructor() {
    // propozycjia obiektowa rozwiązania kolekcji pytań do quizzów
    this.tab_quizz = [
      {
        id: 1,
        pytanie: "pytanie1",
        odpowiedz_text: [
          ["bezpieczne", "niebezpieczne", 1],
          ["niebezpieczne", "bezpieczne", 2],
        ],
        odpowiedz: 1,
        tresc: "Symbol kłódki        oznacza połączenie:",
      },
      {
        id: 2,
        pytanie: "pytanie2",
        odpowiedz_text: [
          ["informacje", "paczki", 1],
          ["paczki", "informacje", 2],
        ],
        odpowiedz: 1,
        tresc: "Interentem można przesyłać:",
      },
      {
        id: 4,
        pytanie: "pytanie3",
        odpowiedz_text: [
          ["zamknięta", "otwarta", 1],
          ["otwarta", "zamknięta", 2],
        ],
        odpowiedz: 1,
        tresc: "Bezpieczne połączenie Wi-Fi to sieć:",
      },
      {
        id: 5,
        pytanie: "pytanie4",
        odpowiedz_text: [
          [
            "indywidualnie-każda osoba ma swój",
            "grupowo-wszyscy uczniowie mają swoje",
            1,
          ],
          [
            "grupowo-wszyscy uczniowie mają swoje",
            "indywidualnie-każda osoba ma swój",
            2,
          ],
        ],
        odpowiedz: 1,
        tresc: "Login ustala się:",
      },
      {
        id: 7,
        pytanie: "pytanie5",
        odpowiedz_text: [
          ["emocje", "anonimowość", 1],
          ["anonimowość", "emocje", 2],
        ],
        odpowiedz: 1,
        tresc: "Emotka           wyraża:",
      },
      {
        id: 9,
        pytanie: "pytanie6",
        odpowiedz_text: [
          ["powinno być zmieniane często", "zawsze powinno być takie samo", 1],
          ["zawsze powinno być takie samo", "powinno być zmieniane często", 2],
        ],
        odpowiedz: 1,
        tresc: "Hasło:",
      },
      {
        id: 10,
        pytanie: "pytanie7",
        odpowiedz_text: [
          ["mailowym", "strony internetowej", 1],
          ["strony internetowej", "mailowym", 2],
        ],
        odpowiedz: 1,
        tresc: "Symbolu        używa się w adresie:",
      },
      {
        id: 12,
        pytanie: "pytanie8",
        odpowiedz_text: [
          ["małpę", "węża", 1],
          ["węża", "małpa", 2],
        ],
        odpowiedz: 1,
        tresc: "W Polsce symbol          oznacza:",
      },
      {
        id: 13,
        pytanie: "pytanie9",
        odpowiedz_text: [
          ["komputery", "ludzi", 1],
          ["ludzi", "komputery", 2],
        ],
        odpowiedz: 1,
        tresc: "Sieć Wi-Fi łączy bezprzewodowo:",
      },
      {
        id: 15,
        pytanie: "pytanie10",
        odpowiedz_text: [
          ["udostępniasz innym", "nie udostępniasz innym", 2],
          ["nie udostępniasz innym", "udostępniasz innym", 1],
        ],
        odpowiedz: 2,
        tresc: "Swój login i hasło:",
      },
    ];
  }

  pokaz_zadanie_2(krok_na_planszy: number) {
    for (let n = 0; n <= this.tab_quizz.length; n++) {
      if (this.tab_quizz[n].id === krok_na_planszy) {
        return this.tab_quizz[n];
      }
    }
  }
}
