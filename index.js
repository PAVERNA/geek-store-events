// traemos el elemento UL... y lo usaremos en la funcion del onclick
const menuDropdown = document.getElementById("menuDropdown");

//ahora vamos a definir la funcion que tengo en el evento ONCLICK
const dropDown = () => {
  //LE PREGUNTAMOS A MENUDROPDOWN SI TIENE LA CLASE HIDE!!!! Y SI LA TIENE HACEMOS X.
  //basicamente con classlist manipulamos las CLASES de los elemenos, en este caso con remove y add. contains pregunta si lo tiene
  if (menuDropdown.classList.contains("hide")) {
    menuDropdown.classList.remove("hide");
  } else {
    menuDropdown.classList.add("hide");
  }
};

//! AHORA VAMOS A TRABAJAR SOBRE LOS CORAZONES QUE ESTAN EN LAS IMAGENES

const heart = document.getElementsByClassName("heart"); // agarramos por className porque hay muchas clases iguales!

for (let i = 0; i < heart.length; i++) {
  //heart en la posicion en que se encuentreee, por eso ponermos la [I]
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("clicked");
  });
}

//! AHORA VAMOS A TRABAJAR CON LOS CART
const total = document.getElementById("total");
const buyBtn = document.getElementsByClassName("buyBtn");

//function cart: es una iife!
(function () {
  total.innerHTML = 0;
  let acumulador = +total.innerHTML;
  //console.log(typeof acumulador);

  for (let i = 0; i < buyBtn.length; i++) {
    //esto es un callback: el primer param es que tipod de evento va a pasar (un click), el segundo es que va a hacer, que en este caso es na funcion
    buyBtn[i].addEventListener("click", function () {
    //aca guarddo el valor que voy a querer sumarle, el valor del producto del boton que aprete
      let newProd = parseInt(buyBtn[i].innerHTML); //toma el precio y lo convienrte a numero. AL USAR LA [I], sabe que boton toqué
     // console.log(typeof newProd, newProd);
      acumulador = acumulador + newProd
      
      console.log(acumulador);
      total.innerHTML = acumulador
    });
  }
})();
