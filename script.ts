/*function NegativSzamKereso(szamok: number[]): number[] {
    var negativ: number[] = [];

    for (var i: number = 0; i < szamok.length; i++) {
        if (szamok[i] < 0) {
            negativ.push(szamok[i]);
        }
    }
    return negativ;
}
console.log(NegativSzamKereso([5, 100, -52, 15, -7, 0, 300, -6561, 6, -0.7]));*/

function VaneNegativ(szamok: number[]): boolean {
    var i: number = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    return i < szamok.length;
}
console.log(VaneNegativ([5, 100, -52, 15, -7, 0, 300, -6561, 6, -0.7]));

/*paraméterul kapott sugárból megállapítja a kör  kerületét és területét
    -tuple
    -kerület= 2* sugar* PI
    -terület= sugar*sugar*PI*/

function KorSzamolo(sugar: number): [number, number] {
    var PI = 3.14;
    var kerulet: number = 2 * sugar * PI;
    var terulet: number = sugar * sugar * PI;
    return [kerulet, terulet]
}
console.log(KorSzamolo(10));

interface Auto {
    Gyarto: string;
    Tipus: string;
    Hengerurtartalom: number;
    BenzinesE: boolean;
}

function Legkisebb(autok: Auto[]): number {

    var minH: number = autok[0].Hengerurtartalom;
    for (var i: number = 1; i < autok.length; i++) {
        if (autok[i].Hengerurtartalom < minH) {
            minH = autok[i].Hengerurtartalom;
        }
    }

    return minH;
}

function BenzinesDB(autok: Auto[]): number {
    var Benzinesek: number = 0;

    for (var i: number = 0; i < autok.length; i++) {
        if (autok[i].BenzinesE == true) {
            Benzinesek++;
        }
    }

    return Benzinesek;
}
/*var A1: Auto = { Gyarto: "OPEL", Tipus: "Corsa", Hengerurtartalom: 1200, BenzinesE: false };
var A2: Auto = { Gyarto: "Suzuki", Tipus: "Swift", Hengerurtartalom: 1400, BenzinesE: true };
var A3: Auto = { Gyarto: "Fiat", Tipus: "Stilo", Hengerurtartalom: 1800, BenzinesE: false };
var A4: Auto = { Gyarto: "Mercedes", Tipus: "A", Hengerurtartalom: 1000, BenzinesE: true };

var autok: Auto[] = [A1, A2, A3, A4];

var minH = Legkisebb(autok);
var Benzinesek=BenzinesDB(autok);
console.log(minH);
console.log(Benzinesek);*/