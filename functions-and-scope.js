// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om het geen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

let cumLaudeCount = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeCount = cumLaudeCount + 1;
    }
}
console.log(cumLaudeCount);


// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude (gradesCumLaude) {
    let cumLaudeCountOne = 0;
    for (let i = 0; i < gradesCumLaude.length; i++) {
        if (gradesCumLaude[i] >= 8) {
            cumLaudeCountOne = cumLaudeCountOne + 1;
        }
    }
    return cumLaudeCountOne;
}
const cumLaudeArray = cumLaude([8, 9, 4, 6, 10]);
console.log(cumLaudeArray);



// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend? --- all grades added together divided by grades.length
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen? --- total all grades
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten? --- for loop met grades.length
// Log het antwoord in de terminal.
const grades4 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let total = 0;

function averageGrades () {
    for (let i = 0; i < grades4.length; i++) {
        total += grades4[i];
    }
    return total;
}
const averageTotal = (averageGrades(grades4)) / grades4.length;
console.log(averageTotal);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
// const grades5 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const grades5 = [6, 4, 5]; // geeft 5
// const grades5 = [8, 9, 4, 6, 10]; // geeft 7.4
let total2 = 0;

function averageGrades2 () {
    for (let i = 0; i < grades5.length; i++) {
        total2 += grades5[i];
    }
    return total2;
}
const averageTotal2 = (averageGrades2(grades5)) / grades5.length;
console.log(averageTotal2);


// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
const grades6 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];


function averageGrades3 () {
    let total6 = 0;
    for (let i = 0; i < grades6.length; i++) {
        total6 += grades6[i];
    }
    return total6;
}
const averageTotal3 = (averageGrades3(grades6)) / grades6.length;
console.log(Math.round (averageTotal3));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan? --- for loop
// * Op welke conditie moet ik checken? --- grades7[i] > grades7[i] -1
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.
const grades7 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let cijfer = 0;

for (let i = 0; i < grades7.length; i++) {
    if (grades7[i] > cijfer) {
        cijfer = grades7[i];
    }
}
console.log(cijfer);
// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.


function highestGrade (gradesArray) {
    let cijfer = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] > cijfer) {
            cijfer = gradesArray[i];
        }
    }
    return cijfer;
}
const cijferArray = highestGrade([6, 4, 5]);
console.log(cijferArray);

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
