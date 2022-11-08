// function preguntasfrecuentes(){


// ImgComoHagoElPedido.onclick = function () {
//     PComoHagoElPedido.hidden = true
// }
// ImgPorqueLosPreciosSonTanBajos.onclick = function () {
//     PPorqueLosPreciosSonTanBajos.hidden = true
// }

// ImgEsPosibleEnviarCafeAMiOficina.onclick = function () {
//     PEsPosibleEnviarCafeAMiOficina.hidden = true
// }
// }


// const imgpreguntasfrecuentes = document.querySelector("#imgpreguntasfrecuentes");
// const preguntasfrecuentes = document.querySelector('#preguntasfrecuentes');
// console.log(preguentasfrecuentes)
// imgpreguntasfrecuentes.addEventListener('click', function () {


 


// })
// imgpreguntasfrecuentes.transform: rotate(180deg);

// ()

// imgpreguntasfrecuentes1.onclick = function (){
//   preguntasprecuentes1.hidden =true
// }
// const flecha2 = document.getElementById("imgpreguntasfrecuetnes2");
//  flecha2.onclick = function() {
//     if (preguntafrecuetne2.style.display === "none") {
//         preguntafrecuetne2 .style.display = "block";
//     } else {
//         preguntafrecuetne2.style.display = "none";
//     }
//   }

  function arrow1() {
    var y =document.getElementById('arrow1')
    var x = document.getElementById('arrowbox1');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.transform = "rotate(0deg)"

    } else {
      x.style.display = 'none';
      y.style.transform = "rotate(180deg)";
    }
  }

  function arrow2() {
    var y =document.getElementById('arrow2')
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
    var y =document.getElementById('arrow3')
    var x = document.getElementById('arrowbox3');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.transform = "rotate(0deg)"
    } else {
      x.style.display = 'none';
     y.style.transform = "rotate(180deg)";
    }
  }