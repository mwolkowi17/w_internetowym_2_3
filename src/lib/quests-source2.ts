interface quizz_pojedyncz {
  id: number;
  pytanie: string;
  odpowiedz: number;
  odpowiedz_text: any[][];
  tresc: string;
}

export class Quests2 {
  kolekcja_assetów: any[][];
  numery_pol_quizz: number[];
  tab_quizz: quizz_pojedyncz[];

  constructor() {
    this.kolekcja_assetów = [
      ["pytanie1_2", 1],
      ["pytanie2_2", 1],
      ["pytanie3_2", 1],
      ["pytanie4_2", 1],
      ["pytanie5_2", 1],
      ["pytanie6_2", 1],
      ["pytanie7_2", 1],
      ["pytanie8_2", 1],
      ["pytanie9_2", 1],
      ["pytanie10_2", 1],
    ];

    // propozycjia obiektowa rozwiązania kolekcji pytań do quizzów
    this.tab_quizz = [
      {
        id: 1,
        pytanie: "pytanie1_2",
        odpowiedz_text: [
          ["w XX wieku", "w XIX wieku", "w XXI wieku", 1],
          ["w XIX wieku", "w XX wieku", "w XXI wieku", 2],
          ["w XXI wieku", "w XIX wieku", "w XX wieku", 3],
        ],
        odpowiedz: 1,
        tresc: "Internet powstał:",
      },
      {
        id: 2,
        pytanie: "pytanie2_2",
        odpowiedz_text: [
          [
            "nie klikasz, usuwasz ten mail",
            "klikasz aby sprawdzić o co chodzi",
            "nie klikasz, ale rozsyłasz do znajomych",
            1,
          ],
          [
            "klikasz aby sprawdzić o co chodzi",
            "nie klikasz, usuwasz ten mail",
            "nie klikasz, ale rozsyłasz do znajomych",
            2,
          ],
          [
            "klikasz aby sprawdzić o co chodzi",
            "nie klikasz, ale rozsyłasz do znajomych",
            "nie klikasz, usuwasz ten mail",
            3,
          ],
        ],
        odpowiedz: 1,
        tresc: "W e-mailu od niezananej osoby jest link, w który:",
      },
      {
        id: 4,
        pytanie: "pytanie3_2",
        odpowiedz_text: [
          [
            "muszą być różne",
            "wybierasz spośród dwóch haseł, których stale używasz",
            "nie klikasz, emailem do znajomych",
            1,
          ],
          [
            "wybierasz spośród dwóch haseł, których stale używasz",
            "muszą być różne",
            "nie klikasz, emailem do znajomych",
            2,
          ],
          [
            "wybierasz spośród dwóch haseł, których stale używasz",
            "nie klikasz, emailem do znajomych",
            "muszą być różne",
            3,
          ],
        ],
        odpowiedz: 1,
        tresc: "Hasła do wielu aplikacji:",
      },
      {
        id: 5,
        pytanie: "pytanie4_2",
        odpowiedz_text: [
          ["miły", "obraźliwy", "złośliwy", 1],
          ["obraźliwy", "miły", "złośliwy", 2],
          ["obraźliwy", "złośliwy", "miły", 3],
        ],
        odpowiedz: 1,
        tresc: "Pod zdjęciem, które ci się podoba zostawiasz komentarz:",
      },
      {
        id: 7,
        pytanie: "pytanie5_2",
        odpowiedz_text: [
          [
            "pytasz ją o zgodę",
            "nie pytasz jej o zgodę",
            "pytasz swoich rodziców o zgodę",
            1,
          ],
          [
            "nie pytasz jej o zgodę",
            "pytasz ją o zgodę",
            "pytasz swoich rodziców o zgodę",
            2,
          ],
          [
            "nie pytasz jej o zgodę",
            "pytasz swoich rodziców o zgodę",
            "pytasz ją o zgodę",
            3,
          ],
        ],
        odpowiedz: 1,
        tresc: "Gdy chcesz umieścić zdjęcie koleżanki w internecie, to:",
      },
      {
        id: 9,
        pytanie: "pytanie6_2",
        odpowiedz_text: [
          ["szyfrowane", "bez szyfrowania", "bardzo szybkie", 1],
          ["bez szyfrowania", "szyfrowane", "bardzo szybkie", 2],
          ["bez szyfrowania", "bardzo szybkie", "szyfrowane", 3],
        ],
        odpowiedz: 1,
        tresc: '"HTTPS"oznacza bezpieczne połączenie:',
      },
      {
        id: 10,
        pytanie: "pytanie7_2",
        odpowiedz_text: [
          [
            "wylogowujesz się z portali, poczty i innych \naplikacji sieciowych",
            "nie wylogowujesz się",
            "wylogowujesz się tylko z portali",
            1,
          ],
          [
            "nie wylogowujesz się",
            "wylogowujesz się z portali, poczty i innych \naplikacji sieciowych",
            "wylogowujesz się tylko z portali",
            2,
          ],
          [
            "nie wylogowujesz się",
            "wylogowujesz się tylko z portali",
            "wylogowujesz się z portali, poczty i innych \naplikacji sieciowych",
            3,
          ],
        ],
        odpowiedz: 1,
        tresc: "Na koniec pracy w siecie zawsze:",
      },
      {
        id: 12,
        pytanie: "pytanie8_2",
        odpowiedz_text: [
          ["uprzejmy", "anonimowy", "nieznany", 1],
          ["anonimowy", "uprzejmy", "nieznany", 2],
          ["anonimowy", "nieznany", "uprzejmy", 3],
        ],
        odpowiedz: 1,
        tresc: "Użytkownik w internecie powinien być:",
      },
      {
        id: 13,
        pytanie: "pytanie9_2",
        odpowiedz_text: [
          [
            "nie przekazujesz nieznajomym",
            "chętnie udostępniasz innym na czacie",
            "wysyłasz obcym ludziom e-mailem",
            1,
          ],
          [
            "nie przekazujesz nieznajomym",
            "chętnie udostępniasz innym na czacie",
            "wysyłasz obcym ludziom e-mailem",
            2,
          ],
          [
            "chętnie udostępniasz innym na czacie",
            "wysyłasz obcym ludziom e-mailem",
            "nie przekazujesz nieznajomym",
            3,
          ],
        ],
        odpowiedz: 1,
        tresc: "Swój numer telefonu:",
      },
      {
        id: 15,
        pytanie: "pytanie10_2",
        odpowiedz_text: [
          [
            "zamieszczać w internecie zdjęć osób bez ich zgody",
            "udostępniać zdjęć własnych zwierząt",
            "umieszczać w internecie zdjęć osób, nawet wtedy, \ngdy się zgodzą",
            1,
          ],
          [
            "udostępniać zdjęć własnych zwierząt",
            "zamieszczać w internecie zdjęć osób bez ich zgody",
            "umieszczać w internecie zdjęć osób, nawet wtedy, \ngdy się zgodzą",
            2,
          ],
          [
            "udostępniać zdjęć własnych zwierząt",
            "umieszczać w internecie zdjęć osób, nawet wtedy, \ngdy się zgodzą",
            "zamieszczać w internecie zdjęć osób bez ich zgody",
            3,
          ],
        ],
        odpowiedz: 1,
        tresc: "Nie wolno",
      },
    ];
  }

