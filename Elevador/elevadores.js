var gama= prompt("Piso en donde esta Gama");

var elevadorA= prompt("Piso en donde esta el Elevador A");

var elevadorB= prompt("Piso en donde esta el Elevador B");

if (isNaN(gama)|isNaN(elevadorA)|isNaN(elevadorA))
   alert("Escribe un valor numerico")
else
{
  console.log("PosA:"+elevadorA)
  console.log("PosB:"+elevadorB)
  console.log("Piso Gama:"+gama)

  var pisosElevadorAGama= Math.abs(gama-elevadorA)
  var pisosElevadorBGama= Math.abs(gama-elevadorB)


  alert ( "Piso del Elevador B:"+ elevadorA
           +"      Piso del Elevador A:"+ elevadorB);
  if (pisosElevadorAGama == pisosElevadorBGama){
    alert("Gama ambos elevadores ese encuentran a la misma distancia de ti" )
  } else if (pisosElevadorAGama < pisosElevadorBGama) {
    alert("Gama el elevador A  es el mas cercano a tu piso" )
  } else if (pisosElevadorBGama < pisosElevadorAGama) {
    alert("Gama el elevador B  es el mas cercano a tu piso" )
  }
}
