
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
  console.log(e.target.classList.contains('btn-primary'))
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

const pintarFooter = () => {
  footer.innerHTML = ''
  if (Object.keys(carrito).length === 0) {

    footer.innerHTML = `            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
    `
    return
  }
  const carritoContenedor = document.getElementsByClassName('cafe1d').content

  const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
  const nPrecioTotal = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
  console.log(nCantidad)
  // console.log(nPrecioTotal)
  templateFooter.querySelectorAll('td')[0].textContent = nCantidad
  document.querySelector('.carritoNumero').textContent = nCantidad
  templateFooter.querySelector('span').textContent = nPrecioTotal

  const clone = templateFooter.cloneNode(true)
  fragment.appendChild(clone)
  footer.appendChild(fragment)

  const btnVaciar = document.getElementById('vaciar-carrito')
  btnVaciar.addEventListener('click', () => {

    carrito = {}
    pintarCarrito()

  })
}

//AUMENTO DE BOTON
items.addEventListener('click', e => {
  btnAction(e)

})

const btnAction = e => {
  // console.log(e.target)
  // Accion de Aumentar
  if (e.target.classList.contains('btn-info')) {
    console.log(carrito[e.target.dataset.id])
    // carrito[e.target.dataset.id]

    const producto = carrito[e.target.dataset.id]
    // producto.cantidad = carrito[e.target.dataset.id].cantidad + 1
    producto.cantidad++
    // misma accion


    carrito[e.target.dataset.id] = { ...producto }
    pintarCarrito()


  }

  if (e.target.classList.contains('btn-danger')) {
    const producto = carrito[e.target.dataset.id]
    producto.cantidad--
    if (producto.cantidad === 0) {

      delete carrito[e.target.dataset.id]

    }
    pintarCarrito()


  }

  e.stopPropagation()

}