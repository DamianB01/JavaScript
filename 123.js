const input = document.querySelectorAll("input");
const div = document.querySelector("#opis");
const div2 = document.querySelector("#opis2");
let info;
let liczba=0;
for(const i of input){
  i.addEventListener("click", function () {
      if (i.checked == true){
        info=this.id;
  }
    else {
      info="";
    }
  })
  i.addEventListener("change", e => {
    if (i.checked == true){
      liczba++
    }
    else {
      liczba--;
    }
    div.innerHTML=`Ostatnio wybrane: ${info}`;
    div2.innerHTML="Liczba produktow: "+liczba;
  })
}

