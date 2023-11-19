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
