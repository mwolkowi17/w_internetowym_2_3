export class metodyPomocnicze {
  constructor() {}

  static myEventPoinerOverOut(button: any) {
    button.on("pointerover", function (event) {
      this.setTint(0x8080ff);
      document.body.style.cursor = "pointer";
    });
    button.on("pointerout", function (event) {
      this.clearTint();
      document.body.style.cursor = "initial";
    });
  }

  // function which creates input
  static create_input(left_pos: string, bottom_pos: string) {
    const el = document.createElement("input");
    const stage = document.getElementById("inner_cont");
    stage.appendChild(el);
    el.textContent = "Wpisz coś";
    el.style.height = "30px";
    el.style.width = "150px";
    el.style.position = "absolute";
    el.style.zIndex = "2";
    el.style.border = "3px solid red";
    el.style.borderRadius = "4px";
    el.style.padding = "5px";
    el.style.fontSize = "20px";
    el.style.left = left_pos; //np "45%"
    el.style.bottom = bottom_pos; //np "30%"
    return el;
  }

  //funkcja zwracająca jedną liczbę - odpwiednik rzutu kostką, główny mechanizm losujący wynik kostki w scenie

  static rzucaj(): integer {
    let wynik;
    wynik = Math.floor(Math.random() * 6);
    return wynik;
  }

  // funkcja sterująca który wynik rzutu kostką wyświetlić z kolekcji wszystkich możliwych widoków
  static pokaz_kostke(a: integer, grafika: Phaser.GameObjects.Image[]) {
    for (let x = 0; x < 6; x++) {
      if (x === a) {
        grafika[x].setAlpha(1);
      } else {
        grafika[x].setAlpha(0);
      }
    }
  }
}
