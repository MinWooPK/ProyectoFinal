

function arrow1() {
  let y = document.getElementById('arrow1')
  let x = document.getElementById('arrowbox1');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.transform = "rotate(0deg)"

  } else {
    x.style.display = 'none';
    y.style.transform = "rotate(180deg)";
  }
}

function arrow2() {
  var y = document.getElementById('arrow2')
  var x = document.getElementById('arrowbox2');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.transform = "rotate(0deg)"
  } else {
    x.style.display = 'none';
    y.style.transform = "rotate(180deg)";
  }
}
function arrow3() {
  var y = document.getElementById('arrow3')
  var x = document.getElementById('arrowbox3');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.transform = "rotate(0deg)"
  } else {
    x.style.display = 'none';
    y.style.transform = "rotate(180deg)";
  }
}


//FORMULARIO 

//   let nombre = document.getElementById("nameFormulario")
// let Email = document.getElementById("emailFormulario")
// let telefono = document.getElementById("phoneFormulario")
// let comentario = document.getElementById("messageFormulario")
// let formulario = document.getElementById("formularioLanding")
// let textar = document.getElementById('messageFormulario').value;


// formulario.addEventListener("submit", e=>{
// e.preventDefault()

// let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/

// if(nombre.value.length <6){
//   alert("Nombre no valido")
// }

// if(!regexEmail.test(Email.value)){
//    alert("Email no valido")
// }
// if(textar==''){
//   alert("Texto vacio");

//   }

// else{
//   alert("Enviado")
// }
// })

//Telefono Internacional

// const phoneInputField = document.querySelector("#phoneFormulario");
// const phoneInput = window.intlTelInput(phoneInputField, {
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });
// const info = document.querySelector(".alert-info");

// function process(event) {
//  event.preventDefault();

//  const phoneNumber = phoneInput.getNumber();

//  info.style.display = "";
//  info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
// }

const sacosTienda = document.getElementById('sacosTienda')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

let carrito = {}

document.addEventListener('DOMContentLoaded', () => {

  fetchData()
  if(localStorage.getItem('carrito')){
carrito = JSON.parse(localStorage.getItem('carrito'))

pintarCarrito()
  }
})


const fetchData = async () => {
  try {
    const res = await fetch('/assets/api.json')
    const data = await res.json()
    // console.log(data)
    pintarCards(data)
  } catch (error) {
    console.log(error)

  }

}
const pintarCards = data => {
  // console.log(data)
  data.forEach(producto => {
    // console.log(producto)
    templateCard.querySelector(".titulo").textContent = producto.nombre
    templateCard.querySelector(".precio").textContent = producto.precio
    templateCard.querySelector("img").setAttribute("src", producto.img)
    templateCard.querySelector(".btn-primary").dataset.id = producto.id

    // console.log(producto)
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })

  sacosTienda.appendChild(fragment)
}


sacosTienda.addEventListener('click', e => {

  addCarrito(e)

})

const addCarrito = e => {

  // console.log(e.target)
  // console.log(e.target.classList.contains('btn-primary'))
  if (e.target.classList.contains('btn-primary')) {

    setCarrito(e.target.parentElement)
  }
  e.stopPropagation()
}

//objeto vacio


const setCarrito = objeto => {

  console.log(objeto)

  const producto = {
    id: objeto.querySelector('.btn-primary').dataset.id,
    nombre: objeto.querySelector('.titulo').textContent,
    precio: objeto.querySelector('.precio').textContent,
    imagen: objeto.querySelector('.imagenCafe'),
    cantidad: 1
  }
  console.log(producto)


  if (carrito.hasOwnProperty(producto.id)) {

    producto.cantidad = carrito[producto.id].cantidad + 1

  }

  carrito[producto.id] = { ...producto }
  // Spread operator

  pintarCarrito()
}


const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const templateHeader = document.getElementsByClassName('cafe1d').content
console.log(templateHeader)
console.log(templateFooter)
console.log(templateCarrito)
const pintarCarrito = () => {

  // console.log(carrito)
  items.innerHTML = ''
  Object.values(carrito).forEach(producto => {

    templateCarrito.querySelector('th').textContent = producto.id
    templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
    templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
    templateCarrito.querySelector('.btn-info').dataset.id = producto.id
    templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
    templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)

  })
  items.appendChild(fragment)

  pintarFooter()
  localStorage.setItem('carrito',JSON.stringify(carrito))

}



