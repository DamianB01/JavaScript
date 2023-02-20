function kalkulator(){
function dodawanie(a,b){
    a=Number(prompt("Podaj 1 liczbe"));
    b=Number(prompt("Podaj druga liczbe"));
    console.log(a+b);
}
function odejmowanie(a,b){
    a=Number(prompt("Podaj 1 liczbe"));
    b=Number(prompt("Podaj druga liczbe"));
    console.log(a-b);
}
function mnozenie(a,b){
    a=Number(prompt("Podaj 1 liczbe"));
    b=Number(prompt("Podaj druga liczbe"));
    console.log(a*b);
}
function dzielenie(a,b){
    a=Number(prompt("Podaj 1 liczbe"));
    b=Number(prompt("Podaj druga liczbe"));
    console.log(a/b);
}
const x=prompt(`Wybierz co chesz zrobić:
1. Dodawać
2. Odejmować
3. Mnożyć
4. Dzielić
5. Wyjście`);
switch(x){
    case("1"):
        dodawanie();
        break;
    case("2"):
        odejmowanie();
        break;
    case("3"):
        mnozenie();
        break;
    case("4"):
        dzielenie();
        break;
    case("5"):
        console.log("Kalkulator zostal wylaczony");
        break;
    default: 
    console.log("Nie wybrano poprawnej opcji");
    break;
}
}
kalkulator();