  //funkcja która zwróci komplet astetów i parametrów rozwiązań do zadania
  pokaz_zadanie(krok_na_planszy: any): any {
    if (krok_na_planszy === 1) {
      return this.kolekcja_assetów[0];
    }
    if (krok_na_planszy === 2) {
      return this.kolekcja_assetów[1];
    }
    if (krok_na_planszy === 4) {
      return this.kolekcja_assetów[2];
    }
    if (krok_na_planszy === 5) {
      return this.kolekcja_assetów[3];
    }
    if (krok_na_planszy === 7) {
      return this.kolekcja_assetów[4];
    }
    if (krok_na_planszy === 9) {
      return this.kolekcja_assetów[5];
    }
    if (krok_na_planszy === 10) {
      return this.kolekcja_assetów[6];
    }
    if (krok_na_planszy === 12) {
      return this.kolekcja_assetów[7];
    }
    if (krok_na_planszy === 13) {
      return this.kolekcja_assetów[8];
    }
    if (krok_na_planszy === 15) {
      return this.kolekcja_assetów[9];
    }
  }

  pokaz_zadanie_2(krok_na_planszy: number) {
    for (let n = 0; n <= this.tab_quizz.length; n++) {
      if (this.tab_quizz[n].id === krok_na_planszy) {
        return this.tab_quizz[n];
      }
    }
  }
}
