
// LANDING

const DatosProductosLanding = [
  {
    id: 1,
    nombre: "Costa Rica",
    precio: "9,00€",
    img: "image/imagen/CostaRica.png",
  },
  {
    id: 2,
    nombre: "Colombia Los Naranjos",
    precio: "9,00€",
    img: "image/imagen/Colombia.png",
  },
  {
    id: 3,
    nombre: "Laos Amanecer",
    precio: "9,00€",
    img: "image/imagen/CostaRica.png",
  },
  {
    id: 4,
    nombre: "Etiopia Yrgacheff",
    precio: "9,00€",
    img: "image/imagen/CostaRica.png",
  },
]

const contenedorLanding = document.querySelector(".cafe4b");


DatosProductosLanding.forEach((prod) => {
  const { id, nombre, precio, img, } = prod;
  if (contenedorLanding) {
    contenedorLanding.innerHTML += `
    <div class="bolsa-cafe">
     <img class="card-img" src="${img}" alt="Card image cap">
        
         <div> <p class="card-title">${nombre}</p></div> 
         <div> <p class="card-text"> ${precio}</p></div> 
           
  <button class="btnbtn-primary" onclick="agregarProducto(${id})">Añadir</button>
      
     </div>
  

      `;
  }
});






// TIENDA

// const DatosProductos = [
//   {
//     id: 1,
//     nombre: "Costa Rica",
//     precio: 9.00,
//     img: "image/imagen/CostaRica.png",
//   },
//   {
//     id: 2,
//     nombre: "Colombia",
//     precio: 9.00,
//     img: "image/imagen/Colombia.png",
//   },
//   {
//     id: 3,
//     nombre: "Laos",
//     precio: 9.00,
//     img: "image/imagen/CostaRica.png",
//   },
//   {
//     id: 4,
//     nombre: "Etiopia",
//     precio: 9.00,
//     img: "image/imagen/CostaRica.png",
//   },
//   {
//     id: 5,
//     nombre: "Kenia",
//     precio: 15.00,
//     img: "image/imagen/CostaRica.png",
//   },
//   {
//     id: 6,
//     nombre: "Etiopia",
//     precio: 17.00,
//     img: "image/imagen/CostaRica.png",
//   },
//   {
//     id: 7,
//     nombre: "Costa Rica",
//     precio: 12.00,
//     img: "image/imagen/CostaRica.png",
//   },
//   {
//     id: 8,
//     nombre: "Colombia La Casita",
//     precio: 9.00,
//     img: "image/imagen/CostaRica.png",
//   }]

// console.log(DatosProductos)

// const contenedorTienda = document.querySelector("#sacosTienda");


// DatosProductos.forEach((prod) => {
//   const { id, nombre, precio, img, } = prod;
//   if (contenedorTienda) {
//     contenedorTienda.innerHTML += `
//         <div class="bolsa-cafe style="width: 18rem;">
//         <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">${nombre}</h5>
//           <p class="card-text">Precio: ${precio}</p>
//           <button class="btn-primary" data-id=${id} ">Comprar Producto</button>
//         </div>
//       </div>
//         `;
//   }  // }onclick="agregarProducto(${id})
 
// });



// sacosTienda.addEventListener('click', e => {

//   addCarrito(e)

// })

// const addCarrito = e => {

//   // console.log(e.target)
//   // console.log(e.target.classList.contains('btn-primary'))
//   if(e.target.classList.contains('btn-primary')) {


// setCarrito(e.target.parentElement)
//   }
// }

// //objeto vacio

// let carrito = {}

// const setCarrito =  objeto => {

// // console.log(objeto)
// const producto = {
// id : objeto.querySelector('btn-primary').id


// }
// console.log(producto)
// }



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